// Service Worker — HQC · CSSBF
// Stratégie : cache-first pour les assets, réseau-first pour questions.js et
// questions-index.js (données régénérées à chaque publication), cache-first
// pour les images (fetch au premier accès, cache ensuite).

const CACHE = 'hqc-v2';
const PRECACHE = [
  './index.html',
  './style.css?v=29',
  './app.js?v=49',
  './oi-config.js?v=1',
  './contexte.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Requêtes externes (API GitHub, fonts…) — bypass SW
  if (url.origin !== self.location.origin) return;

  // questions.js et questions-index.js — réseau en premier (données fraîches
  // régénérées à chaque publication Admin), cache si hors ligne
  if (url.pathname.endsWith('/questions.js') || url.pathname.endsWith('/questions-index.js')) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          if (r.ok) caches.open(CACHE).then(c => c.put(url.pathname, r.clone()));
          return r;
        })
        .catch(() => caches.match(url.pathname).then(c => c || new Response('', { status: 503 })))
    );
    return;
  }

  // Images — cache en premier, réseau si absent
  if (url.pathname.startsWith('/images/')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(r => {
          if (r.ok) caches.open(CACHE).then(c => c.put(e.request, r.clone()));
          return r;
        });
      })
    );
    return;
  }

  // Tous les autres assets — cache en premier, réseau en secours
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});

const CACHE_NAME = 'wc26-timer-v1';
const ASSETS = [
  '/26TIMER/',
  '/26TIMER/index.html',
  '/26TIMER/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

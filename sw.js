const CACHE_NAME = 'fwc26-timer-v1';
const urlsToCache = [
  '/26TIMER/',
  '/26TIMER/index.html',
  '/26TIMER/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

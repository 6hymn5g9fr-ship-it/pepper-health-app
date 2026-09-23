const CACHE = 'pepper-health-v1';
const ASSETS = ['./', './pepper-health-manager.html', './pepper-health-manager.webmanifest', './pepper-icon.svg'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));

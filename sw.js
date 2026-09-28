const CACHE_NAME = "servicify-v1";
const urlsToCache = [
  "/",
  "/style.css",
  "/script.js",
  "/icons/icon-192.png"
];

// Install Service Worker
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Servicify: Files cached");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch from cache
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
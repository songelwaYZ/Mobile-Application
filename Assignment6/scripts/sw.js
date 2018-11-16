// //Registration
 if ('serviceWorker' in navigator) {
   window.addEventListener('load', function() {
     navigator.serviceWorker
     .register('/scripts/sw.js')
     .then(function(registration) {
       // Registration was successful
       console.log('ServiceWorker registration successful ', registration.scope);
     }, function(error) {
       // registration failed :(
       console.log('ServiceWorker registration failed: ', error);
     });
   });
}

 // Files to cache
 var cacheName = cache_no1
var filesToCache = [
     '/',
     '/Mobile-Application/Assignment6/scripts/mainscript.js',
     '/Mobile-Application/Assignment6/bulma.min.css',
      '/Mobile-Application/Assignment6/index.html',
      '/Mobile-Application/Assignment6/images',
      '/Mobile-Application/Assignment6/images/trainStation.jpg',
      '/Mobile-Application/Assignment6/icons/complaint.png',
      '/Mobile-Application/Assignment6/icons/lines.png',
      '/Mobile-Application/Assignment6/icons/menu.jpg',
      '/Mobile-Application/Assignment6/icons/money.png',
      '/Mobile-Application/Assignment6/icons/search.png',
      '/Mobile-Application/Assignment6/manifest.json'
]
// //Installing Service Worker
self.addEventListener('install', function(event) {
   console.log('[Service Worker] Install');
   event.waitUntil(
     caches.open(cacheName)
     .then(function(cache) {
       console.log('Open cache');
       return cache.addAll(filesToCache);
     })
   );
 });

 // Fetching content using Service Worker
 self.addEventListener('fetch', function(event) {
   event.respondWith(
     caches.match(event.request)
     .then(function(request) {
       console.log('[Service Worker] Fetching resource: '+event.request.url);
       return request || fetch(event.request)
       .then(function(response) {
          return response
         .open(cacheName)
         .then(function(cache) {
           console.log('[Service Worker] Caching new resource: '+event.request.url);
           cache.put(event.request, response.clone());
           return response;
         });
       });
     })
   );
 });

/* KILL-SWITCH service worker.
   The old Ralph Lauren site registered a service worker at /sw.js that cached the page
   and kept serving it to returning browsers. The browser auto-checks /sw.js for updates
   on each visit; when it fetches THIS version, it deletes all caches, unregisters itself,
   and reloads open pages onto the current site. Result: returning clients self-heal with
   no cache-clearing on their part. Safe to keep permanently. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(event){
  event.waitUntil((async function(){
    try{
      const keys = await caches.keys();
      await Promise.all(keys.map(function(k){ return caches.delete(k); }));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(function(c){ c.navigate(c.url); });
    }catch(e){}
  })());
});

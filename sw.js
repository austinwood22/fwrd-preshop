const CACHE = 'rl-preshop-v1';

// App shell — everything needed to run offline
const SHELL = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap',
  'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
];

// ── Install: cache the app shell ──────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: clean up old caches ─────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── Fetch strategy ────────────────────────────────────────
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Product images from FWRD CDN — network first, cache fallback
  if (url.hostname.includes('fwrdassets.com') || url.hostname.includes('revolveassets.com')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Google Fonts — cache first
  if (url.hostname.includes('fonts.g') || url.hostname.includes('fonts.googleapis')) {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }))
    );
    return;
  }

  // App shell — cache first, network fallback
  e.respondWith(
    caches.match(e.request)
      .then(r => r || fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match('/index.html'))
      )
  );
});

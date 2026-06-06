// =============================================================================
// AIRFLARE DASHBOARD — Service Worker (PWA offline support)
// v2: networkFirst para el HTML principal → siempre recibe actualizaciones
// =============================================================================

const CACHE_NAME = 'airflare-v2';

// Archivos que se pre-cachean (recursos estáticos que raramente cambian)
const STATIC_ASSETS = [
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png'
];

// Install: pre-cache assets estáticos y tomar control inmediatamente
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Install cache error:', err))
  );
});

// Activate: eliminar cachés antiguos (airflare-v1, etc.) y reclamar clientes
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('[SW] Eliminando caché antiguo:', k);
          return caches.delete(k);
        })
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch strategy:
// - HTML principal (airflare_standalone.html / navegación) → networkFirst
//   Siempre intenta la red primero para recibir actualizaciones;
//   cae al caché solo si no hay conexión.
// - Google Fonts → stale-while-revalidate
// - Otros assets del mismo origen → stale-while-revalidate
// - Externos → red directa
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar peticiones no-GET
  if (request.method !== 'GET') return;

  // Google Fonts: servir caché + actualizar en fondo
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Mismo origen: networkFirst para HTML, staleWhileRevalidate para el resto
  if (url.origin === self.location.origin) {
    const isHtml = request.mode === 'navigate' ||
                   url.pathname.endsWith('.html') ||
                   url.pathname === '/' ||
                   url.pathname.endsWith('/');
    event.respondWith(isHtml ? networkFirst(request) : staleWhileRevalidate(request));
    return;
  }
});

// Network-first: intenta red, cae a caché si falla
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    return new Response('Sin conexión', { status: 503 });
  }
}

// Stale-while-revalidate: devuelve caché y actualiza en fondo
async function staleWhileRevalidate(request) {
  const cache  = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  return cached || await fetchPromise;
}

// =============================================================================
// AIRFLARE DASHBOARD — Service Worker (PWA offline support)
// v4: stale-while-revalidate para TODO (incluido el HTML) → arranque instantáneo
//     desde caché en gama baja / mala conexión; la actualización se aplica en el
//     siguiente arranque. Antes el HTML iba por networkFirst y bloqueaba el
//     arranque esperando la red.
// =============================================================================

const CACHE_NAME = 'airflare-v4';

// Archivos que se pre-cachean (recursos estáticos que raramente cambian).
// Incluimos el HTML principal para que el primer arranque ya quede offline-ready.
const STATIC_ASSETS = [
  './',
  './index.html',
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

// Fetch strategy (todo mismo origen + Google Fonts → stale-while-revalidate):
// - Devuelve el caché al instante (arranque inmediato, incluso sin red).
// - Refresca en segundo plano para el próximo arranque.
// - Externos → red directa (no se interceptan).
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

  // Mismo origen (HTML incluido): caché instantáneo + revalidación en fondo
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }
});

// Stale-while-revalidate: devuelve caché y actualiza en fondo
async function staleWhileRevalidate(request) {
  const cache  = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  // Caché primero; si no hay caché, espera la red; si tampoco hay red, 503.
  return cached || await fetchPromise || new Response('Sin conexión', { status: 503 });
}

// Service worker da Five Star Home.
// Para publicar uma versão nova e forçar atualização nos celulares, troque o número abaixo.
const CACHE = 'fivestar-v2';
const SHELL = [
  '/',
  '/index.html',
  '/admin.html',
  '/manifest.webmanifest',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Páginas: tenta a rede primeiro (versão mais nova), cai para o cache se estiver offline.
  // Cada página fica guardada com o próprio endereço (app do cliente e painel admin separados).
  if (req.mode === 'navigate') {
    const key = url.pathname.startsWith('/admin') ? '/admin.html' : '/index.html';
    event.respondWith(
      fetch(req)
        .then((res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(key, copy)); } return res; })
        .catch(() => caches.match(key))
    );
    return;
  }

  // Demais arquivos: cache primeiro, rede como reserva.
  event.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});

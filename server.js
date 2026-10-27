// Servidor estático simples para o Railway (sem dependências).
// Serve a pasta /public e devolve o index.html para qualquer rota.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, 'public');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8'
};

function send(res, status, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const headers = {
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  };
  // HTML e service worker sempre atualizados; ícones e demais arquivos com cache.
  if (ext === '.html' || path.basename(filePath) === 'sw.js') {
    headers['Cache-Control'] = 'no-cache';
  } else {
    headers['Cache-Control'] = 'public, max-age=604800';
  }
  res.writeHead(status, headers);
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    res.writeHead(400);
    return res.end('Bad request');
  }
  // Atalho: /admin abre o painel do administrador.
  if (urlPath === '/admin' || urlPath === '/admin/') {
    return send(res, 200, path.join(ROOT, 'admin.html'));
  }
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) return send(res, 200, filePath);
    // Qualquer rota desconhecida abre o app.
    send(res, 200, path.join(ROOT, 'index.html'));
  });
});

server.listen(PORT, () => {
  console.log('Five Star Home App rodando na porta ' + PORT);
});

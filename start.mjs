/**
 * Server statis mini tanpa dependency.
 * Jalankan:  node start.mjs
 * Lalu buka:  http://localhost:8000
 * Ganti port dengan:  node start.mjs 3000
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const PORT = Number(process.argv[2]) || 8000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".json": "application/json"
};

createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  let file = join(ROOT, normalize(url).replace(/^([/\\])+/, ""));
  if (url.endsWith("/")) file = join(file, "index.html");

  // Jangan sampai keluar dari folder proyek
  if (!file.startsWith(ROOT)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  try {
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME[extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>404</h1><p>File tidak ditemukan: <code>${url}</code></p><p><a href="/">Kembali</a></p>`);
  }
}).listen(PORT, () => {
  console.log(`\n  Portfolio berjalan di  ->  http://localhost:${PORT}`);
  console.log("  Tekan Ctrl+C untuk menghentikan.\n");
});
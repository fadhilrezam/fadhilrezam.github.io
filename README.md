# Portofolio — Fadhil Reza Maulana

Website portofolio pribadi, **HTML + CSS + JavaScript murni** (tanpa framework, tanpa build step).
Tema gelap, dua bahasa (ID/EN), animasi scroll reveal, dan form kontak.

```
portfolio/
├── index.html              # struktur halaman
├── start.mjs               # server lokal tanpa dependency (Node.js)
├── assets/
│   ├── css/style.css       # seluruh gaya (design tokens + responsif)
│   ├── js/main.js          # render konten, ganti bahasa, animasi, form
│   ├── data/content.js     # ★ SEMUA TEKS ANDA ADA DI SINI
│   ├── avatar.svg          # placeholder foto profil
│   └── favicon.svg
└── README.md
```

## Menjalankan di komputer sendiri

**Cara paling mudah** (butuh Node.js saja, tanpa install apa pun):

```bash
cd portfolio
node start.mjs
# buka http://localhost:8000
```

Alternatif lain:

```bash
npx serve .        # atau
php -S localhost:8000
```

> Membuka `index.html` lewat klik juga bisa, tapi disarankan lewat server agar
> tidak ada error sporadik dari protokol `file://`.

---

## ✏️ Yang perlu Anda isi / lengkapi

Semua teks berada di **`assets/data/content.js`**. Setiap kalimat ditulis sebagai dua versi:

```js
tagline: {
  id: "versi Bahasa Indonesia",
  en: "English version"
}
```

### Sudah terisi dari CV Anda

| Bagian | Status |
|---|---|
| Profil, kontak, sosial media | ✅ |
| Latar belakang (1 ringkasan) | ✅ |
| 4 kelompok core strengths | ✅ |
| Pengalaman kerja (2 perusahaan) | ✅ |
| 4 proyek | ✅ |
| Pendidikan | ✅ (GPA 3.68) |
| 3 sertifikasi | ✅ |
| Interface + pesan error form | ✅ |

### Yang masih perlu Anda lengkapi

1. **Tahun lulus Telkom University** — bagian `education[0].period` (sekarang dikosongkan).
   Contoh: `period: "2016 – 2020"`.
2. **Tahun sertifikat** — bagian `certifications` (`year: "2023"` / `"—"`). Ganti `"—"` dengan tahun terbitnya.
3. **Link proyek yang spesifik** — beberapa kartu masih mengarah ke profil GitHub umum.
   Ganti dengan URL repo / demo masing-masing, misalnya:
   ```js
   links: [{ label: "GitHub", url: "https://github.com/fadhilrezam/nvidia-stock-prediction", icon: "github" }]
   ```
4. **File CV** — simpan PDF-nya di `assets/`, lalu di `index.html` bagian `<script>` isi:
   ```js
   window.CV_URL = "assets/Fadhil-Reza-Maulana-CV.pdf";
   ```
   Tombol **Unduh CV** otomatis muncul setelah diisi.
5. **Form kontak** — daftarkan form di [formspree.io](https://formspree.io) (gratis), lalu di `index.html`:
   ```js
   window.FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxx";
   ```
   Jika dikosongkan, pesan otomatis dibuka di aplikasi email Anda (mailto) — tidak error.
6. **Foto profil** (opsional) — SVG placeholder tersedia di `assets/avatar.svg`.
7. **Domain & SEO** — ubah `<link rel="canonical">` dan `og:url` di `index.html`.
8. **Preferensi bahasa bawaan** — `assets/js/main.js`, fungsi `storedLang()`:
   `return "en"` → `return "id"` bila ingin Bahasa Indonesia saat pertama dibuka.

---

## Cara ganti bahasa

Ada tombol **ID / EN** di navbar. Pilihan bahasa tersimpan di `localStorage`, jadi pengunjung
tetap memakai bahasa yang sama di kunjungan berikutnya. Setiap teks baru otomatis punya dua
versi — tidak ada yang perlu "dibalik" manual.

---

## Deploy (gratis)

### Opsi 1 — GitHub Pages (paling umum)

```bash
cd portfolio
git init
git add .
git commit -m "Portfolio v1"
git branch -M main
git remote add origin https://github.com/<user>/<user>.github.io.git
git push -u origin main
```

Lalu di GitHub → **Settings → Pages → Source: main / (root)**.
Tampilnya di `https://<user>.github.io`.

### Opsi 2 — Netlify / Vercel

Seret folder `portfolio` ke [app.netlify.com/drop](https://app.netlify.com/drop),
atau hubungkan repo GitHub. Tidak perlu build command, publish directory = `.`.

---

## Fitur

- **Responsif penuh** — mobile-first, menu hamburger di bawah 780px.
- **Tema gelap/terang** — tombol di navbar, tersimpan otomatis.
- **Animasi scroll reveal** — elemen muncul halus saat masuk viewport.
- **Scroll spy** — navbar menandai section yang sedang dibaca.
- **Timeline pengalaman kerja**, kartu proyek, daftar sertifikat.
- **Form kontak** dengan fallback mailto + pesan sukses/error bilingual.
- **Aksesibilitas** — skip link, `aria-label`, fokus terlihat, `prefers-reduced-motion` dihormati.
- **SEO** — meta tags, Open Graph, canonical, semantic HTML, heading berurutan.
- **Nol dependency** — bisa dibuka offline, tidak perlu `npm install`.

---

## Catatan teknis

- Font dimuat dari Google Fonts (`Plus Jakarta Sans` + `JetBrains Mono`) agar tampilan
  konsisten. Jika ingin **100% offline**, hapus baris `<link>` Google Fonts di
  `index.html` — sistem akan memakai font fallback (`system-ui`).
- Warna terkontrol lewat CSS variable di bagian atas `style.css`, jadi mengganti tema
  cukup mengubah nilai `--accent`, `--accent-2`, dan `--bg`.
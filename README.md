# Portofolio — Fadhil Reza Maulana

Website portofolio pribadi, **HTML + CSS + JavaScript murni** (tanpa framework, tanpa build step).
Tema gelap, dua bahasa (ID/EN), animasi scroll reveal, dan form kontak.

🌐 **Live:** https://fadhilrezam.github.io

```
portfolio/
├── index.html              # struktur halaman
├── start.mjs               # server lokal tanpa dependency (Node.js)
├── robots.txt, sitemap.xml # SEO
├── .nojekyll               # biar GitHub Pages tidak proses Jekyll
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
7. **Domain** — sudah diisi `https://fadhilrezam.github.io`. Kalau nanti beli domain
   sendiri (mis. `fadhilreza.dev`), ubah `<link rel="canonical">`, `og:url`,
   `robots.txt`, dan `sitemap.xml`.
8. **Preferensi bahasa bawaan** — `assets/js/main.js`, fungsi `storedLang()`:
   `return "en"` → `return "id"` bila ingin Bahasa Indonesia saat pertama dibuka.

---

## Cara ganti bahasa

Ada tombol **ID / EN** di navbar. Pilihan bahasa tersimpan di `localStorage`, jadi pengunjung
tetap memakai bahasa yang sama di kunjungan berikutnya. Setiap teks baru otomatis punya dua
versi — tidak ada yang perlu "dibalik" manual.

---

## Deploy ke GitHub Pages (gratis)

Repo sudah di-`git init` dan commit pertama sudah dibuat. Yang tersisa hanya langkah di bawah.

### Langkah 1 — Buat repo di GitHub

1. Buka https://github.com/new
2. **Owner**: `fadhilrezam`
3. **Repository name**: `fadhilrezam.github.io` ← *wajib persis ini*
4. **Public** ✅ (kalau private, GitHub Pages tidak bisa jalan)
5. **Jangan** centang "Add a README file", "Add .gitignore", atau "Choose a license"
   — supaya tidak bentrok dengan file yang sudah ada di komputer
6. Klik **Create repository**

### Langkah 2 — Push dari komputer

Buka **Git Bash** (atau terminal) lalu jalankan:

```bash
cd /e/side_project/tender_llm/portfolio
git remote add origin https://github.com/fadhilrezam/fadhilrezam.github.io.git
git push -u origin main
```

Saat diminta **Username** → `fadhilrezam`
Saat diminta **Password** → tempel **Personal Access Token**, bukan password GitHub.

<details>
<summary>Cara bikin Personal Access Token (kalau belum punya)</summary>

1. Buka https://github.com/settings/tokens → **Generate new token (classic)**
2. **Note**: `portfolio-deploy`
3. **Expiration**: `90 days` (atau `No expiration` kalau malas perpanjang)
4. Centang **`repo`** saja
5. Klik **Generate token** → salin token yang muncul (hanya muncul sekali)
6. Tempel sebagai Password di langkah push di atas

</details>

### Langkah 3 — Aktifkan GitHub Pages

1. Buka https://github.com/fadhilrezam/fadhilrezam.github.io/settings/pages
2. **Source** → pilih `Deploy from a branch`
3. **Branch** → `main`, folder `/ (root)`
4. Klik **Save**
5. Tunggu 1–3 menit, lalu buka **https://fadhilrezam.github.io**

> Tampilan "Your site is live at …" akan muncul kalau berhasil.

### Cara update website nanti

Edit file di komputer, lalu:

```bash
git add .
git commit -m "update konten"
git push
```

Situs ikut ter-update dalam ±1 menit, tanpa perlu设置 Pages lagi.

### Kalau mau otomatis update tiap `git push`

Buka repo → **Settings → Pages** → bagian **Build and deployment** → **GitHub Actions** →
pilih **Static HTML → Configure**. Workflow otomatis dibuat, lalu setiap push akan
menjalankan build + deploy. Gratis, unlimited.

---

### Alternatif hosting gratis

| Layanan | URL yang didapat | Catatan |
|---|---|---|
| **GitHub Pages** | `fadhilrezam.github.io` | 100 GB/月,带宽 100 GB/bulan. Dipakai sekarang. |
| Netlify | `nama-situs.netlify.app` | Drag-and-drop, TLS gratis, domain gratis |
| Cloudflare Pages | `nama-situs.pages.dev` | Unlimited bandwidth, deploy dari GitHub juga |
| Vercel | `nama-situs.vercel.app` | Paling cepat untuk Next.js, tapi untuk HTML statis berlebihan |

Semua gratis dan cukup untuk website portofolio. Kalau nanti pindah, cukup ubah satu file
(`index.html` bagian canonical + `og:url`).

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
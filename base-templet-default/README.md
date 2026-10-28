# Base Template Default — NEXUS Tech Theme

Tema portal login hotspot MikroTik dengan gaya **teknologi / dark terminal**: latar gelap
dengan grid halus, aksen gradien cyan–indigo–violet, kartu kaca (glassmorphism), dan
tipografi teknis. Semua ikon memakai **inline SVG** (Lucide, lisensi MIT) — tidak ada emoji.

## Halaman

| File | Fungsi |
| --- | --- |
| `login.html` | Form login utama (username, password, tombol Connect, info trial) |
| `status.html` | Dashboard sesi: IP, trafik, uptime, sisa waktu, tombol logout |
| `logout.html` | Konfirmasi sesi berakhir + statistik sesi |
| `error.html` | Halaman error hotspot (`$(error)`) |
| `alogin.html` | Splash "berhasil login" sebelum redirect |
| `radvert.html` | Splash iklan (advert hotspot) |
| `redirect.html` | Redirect cepat (header + meta refresh) |
| `rlogin.html` | WISPr redirect / login required |
| `api.json` | Captive portal API (RFC 8908) |
| `errors.txt` | Daftar pesan error hotspot |
| `md5.js` | Helper CHAP (dipakai saat `$(if chap-id)` aktif) |
| `xml/` | Halaman WISPr untuk klien pintar (dibiarkan apa adanya) |

## Sumber daya eksternal (CDN)

- **Google Fonts** — `Space Grotesk` (teks) dan `JetBrains Mono` (label/mono), dimuat dari
  `fonts.googleapis.com` + `fonts.gstatic.com` (`display=swap`).
- **Ikon** — inline SVG dari set [Lucide](https://lucide.dev) (MIT). Sengaja tidak memakai
  CDN ikon/font-icon agar ikon tetap tampil walaupun walled garden memblokir domain luar.
- **CSS & JS inti** — lokal (`css/style.css`, `js/ui.js`), tanpa framework. Portal tetap
  tampil rapi sebelum klien terautentikasi.

Jika CDN font tidak bisa diakses (umum pada captive portal), teks otomatis memakai
font sistem (`Segoe UI`, `system-ui`, `Arial`) sehingga layout tidak berubah.

## Fitur UI

- Toggle tampilkan/sembunyikan password (`data-toggle-password`).
- Autofocus: ke username bila kosong, ke password bila username sudah terisi.
- Tombol submit terkunci otomatis setelah diklik (mencegah double submit).
- Statistik sesi ditampilkan sebagai kartu angka dengan label mono.
- Responsif 320px ke atas, animasi dimatikan otomatis saat `prefers-reduced-motion`.

## Kustomisasi cepat

Semua warna dan font diatur lewat CSS variable di bagian atas `css/style.css`:

```css
:root {
    --bg: #04070f;          /* warna latar */
    --cyan: #22d3ee;        /* aksen utama */
    --violet: #a78bfa;      /* aksen sekunder */
    --grad: linear-gradient(120deg, #22d3ee 0%, #6366f1 48%, #a855f7 100%);
    --font-sans: "Space Grotesk", system-ui, sans-serif;
    --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

Nama jaringan ("NEXUS NET") dan teks pemasaran ada di `login.html`
(`.brand__name`, `.brand h1`, `.brand p.lead`).

## Catatan untuk MikroTik

- Variabel template RouterOS (`$(link-login-only)`, `$(chap-id)`, `$(error)`,
  `$(username)`, `$(link-redirect)`, `$(hostname)`, dll.) dipertahankan persis seperti
  template asli — tidak ada parameter login yang diubah.
- Saat memakai CHAP, `md5.js` dirujuk sebagai `/md5.js` (sama seperti template asli),
  jadi pastikan file tersebut ikut ter-upload ke root folder hotspot.
- Untuk menjangkau CDN Google Fonts, tambahkan `fonts.googleapis.com` dan
  `fonts.gstatic.com` ke **Walled Garden** bila ingin tipografi kustom tampil
  sebelum login. Tanpa itu, portal tetap berfungsi dengan font sistem.

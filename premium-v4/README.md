# premium-v4

Versi lebih modern dan lengkap dari template login hotspot. Folder ini menyediakan beberapa halaman pendukung yang biasanya dibutuhkan pada portal login jaringan hotspot.

## Fitur

Folder ini mencakup halaman-halaman seperti:

- `login.html` — halaman masuk utama
- `status.html` — menampilkan status pengguna
- `voucher.html` — halaman voucher atau paket
- `layanan.html` — informasi layanan
- `faq.html` — halaman pertanyaan umum
- `aktivasi.html` — halaman aktivasi
- `redirect.html` — redirect setelah proses login
- `error.html` — halaman kesalahan
- `logout.html` — halaman logout

## Struktur Utama

```text
premium-v4/
├── css/
├── js/
├── img/
├── fonts/
├── login.html
├── status.html
├── voucher.html
├── layanan.html
├── aktivasi.html
├── faq.html
├── redirect.html
├── logout.html
├── md5.js
└── api.json
```

## Cara Pakai

1. Salin folder `premium-v4` ke lokasi web hotspot yang tersedia.
2. Sesuaikan desain dengan branding jaringan Anda.
3. Pastikan semua file asset (`css`, `js`, `img`, `fonts`) tetap terhubung dengan benar.
4. Hubungkan konfigurasi hotspot perangkat jaringan agar login page mengarah ke file HTML yang benar.
5. Uji akses dan proses autentikasi dari perangkat client.

## Kelebihan Versi Ini

- tampilan lebih modern
- halaman informasi lebih lengkap
- lebih cocok untuk Wi-Fi publik atau jaringan hotspot yang memerlukan portal lebih profesional

## Catatan

Sebelum dipakai di jaringan produksi, pastikan semua parameter, script, dan redirect sesuai dengan kebutuhan autentikasi yang Anda gunakan.

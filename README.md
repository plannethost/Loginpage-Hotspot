# Loginpage Hotspot

Repository ini berisi template halaman login hotspot/captive portal yang bisa digunakan untuk kebutuhan login user pada jaringan Wi-Fi berbasis MikroTik Hotspot. Terdapat beberapa varian desain yang siap digunakan sebagai halaman login, status, error, voucher, FAQ, dan halaman pendukung lainnya.

## Fitur utama

- Halaman login user hotspot
- Halaman status koneksi
- Halaman logout
- Halaman error / not found / invalid / kuota / expired
- Template voucher dan FAQ
- Desain responsive dengan HTML, CSS, dan JavaScript
- Tersedia beberapa versi tema, seperti `Purple_V1` dan `premium-v4`

## Struktur repository

```text
Loginpage-Hotspot/
├── LICENSE
├── Purple_V1/
│   ├── login.html
│   ├── status.html
│   ├── logout.html
│   ├── faq.html
│   ├── help.html
│   ├── error.html
│   ├── md5.js
│   ├── api.json
│   └── assets/
├── premium-v4/
│   ├── login.html
│   ├── status.html
│   ├── voucher.html
│   ├── faq.html
│   ├── layanan.html
│   ├── aktivasi.html
│   ├── redirect.html
│   ├── css/
│   ├── js/
│   ├── img/
│   └── fonts/
└── README.md
```

## Versi yang tersedia

### 1. Purple_V1
Versi awal dengan tampilan sederhana dan fokus pada fungsi login hotspot.

### 2. premium-v4
Versi yang lebih lengkap dan lebih modern, dengan beberapa halaman pendukung seperti login, voucher, layanan, FAQ, dan status.

## Persyaratan

- Server web yang dapat diakses oleh client hotspot
- Router MikroTik dengan fitur Hotspot aktif
- File HTML/CSS/JS yang digunakan harus ditempatkan di direktori hotspot yang benar pada router atau web server yang dipakai
- Browser modern untuk menampilkan halaman login

## Cara penggunaan

1. Pilih salah satu desain yang ingin dipakai, misalnya `Purple_V1` atau `premium-v4`.
2. Copy seluruh isi folder tersebut ke folder hotspot yang sesuai di server/router Anda.
3. Pastikan konfigurasi MikroTik Hotspot mengarah ke halaman login yang benar.
4. Sesuaikan isi form, teks, logo, dan parameter jaringan sesuai kebutuhan.
5. Uji akses di client, lalu lakukan login menggunakan akun hotspot yang tersedia.

## Konfigurasi umum

Beberapa file template biasanya berhubungan dengan parameter seperti:

- `login.html` = halaman utama login
- `status.html` = halaman status pengguna
- `logout.html` = halaman logout
- `redirect.html` = redirect setelah autentikasi
- `error.html` = halaman kesalahan
- `faq.html` / `help.html` = bantuan dan informasi

Jika Anda memakai router MikroTik, pastikan halaman HTML tersebut sesuai dengan konfigurasi `hotspot` dan `walled-garden` yang aktif pada jaringan Anda.

## Catatan penting

- Template ini umumnya dibuat untuk kebutuhan portal login Wi-Fi/hotspot dan dapat dimodifikasi sesuai kebutuhan branding Anda.
- Disarankan untuk mengecek script JavaScript dan parameter URL sebelum digunakan pada lingkungan produksi.
- Gunakan akun dan autentikasi hotspot sesuai kebijakan jaringan Anda.

## Lisensi

Proyek ini dilindungi oleh lisensi yang terdapat pada file `LICENSE` dalam repository ini.

## Tentang fork

Repositori ini merupakan fork dari template login hotspot yang kemudian dapat disesuaikan, dipelajari, dan dikembangkan lebih lanjut sesuai kebutuhan proyek Anda.

---

Jika Anda mau, saya juga bisa bantu membuatkan:

- README versi lebih formal untuk GitHub
- README versi singkat untuk portfolio
- Versi README dalam bahasa Inggris
- Deskripsi project yang lebih profesional untuk publikasi di GitHub

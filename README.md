# Loginpage Hotspot

Template halaman login hotspot yang dibuat untuk kebutuhan autentikasi pengguna pada jaringan Wi-Fi atau captive portal. Repository ini berisi beberapa varian desain login hotspot yang dapat digunakan untuk MikroTik Hotspot, Wi-Fi publik, dan jaringan internet berbasis portal login.

## Tentang Project

Project ini menyediakan halaman login yang umum dipakai untuk:

- autentikasi pengguna hotspot
- menampilkan informasi status koneksi
- menampilkan halaman error, redirect, dan logout
- menyediakan FAQ, layanan, voucher, dan aktivasi
- memberikan beberapa variasi desain yang dapat disesuaikan

## Struktur Repository

```text
Loginpage-Hotspot/
├── LICENSE
├── README.md
├── Purple_V1/
│   ├── README.md
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
│   ├── README.md
│   ├── login.html
│   ├── status.html
│   ├── logout.html
│   ├── faq.html
│   ├── layanan.html
│   ├── aktivasi.html
│   ├── voucher.html
│   ├── redirect.html
│   ├── css/
│   ├── js/
│   ├── img/
│   └── fonts/
└── LICENSE
```

## Varian yang Tersedia

### Purple_V1
Versi awal dan sederhana, cocok untuk kebutuhan dasar halaman login hotspot. Mudah dimodifikasi dan ringan.

### premium-v4
Versi yang lebih modern dan lebih lengkap, dengan beberapa halaman pendukung seperti login, status, voucher, layanan, FAQ, dan aktivasi.

## Fitur Utama

- form login hotspot
- halaman status pengguna
- halaman logout
- halaman redirect dan error
- voucher, FAQ, dan layanan
- layout HTML, CSS, JS yang mudah dikustomisasi
- dapat dipakai sebagai template portal login Wi-Fi

## Persyaratan

- Server web atau direktori publik yang bisa diakses client
- Router MikroTik dengan fitur hotspot aktif
- Browser modern untuk menampilkan halaman portal login
- Konfigurasi hotspot yang mengarah ke template HTML ini

## Cara Penggunaan

1. Pilih versi template yang ingin dipakai (`Purple_V1` atau `premium-v4`).
2. Copy folder template ke lokasi web yang sesuai.
3. Sesuaikan teks, logo, warna, dan struktur halaman sesuai kebutuhan.
4. Konfigurasikan MikroTik Hotspot agar halaman login mengarah ke file yang benar.
5. Uji koneksi dari client dan pastikan proses login/redirect berjalan dengan baik.

## Catatan Penting

- Template ini dibuat untuk kebutuhan portal login Wi-Fi/hotspot.
- Sebelum dipakai di production, pastikan URL, parameter, dan script sudah disesuaikan dengan jaringan Anda.
- Gunakan autentikasi dan pengelolaan akses sesuai kebijakan internal jaringan.

## Lisensi

Proyek ini menggunakan lisensi yang ada di file `LICENSE` pada repository ini.

## Fork & Pengembangan

Repository ini merupakan fork dari template login hotspot yang dapat ditingkatkan, dimodifikasi, dan disesuaikan untuk kebutuhan branding atau integrasi jaringan.

---

Silakan lihat folder `Purple_V1` dan `premium-v4` untuk masing-masing versi template yang lebih spesifik.

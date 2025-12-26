# TD Shop — Situs Toko Online (Statis)

Project statis sederhana untuk demonstrasi toko online bernama **TD Shop**.

Fitur:
- Halaman Beranda, Produk, Kontak
- Daftar produk menampilkan foto, nama, harga, deskripsi singkat (dibatasi), tombol "Lihat Detail" dan "WhatsApp"
- Modal popup menampilkan detail produk lengkap
- Tombol WhatsApp membuka chat dengan pesan pra-terisi
- Responsif dan modern

Menjalankan:
1. Buka file `index.html` di peramban (double-click atau `open`).
2. Atau jalankan server statis (opsional) seperti `npx http-server` pada folder proyek.

Mengganti produk:
- Edit `assets/js/main.js`, ubah array `products` untuk menambah atau mengganti produk.

Mengganti gambar menjadi JPEG/PNG:
- Letakkan file gambar JPEG atau PNG ke folder `assets/img` dengan nama berikut (format .png atau .jpg diperbolehkan):
	- headphone-stellar.png or .jpg
	- speaker-nova.png or .jpg
	- smartwatch-aero.png or .jpg
	- camera-z1.png or .jpg
	- tas-nimbus.png or .jpg
	- charger-turbo.png or .jpg
- Ukuran yang direkomendasikan: 800x600 atau aspek rasio 4:3. Optimalkan ukuran file agar cepat dimuat.
- Jika Anda ingin membuat PNG dari SVG yang ada, gunakan ImageMagick atau alat konversi lain. Contoh perintah:

```powershell
magick assets/img/headphone-stellar.svg assets/img/headphone-stellar.png
```

- Setelah menaruh file gambar, buka kembali `index.html` di browser atau muat ulang server statis.

Catatan:
- Ganti foto, pesan, atau nomor kontak WhatsApp sesuai kebutuhan.

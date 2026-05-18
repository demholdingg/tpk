# Design Documentation — PT Surya Energi Indotama
> Sumber: [suryaenergi.co.id](https://suryaenergi.co.id)  
> Dianalisis pada: 15 Mei 2026

---

## 1. Identitas Brand

| Atribut | Detail |
|---|---|
| Nama Perusahaan | PT Surya Energi Indotama (SEI) |
| Tagline | *"Of Renewable Energy Companies"* |
| Maskot | "Sunny" — karakter maskot ramah bertema matahari |
| Induk Perusahaan | PT Len Industri (Persero) |
| Sub-brand Produk | LenSolar |
| Bahasa Situs | Bilingual — Indonesia (ID) & Inggris (EN) |

---

## 2. Warna

### Palet Utama
Berdasarkan tema energi surya dan keberlanjutan lingkungan:

| Peran | Warna | Keterangan |
|---|---|---|
| **Primary** | Kuning/Amber (solar yellow) | Representasi matahari & energi surya |
| **Secondary** | Hijau (sustainability green) | Merepresentasikan energi terbarukan & lingkungan |
| **Neutral Dark** | Hitam / Abu-abu gelap | Digunakan untuk teks dan latar gelap |
| **Neutral Light** | Putih / Abu-abu terang | Latar section dan kartu |
| **Accent** | Biru langit | Digunakan pada elemen pendukung visual |

### Pendekatan Warna
- Tema **terang & cerah** mendominasi (mencerminkan energi matahari)
- Kontras tinggi antara latar terang dan elemen berwarna
- Penggunaan foto-foto outdoor berskala besar sebagai latar visual

---

## 3. Tipografi

| Elemen | Karakteristik |
|---|---|
| **Heading** | Sans-serif modern, tebal, bersih — berkesan korporat & terpercaya |
| **Body** | Sans-serif bersih, mudah dibaca, ukuran nyaman untuk web |
| **Label/Tag** | Uppercase kecil, digunakan untuk kategori seperti "Berita", "On Grid", "Off Grid" |
| **Numerik Statistik** | Ukuran besar, bold — untuk highlight pencapaian (mis. "67.93 MWp") |

---

## 4. Layout & Grid

### Struktur Halaman Utama
Halaman berstruktur **one-page scroll** dengan seksi-seksi jelas:

1. **Top Bar** — Kontak cepat (telepon & email) + ikon media sosial
2. **Navigation Bar** — Logo kiri, menu horizontal kanan, tombol bahasa (ID/EN)
3. **Hero Section** — Video background full-width + headline + CTA
4. **Berita Terkini** — Grid kartu berita (1 besar + 3 kecil)
5. **Selayang Pandang (Overview)** — Teks deskripsi + foto kantor + daftar layanan
6. **Pengalaman Perusahaan** — Statistik angka besar + tab kategori produk
7. **Produk Kami** — Grid gambar produk (7 item)
8. **K3L / HSE** — Teks + galeri foto slider
9. **Kalkulator PLTS** — Form interaktif + gambar pendamping
10. **Footer** — Kolom kontak, alamat, media sosial, logo anak perusahaan

### Pendekatan Grid
- Menggunakan sistem grid **multi-kolom** (2–3 kolom untuk kartu produk dan berita)
- Layout **asimetris** pada beberapa seksi (teks kiri + gambar kanan, atau sebaliknya)
- **Full-width sections** digunakan bergantian untuk ritme visual

---

## 5. Komponen UI

### Navigasi
- **Top navigation bar** sticky dengan logo SVG
- Menu dengan **dropdown** untuk "Tentang Kami" dan "Media"
- Tombol toggle bahasa **ID / EN**
- Tombol login (ikon) di ujung kanan

### Hero
- Video autoplay **full-screen** sebagai latar
- Teks headline besar di atas video
- Tombol CTA "Lihat Selengkapnya" — gaya outlined atau solid

### Kartu (Cards)
- **Kartu Berita**: gambar thumbnail + label kategori + judul + cuplikan teks + link
- **Kartu Produk**: gambar full-width + label sistem (On Grid/Off Grid/Hybrid) + nama produk
- Efek hover (kemungkinan scale atau overlay)

### Statistik / Counter
- Angka besar bold (mis. `67.93 MWp`, `21,803 Tiang`)
- Label deskriptif di bawahnya
- Disusun dalam grid 3 kolom × 2 baris

### Tab / Accordion
- Digunakan pada bagian "Pengalaman Perusahaan" untuk memilih kategori produk
- Navigasi tab horizontal dengan konten berubah dinamis

### Kalkulator Interaktif
- Dropdown pemilihan **Provinsi** (40+ pilihan)
- Input **tagihan listrik** (dalam Rupiah)
- Tombol "Hitung" untuk menampilkan estimasi penghematan
- Gambar pendamping di sebelah form

### Float Widget (Kontak Cepat)
- Tombol melayang di sudut bawah layar
- Mengembang menjadi menu dengan opsi:
  - WhatsApp
  - Email
  - e-Lapor
  - e-Survei
  - Kalkulator PLTS

### Modal / Popup
- **Welcome Modal** — Sambutan Sunny si maskot saat pertama kunjung
- **Warning Modal** — Peringatan penipuan (Telegram/TikTok)
- **E-Lapor Modal** — Login via Google untuk fitur pelaporan

### Slider / Carousel
- Digunakan pada galeri foto HSE/K3L
- Auto-play dengan navigasi manual (arrow/dot)

---

## 6. Ikonografi & Imagery

### Gaya Gambar
- **Foto nyata** instalasi panel surya (ground-mounted, rooftop, floating)
- **Foto tim lapangan** dengan APD (untuk seksi HSE)
- **Foto kantor dan fasilitas** untuk kesan profesional
- Gambar beresolusi tinggi dengan **rasio 16:9** untuk produk dan **landscape wide** untuk hero

### Ikon
- Ikon kecil bullet (gambar dot) digunakan pada daftar layanan
- Ikon media sosial (Facebook, Twitter/X, YouTube, Instagram)
- Ikon kontak (telepon, email, WhatsApp)

---

## 7. Tone of Voice & Konten

| Dimensi | Karakteristik |
|---|---|
| **Nada** | Profesional, terpercaya, optimistis |
| **Bahasa** | Formal-informatif, campuran Indonesia & terminologi teknis Inggris |
| **Nilai yang ditonjolkan** | Inovasi, keberlanjutan, pengalaman panjang, keselamatan kerja |
| **Angka & Fakta** | Ditonjolkan besar — 17 tahun pengalaman, >60 MWp kapasitas |
| **Sosial** | Aktif publikasi CSR, mudik gratis, santunan — membangun kepercayaan publik |

---

## 8. Navigasi & Arsitektur Informasi

```
├── Beranda
├── Tentang Kami
│   ├── Profil Perusahaan
│   ├── Fasilitas Perusahaan
│   ├── Kesehatan, Keselamatan Kerja & Lingkungan (K3L)
│   ├── Mitra dan Pelanggan
│   └── Testimoni
├── ESG & CSR
├── Bisnis Kami
├── Produk Kami
│   ├── Ground Mounted Solar Power
│   ├── Industrial Rooftop Solar Power
│   ├── Residential Rooftop Solar Power
│   ├── Solar Street Lighting
│   ├── Solar Power for Telecommunication
│   ├── Mini Hydro Power Plant
│   └── Solar Floating Power Plant
├── Pengalaman Kami
├── Media
│   ├── Berita
│   ├── SEI on Frame
│   ├── E-Magazine
│   └── Download Center
└── Karir
```

---

## 9. Responsivitas & Teknis

| Aspek | Detail |
|---|---|
| **CMS** | WordPress (tema custom "sei") |
| **Plugin** | WPML (multilingual), lazy loading gambar |
| **Video Hero** | File `.mp4` self-hosted |
| **Font/Asset** | Disajikan dari server sendiri (tema `/public/assets/`) |
| **Gambar** | Lazy load dengan SVG placeholder (blur-up effect) |
| **Meta/SEO** | Open Graph lengkap, Twitter Card, canonical URL |
| **Aksesibilitas** | Alt text pada semua gambar utama |
| **Kontak Darurat** | WhatsApp floating button untuk akses cepat |

---

## 10. Keunikan Desain

1. **Video background di hero** — memberikan kesan dinamis dan modern dibandingkan gambar statis
2. **Kalkulator PLTS interaktif** — tools fungsional yang langsung melibatkan calon pelanggan
3. **Welcome mascot popup** — Sunny menyambut pengunjung baru, membangun keramahan brand
4. **Warning popup penipuan** — transparansi aktif yang membangun kepercayaan
5. **Float widget multi-fungsi** — satu tombol mengakses 5 layanan sekaligus (WA, email, lapor, survei, kalkulator)
6. **Bilingual (ID/EN)** — menunjukkan orientasi pasar nasional dan internasional
7. **Statistik kapasitas MWp** — bukti nyata skala operasi yang langsung terlihat tanpa harus membaca narasi panjang

---

*Dokumen ini dibuat berdasarkan analisis visual dan struktur konten dari situs resmi PT Surya Energi Indotama.*

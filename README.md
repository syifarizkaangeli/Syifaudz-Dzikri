Markdown
# 🌟 Syifaudz-Dzikri - Aplikasi Bimbingan Mengaji Tajwid

Aplikasi web interaktif berbasis React yang dirancang khusus untuk membantu pembelajaran hukum tajwid Al-Qur'an secara mandiri. Aplikasi ini dilengkapi dengan keyboard Hijaiyah virtual di layar serta pelacak ritme/ketukan visual untuk mempermudah pemahaman harakat.

## ✨ Fitur Utama
*   **Dashboard Materi Dinamis:** Menampilkan daftar bab tajwid dengan indikator status akses (Tersedia/Terkunci).
*   **Virtual Auto-Hijaiyah Keyboard:** Memudahkan pengisian latihan soal tanpa perlu mengubah pengaturan keyboard bahasa di perangkat user.
*   **Visual Rhythm Tracker:** Simulasi ketukan visual ($1$ & $2$ Harakat) untuk melatih ketepatan durasi dengung pada hukum tajwid.
*   **Database Integration:** Menyimpan progres belajar dan hasil latihan secara *real-time* ke **Supabase Cloud**.

## 🛠️ Teknologi yang Digunakan
*   **Frontend:** React (Vite)
*   **Styling:** Tailwind CSS v4
*   **Database & Backend:** Supabase (PostgreSQL)

## 🚀 Cara Menjalankan Proyek Secara Lokal

1. **Clone Repositori Ini:**
   ```bash
   git clone [https://github.com/USERNAME_GITHUB_KAMU/Syifaudz-Dzikri.git](https://github.com/syifarizkangelia/Syifaudz-Dzikri.git)
   cd Syifaudz-Dzikri
Install Dependensi:

Bash
npm install
Konfigurasi Database (Supabase):
Buka file src/supabaseClient.js lalu sesuaikan kredensial proyek dengan Project URL dan Anon Key milik Anda:

JavaScript
const supabaseUrl = 'URL_SUPABASE_ANDA'
const supabaseAnonKey = 'ANON_KEY_ANDA'
Jalankan Aplikasi Mode Development:

Bash
npm run dev
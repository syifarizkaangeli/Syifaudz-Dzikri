import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function HalamanBab({ bab, onKembali }) {
  const [jawaban, setJawaban] = useState('');
  const [isBenar, setIsBenar] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const soal = {
    lafadz: "مَنْ يَقُولُ",
    jawabanBenar: "من يقول",
    latin: "Man Yaquulu",
    penjelasan: "Dengungkan suara di hidung sebanyak 2 ketukan harakat.",
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/17.mp3" 
  };

  const putarAudio = () => {
    setIsPlaying(true);
    const audio = new Audio(soal.audioUrl);
    audio.play();
    audio.onended = () => setIsPlaying(false);
  };

  const tambahHuruf = (huruf) => {
    setJawaban((prev) => prev + huruf);
  };

  const hapusHuruf = () => {
    setJawaban((prev) => prev.slice(0, -1));
  };

  const cekJawaban = async () => {
    setIsSubmitting(true);
    const jawabanBersih = jawaban.trim();
    
    if (jawabanBersih === soal.jawabanBenar) {
      setIsBenar(true);
      try {
        await supabase
          .from('progres_belajar')
          .insert([{ nama_user: "Mama Endah", bab_id: bab.id, status_selesai: true }]);
      } catch (err) {
        console.error("Gagal simpan ke DB:", err);
      }
    } else {
      setIsBenar(false);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      
      {/* Tombol Navigasi Back */}
      <button 
        onClick={onKembali}
        className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200 px-4 py-2 rounded-xl transition duration-200 shadow-sm"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span> Kembali ke Menu
      </button>

      {/* Hero Card Card / Kartu Utama */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white rounded-3xl p-8 shadow-2xl border border-emerald-600/30">
        
        {/* Dekorasi Ornamen Lingkaran BG */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 text-center">
          <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-inner mb-3">
            ✨ {bab.judul} ✨
          </span>
          <p className="text-emerald-100/90 text-sm max-w-lg mx-auto font-light">
            {bab.deskripsi}
          </p>

          {/* Display Lafadz Arab Mewah */}
          <div className="my-6 py-6 px-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner">
            <span className="text-xs font-medium text-emerald-200 tracking-wider uppercase block mb-2">Contoh Lafadz Soal</span>
            <div className="text-5xl md:text-6xl font-extrabold text-amber-300 dir-rtl tracking-widest drop-shadow-md">
              {soal.lafadz}
            </div>
            <p className="text-sm text-emerald-100 italic mt-3 font-serif">"{soal.latin}"</p>
          </div>

          {/* Tombol Audio & Visualizer Ketukan */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button
              onClick={putarAudio}
              disabled={isPlaying}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg transform active:scale-95 ${
                isPlaying 
                  ? 'bg-amber-400 text-emerald-950 animate-pulse ring-4 ring-amber-300/50' 
                  : 'bg-amber-400 hover:bg-amber-300 text-emerald-950 hover:shadow-amber-400/20'
              }`}
            >
              <span className="text-lg">{isPlaying ? '🔊' : '🎧'}</span>
              <span>{isPlaying ? 'Memutar Tartil...' : 'Dengarkan Bacaan'}</span>
            </button>

            {/* Rhythm Tracker 2 Harakat */}
            <div className="flex items-center gap-2 bg-emerald-900/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-500/30">
              <span className="text-xs text-emerald-200 font-medium mr-1">Durasi:</span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs transition-all ${isPlaying ? 'bg-amber-400 text-emerald-950 scale-110 shadow-lg shadow-amber-400/50' : 'bg-emerald-700 text-emerald-200'}`}>1</div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs transition-all delay-150 ${isPlaying ? 'bg-amber-400 text-emerald-950 scale-110 shadow-lg shadow-amber-400/50' : 'bg-emerald-700 text-emerald-200'}`}>2</div>
              <span className="text-xs text-amber-300 font-semibold ml-1">Harakat</span>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Practice Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
            <span className="w-2 h-6 bg-emerald-600 rounded-full"></span>
            Latihan Mandiri
          </h3>
          <span className="text-xs text-slate-400 font-medium">Ketik sesuai teks di atas</span>
        </div>

        {/* Dynamic Display Input */}
        <div className="min-h-[70px] p-4 border-2 border-emerald-100 rounded-2xl bg-gradient-to-r from-emerald-50/30 to-teal-50/30 text-3xl text-right dir-rtl font-bold text-emerald-950 mb-6 flex items-center justify-end shadow-inner">
          {jawaban || <span className="text-slate-300 text-sm font-normal dir-ltr">Gunakan keyboard Arab di bawah...</span>}
        </div>

        {/* 3D Soft Virtual Keyboard Hijaiyah */}
        <div className="grid grid-cols-5 gap-2.5 mb-6 dir-rtl">
          {['م', 'ن', ' ', 'ي', 'ق', 'و', 'ل'].map((char, index) => (
            <button
              key={index}
              onClick={() => tambahHuruf(char)}
              className="py-4 bg-slate-50 hover:bg-emerald-500 hover:text-white active:bg-emerald-700 active:translate-y-1 text-slate-800 font-extrabold text-2xl rounded-2xl border-b-4 border-slate-200 hover:border-emerald-700 shadow-md transition-all duration-150"
            >
              {char === ' ' ? 'Spasi' : char}
            </button>
          ))}
          <button
            onClick={hapusHuruf}
            className="col-span-2 py-4 bg-rose-50 hover:bg-rose-500 hover:text-white active:translate-y-1 text-rose-600 font-bold text-sm rounded-2xl border-b-4 border-rose-200 hover:border-rose-700 shadow-md transition-all"
          >
            ⌫ Hapus
          </button>
        </div>

        {/* Action Button */}
        <button
          onClick={cekJawaban}
          disabled={isSubmitting || !jawaban}
          className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.99] text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-600/30 transition duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Memeriksa & Menyimpan...' : 'Periksa Jawaban Mama ✨'}
        </button>

        {/* Feedback Alert Box */}
        {isBenar !== null && (
          <div className={`mt-6 p-5 rounded-2xl text-center font-bold text-sm transition-all animate-fade-in ${
            isBenar 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20' 
              : 'bg-rose-50 border border-rose-200 text-rose-800'
          }`}>
            {isBenar 
              ? '🎉 MasyaAllah Tabarakallah! Jawaban Mama Benar & Progres Tersimpan!' 
              : '❌ Masih ada yang kurang tepat nih, Mama. Coba ditekan tombol hapus lalu ulangi lagi ya!'}
          </div>
        )}
      </div>

    </div>
  );
}

export default HalamanBab;
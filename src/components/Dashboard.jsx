import React, { useState } from 'react';

function Dashboard({ onPilihBab }) {
  // Kategori Utama: 'iqra' atau 'riwayah'
  const [kategoriUtama, setKategoriUtama] = useState('iqra');
  
  // Sub-Kategori di dalam Iqra: 'tajwid', 'nada', 'hijaiyah'
  const [subKategoriIqra, setSubKategoriIqra] = useState('tajwid');

  // Dummy Status Poin & Level Mama
  const statsMama = {
    poin: 250,
    level: "Pencari Ilmu (Level 3)",
    nextLevelXP: 300,
    persenXP: 83 // (250/300)*100
  };

  // Data Bab Tajwid
  const babTajwid = [
    { id: 1, judul: "Idgham Bi Gunnah", deskripsi: "Mendengung 2 harakat ketika Nun mati bertemu ي, ن, م, و" },
    { id: 2, judul: "Idgham Bila Gunnah", deskripsi: "Tanpa mendengung ketika Nun mati bertemu ل dan ر" },
    { id: 3, judul: "Izhar Halqi", deskripsi: "Dibaca jelas tanpa dengung jika bertemu huruf halq" },
  ];

  // Data Materi Kisah (Ar-Riwayah)
  const materiKisah = [
    { id: 'bestie', judul: "✨ Bestie Nabi (Sahabat)", deskripsi: "Kisah inspiratif para sahabat setia Rasulullah SAW." },
    { id: 'nabiyullah', judul: "🌙 Nabiyullah", deskripsi: "Perjalanan keteladanan 25 Nabi dan Rasul." },
    { id: 'nuzulul', judul: "📖 Nuzulul Qur'an", deskripsi: "Sejarah diturunkannya mukjizat Al-Qur'an." },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">

      {/* 💚 WIDGET POIN HARIAN & LEVEL MAMA */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white rounded-3xl p-6 shadow-xl border border-emerald-600/40 relative overflow-hidden">
        {/* Ornamen Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs text-emerald-200 font-medium tracking-wider uppercase block">
              Progres Belajar Mama
            </span>
            <h2 className="text-xl font-extrabold text-amber-300 mt-0.5">
              {statsMama.level}
            </h2>
          </div>
          
          {/* Badge Poin Harian */}
          <div className="bg-amber-400/20 border border-amber-300/40 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-inner">
            <span className="text-xl">⭐</span>
            <div>
              <span className="text-xs text-amber-200 block leading-none">Poin Harian</span>
              <span className="text-lg font-black text-amber-300 leading-none">{statsMama.poin} XP</span>
            </div>
          </div>
        </div>

        {/* Progress Bar Level */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-emerald-100 font-medium">
            <span>Menuju Level 4</span>
            <span>{statsMama.poin} / {statsMama.nextLevelXP} XP</span>
          </div>
          <div className="w-full h-3 bg-emerald-950/60 rounded-full overflow-hidden p-0.5 border border-emerald-500/30">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${statsMama.persenXP}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 📱 GRID KATEGORI INDUK (ALA GOJEK) */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
          Pilih Kategori Utama
        </h3>

        <div className="grid grid-cols-2 gap-3">
          
          {/* Kategori 1: Iqra' */}
          <button
            onClick={() => setKategoriUtama('iqra')}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 active:scale-95 border ${
              kategoriUtama === 'iqra'
                ? 'bg-emerald-800 text-white border-emerald-700 shadow-md ring-2 ring-emerald-600'
                : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-100'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
              kategoriUtama === 'iqra' ? 'bg-white/20' : 'bg-emerald-100 text-emerald-800'
            }`}>
              📖
            </div>
            <div className="text-left">
              <div className={`text-base font-bold dir-rtl ${kategoriUtama === 'iqra' ? 'text-amber-300' : 'text-emerald-950'}`}>
                اقْرَأْ
              </div>
              <div className={`text-xs font-medium ${kategoriUtama === 'iqra' ? 'text-emerald-100' : 'text-slate-500'}`}>
                Iqra' (Bacalah)
              </div>
            </div>
          </button>

          {/* Kategori 2: Ar-Riwayah */}
          <button
            onClick={() => setKategoriUtama('riwayah')}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 active:scale-95 border ${
              kategoriUtama === 'riwayah'
                ? 'bg-emerald-800 text-white border-emerald-700 shadow-md ring-2 ring-emerald-600'
                : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-100'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
              kategoriUtama === 'riwayah' ? 'bg-white/20' : 'bg-amber-100 text-amber-800'
            }`}>
              📜
            </div>
            <div className="text-left">
              <div className={`text-base font-bold dir-rtl ${kategoriUtama === 'riwayah' ? 'text-amber-300' : 'text-emerald-950'}`}>
                الرِّوَايَةُ
              </div>
              <div className={`text-xs font-medium ${kategoriUtama === 'riwayah' ? 'text-emerald-100' : 'text-slate-500'}`}>
                Ar-Riwayah (Al-Kisah)
              </div>
            </div>
          </button>

        </div>
      </div>

      {/* KONTEN ISI SESUAI KATEGORI UTAMA TERPILIH */}

      {/* 1. ISI KATEGORI IQRA' (Ada Sub-Menu: Tajwid, Nada, Hijaiyah) */}
      {kategoriUtama === 'iqra' && (
        <div className="space-y-4">
          
          {/* Sub-Pilihan di dalam Iqra' */}
          <div className="flex bg-slate-200/80 p-1.5 rounded-2xl gap-1">
            <button
              onClick={() => setSubKategoriIqra('tajwid')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                subKategoriIqra === 'tajwid' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📖 Tajwid
            </button>
            <button
              onClick={() => setSubKategoriIqra('nada')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                subKategoriIqra === 'nada' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🎶 Nada Al-Qur'an
            </button>
            <button
              onClick={() => setSubKategoriIqra('hijaiyah')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                subKategoriIqra === 'hijaiyah' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🔤 Hijaiyah
            </button>
          </div>

          {/* Sub-Kategori 1: Tajwid */}
          {subKategoriIqra === 'tajwid' && (
            <div className="grid gap-3">
              {babTajwid.map((bab) => (
                <div 
                  key={bab.id}
                  onClick={() => onPilihBab(bab)}
                  className="bg-white hover:border-emerald-500 p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer transition group"
                >
                  <div>
                    <h4 className="font-bold text-emerald-900 group-hover:text-emerald-600 transition">{bab.judul}</h4>
                    <p className="text-xs text-slate-500 mt-1">{bab.deskripsi}</p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-sm group-hover:bg-emerald-600 group-hover:text-white transition">
                    →
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Sub-Kategori 2 & 3: Nada / Hijaiyah */}
          {(subKategoriIqra === 'nada' || subKategoriIqra === 'hijaiyah') && (
            <div className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-sm">
              <span className="text-4xl mb-3 block">{subKategoriIqra === 'nada' ? '🎶' : '🔤'}</span>
              <h4 className="font-bold text-emerald-900 text-base">Modul {subKategoriIqra.toUpperCase()}</h4>
              <p className="text-xs text-slate-500 mt-2">
                Materi latihan {subKategoriIqra} siap diisi untuk pembelajaran Mama berikutnya!
              </p>
            </div>
          )}

        </div>
      )}

      {/* 2. ISI KATEGORI AR-RIWAYAH */}
      {kategoriUtama === 'riwayah' && (
        <div className="space-y-4">
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <span className="w-2.5 h-5 bg-amber-500 rounded-full"></span>
            Kisah-Kisah Islami
          </h3>
          <div className="grid gap-3">
            {materiKisah.map((item) => (
              <div 
                key={item.id}
                className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-5 rounded-2xl shadow-md flex items-center justify-between cursor-pointer hover:scale-[1.01] transition"
              >
                <div>
                  <h4 className="font-bold text-amber-300 text-base">{item.judul}</h4>
                  <p className="text-xs text-emerald-100/80 mt-1">{item.deskripsi}</p>
                </div>
                <span className="text-xs bg-amber-400 text-emerald-950 font-extrabold px-3 py-1.5 rounded-xl shadow-sm">
                  Buka Kisah
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Dashboard;
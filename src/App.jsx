import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import HalamanBab from './components/HalamanBab';

function App() {
  const [babTerpilih, setBabTerpilih] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-20">
      
      {/* 🤍 Header Utama Fixed & Transparan (Glassmorphism) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100/60 shadow-sm py-3 px-6 text-center transition-all">
        <h1 className="text-2xl md:text-3xl font-bold font-serif text-emerald-800 tracking-wide drop-shadow-[0_2px_4px_rgba(5,150,105,0.2)]">
          Syifaudz-Dzikri
        </h1>
        <p className="text-[10px] md:text-xs text-emerald-600 font-medium tracking-widest uppercase mt-0.5">
          Bimbingan Mengaji Interaktif Mama
        </p>
      </header>

      {/* Konten Utama */}
      <main className="pb-16">
        {babTerpilih ? (
          <HalamanBab 
            bab={babTerpilih} 
            onKembali={() => setBabTerpilih(null)} 
          />
        ) : (
          <Dashboard 
            onPilihBab={(bab) => setBabTerpilih(bab)} 
          />
        )}
      </main>

    </div>
  );
}

export default App;
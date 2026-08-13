(function(){
  "use strict";

  const API = "https://api.alquran.cloud/v1";

  // Daftar 114 surah ditanam langsung di dalam app, supaya daftar surah
  // tetap tampil walau koneksi internet lambat / belum siap saat app dibuka.
  // Data ayat, audio, dan terjemah tetap diambil dari internet saat surah dibuka.
  const SURAH_DATA = [
    [1,"الفاتحة","Al-Fatihah","Pembukaan",7],[2,"البقرة","Al-Baqarah","Sapi Betina",286],
    [3,"آل عمران","Ali 'Imran","Keluarga Imran",200],[4,"النساء","An-Nisa","Wanita",176],
    [5,"المائدة","Al-Ma'idah","Hidangan",120],[6,"الأنعام","Al-An'am","Binatang Ternak",165],
    [7,"الأعراف","Al-A'raf","Tempat Tertinggi",206],[8,"الأنفال","Al-Anfal","Harta Rampasan Perang",75],
    [9,"التوبة","At-Taubah","Pengampunan",129],[10,"يونس","Yunus","Nabi Yunus",109],
    [11,"هود","Hud","Nabi Hud",123],[12,"يوسف","Yusuf","Nabi Yusuf",111],
    [13,"الرعد","Ar-Ra'd","Guruh",43],[14,"ابراهيم","Ibrahim","Nabi Ibrahim",52],
    [15,"الحجر","Al-Hijr","Gunung Al Hijr",99],[16,"النحل","An-Nahl","Lebah",128],
    [17,"الإسراء","Al-Isra","Perjalanan Malam",111],[18,"الكهف","Al-Kahf","Gua",110],
    [19,"مريم","Maryam","Maryam",98],[20,"طه","Ta-Ha","Ta Ha",135],
    [21,"الأنبياء","Al-Anbiya","Para Nabi",112],[22,"الحج","Al-Hajj","Haji",78],
    [23,"المؤمنون","Al-Mu'minun","Orang-orang Mukmin",118],[24,"النور","An-Nur","Cahaya",64],
    [25,"الفرقان","Al-Furqan","Pembeda",77],[26,"الشعراء","Asy-Syu'ara","Para Penyair",227],
    [27,"النمل","An-Naml","Semut",93],[28,"القصص","Al-Qasas","Kisah-kisah",88],
    [29,"العنكبوت","Al-'Ankabut","Laba-laba",69],[30,"الروم","Ar-Rum","Bangsa Romawi",60],
    [31,"لقمان","Luqman","Luqman",34],[32,"السجدة","As-Sajdah","Sujud",30],
    [33,"الأحزاب","Al-Ahzab","Golongan yang Bersekutu",73],[34,"سبإ","Saba","Kaum Saba",54],
    [35,"فاطر","Fatir","Pencipta",45],[36,"يس","Ya-Sin","Ya Sin",83],
    [37,"الصافات","As-Saffat","Yang Bersaf-saf",182],[38,"ص","Sad","Sad",88],
    [39,"الزمر","Az-Zumar","Rombongan",75],[40,"غافر","Ghafir","Yang Mengampuni",85],
    [41,"فصلت","Fussilat","Yang Dijelaskan",54],[42,"الشورى","Asy-Syura","Musyawarah",53],
    [43,"الزخرف","Az-Zukhruf","Perhiasan",89],[44,"الدخان","Ad-Dukhan","Kabut",59],
    [45,"الجاثية","Al-Jasiyah","Yang Berlutut",37],[46,"الأحقاف","Al-Ahqaf","Bukit-bukit Pasir",35],
    [47,"محمد","Muhammad","Nabi Muhammad",38],[48,"الفتح","Al-Fath","Kemenangan",29],
    [49,"الحجرات","Al-Hujurat","Kamar-kamar",18],[50,"ق","Qaf","Qaf",45],
    [51,"الذاريات","Az-Zariyat","Angin yang Menerbangkan",60],[52,"الطور","At-Tur","Bukit Tursina",49],
    [53,"النجم","An-Najm","Bintang",62],[54,"القمر","Al-Qamar","Bulan",55],
    [55,"الرحمن","Ar-Rahman","Yang Maha Pengasih",78],[56,"الواقعة","Al-Waqi'ah","Hari Kiamat",96],
    [57,"الحديد","Al-Hadid","Besi",29],[58,"المجادلة","Al-Mujadilah","Wanita yang Mengajukan Gugatan",22],
    [59,"الحشر","Al-Hasyr","Pengusiran",24],[60,"الممتحنة","Al-Mumtahanah","Wanita yang Diuji",13],
    [61,"الصف","As-Saff","Barisan",14],[62,"الجمعة","Al-Jumu'ah","Hari Jumat",11],
    [63,"المنافقون","Al-Munafiqun","Orang-orang Munafik",11],[64,"التغابن","At-Tagabun","Hari Ditampakkan Kesalahan",18],
    [65,"الطلاق","At-Talaq","Talak",12],[66,"التحريم","At-Tahrim","Mengharamkan",12],
    [67,"الملك","Al-Mulk","Kerajaan",30],[68,"القلم","Al-Qalam","Pena",52],
    [69,"الحاقة","Al-Haqqah","Hari Kiamat",52],[70,"المعارج","Al-Ma'arij","Tempat Naik",44],
    [71,"نوح","Nuh","Nabi Nuh",28],[72,"الجن","Al-Jinn","Jin",28],
    [73,"المزمل","Al-Muzzammil","Orang yang Berselimut",20],[74,"المدثر","Al-Muddassir","Orang yang Berkemul",56],
    [75,"القيامة","Al-Qiyamah","Hari Kiamat",40],[76,"الانسان","Al-Insan","Manusia",31],
    [77,"المرسلات","Al-Mursalat","Malaikat yang Diutus",50],[78,"النبإ","An-Naba","Berita Besar",40],
    [79,"النازعات","An-Nazi'at","Malaikat yang Mencabut",46],[80,"عبس","'Abasa","Ia Bermuka Masam",42],
    [81,"التكوير","At-Takwir","Menggulung",29],[82,"الإنفطار","Al-Infitar","Terbelah",19],
    [83,"المطففين","Al-Mutaffifin","Orang-orang yang Curang",36],[84,"الإنشقاق","Al-Insyiqaq","Terbelah",25],
    [85,"البروج","Al-Buruj","Gugusan Bintang",22],[86,"الطارق","At-Tariq","Yang Datang di Malam Hari",17],
    [87,"الأعلى","Al-A'la","Yang Paling Tinggi",19],[88,"الغاشية","Al-Gasyiyah","Hari Pembalasan",26],
    [89,"الفجر","Al-Fajr","Fajar",30],[90,"البلد","Al-Balad","Negeri",20],
    [91,"الشمس","Asy-Syams","Matahari",15],[92,"الليل","Al-Lail","Malam",21],
    [93,"الضحى","Ad-Duha","Waktu Duha",11],[94,"الشرح","Asy-Syarh","Kelapangan",8],
    [95,"التين","At-Tin","Buah Tin",8],[96,"العلق","Al-'Alaq","Segumpal Darah",19],
    [97,"القدر","Al-Qadr","Kemuliaan",5],[98,"البينة","Al-Bayyinah","Bukti Nyata",8],
    [99,"الزلزلة","Az-Zalzalah","Kegoncangan",8],[100,"العاديات","Al-'Adiyat","Kuda Perang yang Berlari Kencang",11],
    [101,"القارعة","Al-Qari'ah","Hari Kiamat",11],[102,"التكاثر","At-Takasur","Bermegah-megahan",8],
    [103,"العصر","Al-'Asr","Masa",3],[104,"الهمزة","Al-Humazah","Pengumpat",9],
    [105,"الفيل","Al-Fil","Gajah",5],[106,"قريش","Quraisy","Suku Quraisy",4],
    [107,"الماعون","Al-Ma'un","Barang-barang yang Berguna",7],[108,"الكوثر","Al-Kausar","Nikmat yang Berlimpah",3],
    [109,"الكافرون","Al-Kafirun","Orang-orang Kafir",6],[110,"النصر","An-Nasr","Pertolongan",3],
    [111,"المسد","Al-Masad","Sabut",5],[112,"الإخلاص","Al-Ikhlas","Memurnikan Keesaan Allah",4],
    [113,"الفلق","Al-Falaq","Waktu Subuh",5],[114,"الناس","An-Nas","Manusia",6]
  ].map(x=>({ number:x[0], name:x[1], englishName:x[2], englishNameTranslation:x[3], numberOfAyahs:x[4] }));
  const view = document.getElementById('view');
  const headerExtra = document.getElementById('headerExtra');
  const backSlot = document.getElementById('backBtnSlot');
  const audioEl = document.getElementById('audioEl');
  const miniPlayer = document.getElementById('miniPlayer');
  const miniPlayerText = document.getElementById('miniPlayerText');
  const miniPlayerBtn = document.getElementById('miniPlayerBtn');

  let surahList = [];
  let cache = {}; // number -> {ayahs, editions loaded}
  let currentSurah = null;
  let playQueue = [];
  let playIndex = -1;
  let isPlayingAll = false;

  // Mode untuk memutar seluruh Al-Qur'an dari Home, surah 1 sampai 114.
  let isPlayingAllQuran = false;
  let quranSurahIndex = 0;
  let quranAyahIndex = 0;

  const LANGS = [
    {code:'id.indonesian', label:'Bahasa Indonesia'},
    {code:'en.sahih', label:'English'},
    {code:'ms.basmeih', label:'Bahasa Melayu'},
    {code:'ur.junagarhi', label:'Urdu'},
    {code:'fr.hamidullah', label:'Français'},
    {code:'tr.diyanet', label:'Türkçe'},
    {code:'zh.jian', label:'中文'},
    {code:'es.cortes', label:'Español'}
  ];

  function esc(s){
    const d = document.createElement('div'); d.textContent = s || ''; return d.innerHTML;
  }

  function iconMic(active){
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3z" stroke="white" stroke-width="2"/><path d="M19 11a7 7 0 01-14 0M12 18v3" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`;
  }
  function iconSearch(){
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#5b6b63" stroke-width="2"/><path d="M21 21l-4-4" stroke="#5b6b63" stroke-width="2" stroke-linecap="round"/></svg>`;
  }
  function iconPlay(){ return `<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>`; }
  function iconPause(){ return `<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>`; }

  // ---------- ROUTER ----------
  function renderHome(){
    currentSurah = null;
    stopAll();
    backSlot.innerHTML = '';
    headerExtra.innerHTML = `<div class="brand-tagline">Menjadikan ayat-ayat Al-Qur'an sebagai obat untuk selalu mengingat Allah SWT akan kebesaran-Nya.</div>`;

    view.innerHTML = `
      <div class="search-wrap">
        <div class="search-box">
          ${iconSearch()}
          <input id="searchInput" type="text" placeholder="Cari surah, kata dalam ayat, atau 'Al-Baqarah 255'..." />
          <button class="icon-btn" id="micBtn" title="Cari pakai suara">${iconMic()}</button>
        </div>
        <div class="mic-hint" id="micHint">Tekan mikrofon lalu ucapkan nama surah atau kata yang dicari.</div>
      </div>
      <div class="home-quran-action">
        <button class="play-all-btn" id="playAllQuranBtn">${iconPlay()} Putar Semua Surah</button>
      </div>
      <div class="section-label">Daftar Surah</div>
      <div class="surah-list" id="surahListEl"></div>
      <div id="ayatSearchWrap"></div>
    `;

    if(!surahList.length){ surahList = SURAH_DATA; }
    renderSurahList(surahList);
    document.getElementById('playAllQuranBtn').addEventListener('click', togglePlayAllQuran);

    document.getElementById('searchInput').addEventListener('input', (e)=>{
      const raw = e.target.value.trim();
      const q = raw.toLowerCase();
      document.getElementById('ayatSearchWrap').innerHTML = '';
      clearTimeout(ayatSearchTimer);

      if(!q){ renderSurahList(surahList); return; }

      // Cek pola "nomor:ayat" atau "nomor ayat" -> langsung loncat ke ayat itu
      const refMatch = q.match(/^(\d{1,3})\s*[:\.\s]\s*(\d{1,3})$/);
      if(refMatch){
        const sNum = parseInt(refMatch[1],10), aNum = parseInt(refMatch[2],10);
        const sMeta = SURAH_DATA.find(s=>s.number===sNum);
        if(sMeta && aNum>=1 && aNum<=sMeta.numberOfAyahs){
          showJumpCard(sMeta, aNum);
          return;
        }
      }

      // Cek pola "nama surah" + "nomor ayat" di akhir -> mis. "Al-Baqarah 255" atau "yasin 20"
      const words = q.split(/\s+/);
      if(words.length >= 2 && /^\d{1,3}$/.test(words[words.length - 1])){
        const aNum = parseInt(words[words.length - 1], 10);
        const namePart = words.slice(0, -1).join(' ').replace(/[:.]/g,'').trim();
        if(namePart.length >= 2){
          const sMeta = SURAH_DATA.find(s =>
            s.englishName.toLowerCase().replace(/[-']/g,' ').includes(namePart) ||
            s.englishNameTranslation.toLowerCase().includes(namePart) ||
            s.name.includes(namePart)
          );
          if(sMeta && aNum >= 1 && aNum <= sMeta.numberOfAyahs){
            showJumpCard(sMeta, aNum);
            return;
          }
        }
      }

      const filtered = surahList.filter(s =>
        s.englishName.toLowerCase().includes(q) ||
        s.englishNameTranslation.toLowerCase().includes(q) ||
        s.name.includes(q) ||
        String(s.number).includes(q)
      );
      renderSurahList(filtered);

      // Cari isi ayat (terjemahan) lewat API, didebounce biar ga spam request
      if(q.length >= 3){
        ayatSearchTimer = setTimeout(()=> searchAyatContent(raw), 450);
      }
    });

    setupMic();
  }

  function showJumpCard(sMeta, aNum){
    renderSurahList([sMeta]);
    document.getElementById('ayatSearchWrap').innerHTML =
      `<div class="section-label">Loncat ke Ayat</div>
       <div class="surah-list"><button class="surah-card" id="jumpBtn">
         <div class="surah-num">${sMeta.number}</div>
         <div class="surah-info"><div class="latin">${esc(sMeta.englishName)} — Ayat ${aNum}</div>
         <div class="meta">Ketuk untuk membuka</div></div>
         <div class="surah-arabic">${sMeta.name}</div></button></div>`;
    document.getElementById('jumpBtn').addEventListener('click', ()=> renderSurahDetail(sMeta.number, aNum));
  }

  let ayatSearchTimer = null;

  function searchAyatContent(query){
    const wrap = document.getElementById('ayatSearchWrap');
    if(!wrap) return;
    wrap.innerHTML = `<div class="section-label">Hasil Pencarian Ayat</div><div class="loading" style="padding:16px;">Mencari ayat…</div>`;
    fetch(`${API}/search/${encodeURIComponent(query)}/all/id.indonesian`)
      .then(r=>r.json())
      .then(d=>{
        if(!wrap || document.getElementById('searchInput').value.trim() !== query) return;
        const matches = (d.data && d.data.matches) ? d.data.matches : [];
        if(!matches.length){
          wrap.innerHTML = `<div class="section-label">Hasil Pencarian Ayat</div><div class="empty-msg">Tidak ada ayat yang cocok dengan "${esc(query)}".</div>`;
          return;
        }
        wrap.innerHTML = `<div class="section-label">Hasil Pencarian Ayat (${matches.length})</div>
          <div class="surah-list">${matches.slice(0,30).map(m=>`
            <button class="surah-card" data-snum="${m.surah.number}" data-anum="${m.numberInSurah}">
              <div class="surah-num">${m.surah.number}:${m.numberInSurah}</div>
              <div class="surah-info">
                <div class="latin">${esc(m.surah.englishName)}</div>
                <div class="meta">${esc(m.text)}</div>
              </div>
            </button>
          `).join('')}</div>`;
        wrap.querySelectorAll('.surah-card').forEach(btn=>{
          btn.addEventListener('click', ()=> renderSurahDetail(parseInt(btn.dataset.snum,10), parseInt(btn.dataset.anum,10)));
        });
      })
      .catch(()=>{
        wrap.innerHTML = `<div class="section-label">Hasil Pencarian Ayat</div><div class="empty-msg">Gagal mencari ayat. Periksa koneksi internet.</div>`;
      });
  }

  function renderSurahList(list){
    const el = document.getElementById('surahListEl');
    if(!el) return;
    if(!list.length){ el.innerHTML = `<div class="empty-msg">Surah tidak ditemukan. Coba kata lain.</div>`; return; }
    el.innerHTML = list.map(s => `
      <button class="surah-card" data-num="${s.number}">
        <div class="surah-num">${s.number}</div>
        <div class="surah-info">
          <div class="latin">${esc(s.englishName)}</div>
          <div class="meta">${esc(s.englishNameTranslation)} • ${s.numberOfAyahs} ayat</div>
        </div>
        <div class="surah-arabic">${s.name}</div>
      </button>
    `).join('');
    el.querySelectorAll('.surah-card').forEach(btn=>{
      btn.addEventListener('click', ()=> renderSurahDetail(parseInt(btn.dataset.num,10)));
    });
  }

  function setupMic(){
    const micBtn = document.getElementById('micBtn');
    const micHint = document.getElementById('micHint');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition){
      micBtn.addEventListener('click', ()=>{
        micHint.textContent = "Pencarian suara tidak didukung di browser ini. Gunakan Google Chrome di Android.";
      });
      return;
    }
    const rec = new SpeechRecognition();
    rec.lang = 'id-ID';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    let listening = false;

    micBtn.addEventListener('click', ()=>{
      if(listening){ rec.stop(); return; }
      try{
        rec.start();
        listening = true;
        micBtn.classList.add('listening');
        micHint.textContent = "Mendengarkan… silakan sebutkan nama surah.";
      }catch(e){}
    });
    rec.onresult = (event)=>{
      const text = event.results[0][0].transcript;
      document.getElementById('searchInput').value = text;
      document.getElementById('searchInput').dispatchEvent(new Event('input'));
      micHint.textContent = `Hasil suara: "${text}"`;
    };
    rec.onerror = (event)=>{
      let msg = "Tidak dapat menangkap suara. Coba lagi.";
      if(event.error === 'not-allowed' || event.error === 'permission-denied'){
        msg = "Mikrofon belum diizinkan. Ketuk ikon gembok/info di address bar, lalu izinkan akses Mikrofon untuk halaman ini.";
      } else if(event.error === 'network'){
        msg = "Pencarian suara butuh koneksi internet. Periksa sinyal/WiFi lalu coba lagi.";
      } else if(event.error === 'no-speech'){
        msg = "Suara tidak terdengar. Coba ucapkan lebih dekat ke mikrofon.";
      } else if(event.error === 'audio-capture'){
        msg = "Mikrofon tidak ditemukan di perangkat ini.";
      }
      micHint.textContent = msg;
    };
    rec.onend = ()=>{ listening = false; micBtn.classList.remove('listening'); };
  }


  function pad3(n){ return String(n).padStart(3,'0'); }

  // Audio kata-per-kata berasal dari asset word-by-word Quran CDN.
  // Format file: wbw/SSS_AAA_WWW.mp3
  function wordAudioUrl(surahNum, ayahNum, wordIndex){
    return `https://audio.qurancdn.com/wbw/${pad3(surahNum)}_${pad3(ayahNum)}_${pad3(wordIndex)}.mp3`;
  }

  function splitArabicWords(text){
    return String(text || '').trim().split(/\s+/).filter(Boolean);
  }

  async function fetchSurahData(num){
    if(cache[num] && cache[num].base) return cache[num];

    const editions = "quran-uthmani,en.transliteration,id.indonesian,ar.alafasy";
    const r = await fetch(`${API}/surah/${num}/editions/${editions}`);
    if(!r.ok) throw new Error('Gagal memuat surah');
    const d = await r.json();
    const data = d.data;
    const arabic = data.find(e=>e.edition.identifier==='quran-uthmani');
    const latin = data.find(e=>e.edition.identifier==='en.transliteration');
    const trans = data.find(e=>e.edition.identifier==='id.indonesian');
    const audio = data.find(e=>e.edition.identifier==='ar.alafasy');

    const ayahs = arabic.ayahs.map((a,i)=>({
      number: a.numberInSurah,
      arabic: a.text,
      latin: latin ? latin.ayahs[i].text : '',
      trans: trans ? trans.ayahs[i].text : '',
      audio: audio ? audio.ayahs[i].audio : ''
    }));

    cache[num] = { base: true, ayahs: ayahs, transCode:'id.indonesian' };
    return cache[num];
  }

  function wordButtonsForAyah(surahNum, ayah){
    const words = splitArabicWords(ayah.arabic);
    return words.map((word, i)=>`
      <button class="arabic-word"
              type="button"
              title="Putar kata ini"
              data-word-surah="${surahNum}"
              data-word-ayah="${ayah.number}"
              data-word-index="${i+1}">${word}</button>
    `).join(' ');
  }

  function playSingleWord(surahNum, ayahNum, wordIndex){
    isPlayingAll = false;
    isPlayingAllQuran = false;
    playQueue = []; playIndex = -1;

    document.querySelectorAll('.ayat-play.playing').forEach(el=>el.classList.remove('playing'));
    document.querySelectorAll('.ayat-card.active').forEach(el=>el.classList.remove('active'));
    document.querySelectorAll('.arabic-word.playing').forEach(el=>el.classList.remove('playing'));

    const word = document.querySelector(
      `.arabic-word[data-word-surah="${surahNum}"][data-word-ayah="${ayahNum}"][data-word-index="${wordIndex}"]`
    );
    const card = document.querySelector(`.ayat-card[data-ayah="${ayahNum}"]`);
    if(word) word.classList.add('playing');
    if(card) card.classList.add('active');

    setMiniPlayer(true, `Kata ${wordIndex} • Ayat ${ayahNum}`);
    setMediaSession(surahLabel(surahNum), `Kata ${wordIndex} • Ayat ${ayahNum}`);

    audioEl.src = wordAudioUrl(surahNum, ayahNum, wordIndex);
    audioEl.play().catch(()=>{
      if(word) word.classList.remove('playing');
    });
  }

  async function togglePlayAllQuran(){
    if(isPlayingAllQuran){
      stopAll();
      return;
    }

    stopAll();
    isPlayingAllQuran = true;
    quranSurahIndex = 0;
    quranAyahIndex = 0;

    const btn = document.getElementById('playAllQuranBtn');
    if(btn){
      btn.classList.add('playing');
      btn.innerHTML = `${iconPause()} Hentikan Putar Semua Surah`;
    }
    await playNextQuranAyah();
  }

  async function playNextQuranAyah(){
    if(!isPlayingAllQuran) return;

    if(quranSurahIndex >= SURAH_DATA.length){
      stopAll();
      return;
    }

    const meta = SURAH_DATA[quranSurahIndex];
    try{
      const data = await fetchSurahData(meta.number);
      if(!isPlayingAllQuran) return;

      if(quranAyahIndex >= data.ayahs.length){
        quranSurahIndex++;
        quranAyahIndex = 0;
        await playNextQuranAyah();
        return;
      }

      const a = data.ayahs[quranAyahIndex];
      document.querySelectorAll('.arabic-word.playing').forEach(el=>el.classList.remove('playing'));
      document.querySelectorAll('.ayat-card.active').forEach(el=>el.classList.remove('active'));

      const card = document.querySelector(`.ayat-card[data-ayah="${a.number}"]`);
      if(card) card.classList.add('active');

      setMiniPlayer(true, `${meta.englishName} • Ayat ${a.number}`);
      setMediaSession(meta.englishName, `Ayat ${a.number} dari ${data.ayahs.length}`);
      audioEl.src = a.audio;
      await audioEl.play();
    }catch(e){
      quranAyahIndex++;
      playNextQuranAyah();
    }
  }

  function renderSurahDetail(num, scrollToAyah){
    stopAll();
    currentSurah = num;
    const meta = surahList.find(s=>s.number===num) || SURAH_DATA.find(s=>s.number===num);
    backSlot.innerHTML = `<button class="back-btn" id="backBtn">← Kembali</button>`;
    headerExtra.innerHTML = '';
    document.getElementById('backBtn').addEventListener('click', renderHome);

    view.innerHTML = `
      <div class="surah-title-block" style="padding:18px 20px 4px;">
        <div style="font-family:'Nunito',sans-serif; font-weight:800; font-size:20px; color:var(--emerald-800);">
          ${meta ? esc(meta.englishName) : 'Surah'} <span style="color:var(--ink-soft); font-weight:600; font-size:14px;">(${meta?meta.englishNameTranslation:''})</span>
        </div>
        <div style="font-family:'Amiri',serif; font-size:26px; color:var(--emerald-700); margin-top:4px;">${meta?meta.name:''}</div>
        <button class="play-all-btn" id="playAllBtn">${iconPlay()} Putar Seluruh Surah</button>
      </div>
      <div class="lang-select-wrap">
        <label>Terjemah:</label>
        <select id="langSelect">
          ${LANGS.map(l=>`<option value="${l.code}" ${l.code==='id.indonesian'?'selected':''}>${l.label}</option>`).join('')}
        </select>
      </div>
      <div id="ayatContainer"><div class="loading">Memuat ayat…</div></div>
    `;

    document.getElementById('playAllBtn').addEventListener('click', togglePlayAll);
    document.getElementById('langSelect').addEventListener('change', (e)=> loadTranslation(num, e.target.value));

    loadSurah(num, scrollToAyah);
  }

  function loadSurah(num, scrollToAyah){
    fetchSurahData(num).then(()=>buildAyatUI(num, scrollToAyah)).catch(()=>{
      const c = document.getElementById('ayatContainer');
      if(c) c.innerHTML = `<div class="empty-msg">Gagal memuat ayat. Periksa koneksi internet lalu coba lagi.</div>`;
    });
  }

  function loadTranslation(num, code){
    if(!cache[num]) return;
    if(cache[num].transCode === code) return;
    document.getElementById('ayatContainer').style.opacity = '0.5';
    fetch(`${API}/surah/${num}/${code}`).then(r=>r.json()).then(d=>{
      const ayahs = d.data.ayahs;
      cache[num].ayahs.forEach((a,i)=>{ a.trans = ayahs[i] ? ayahs[i].text : a.trans; });
      cache[num].transCode = code;
      buildAyatUI(num);
    }).catch(()=>{}).finally(()=>{
      document.getElementById('ayatContainer').style.opacity = '1';
    });
  }

  function buildAyatUI(num, scrollToAyah){
    const c = document.getElementById('ayatContainer');
    if(!c) return;
    const ayahs = cache[num].ayahs;
    const bismillah = num !== 9 && num !== 1 ? `<div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>` : '';
    c.innerHTML = bismillah + `<div class="ayat-list">` + ayahs.map(a=>`
      <div class="ayat-card" data-ayah="${a.number}">
        <div class="ayat-top">
          <div class="ayat-badge">Ayat ${a.number}</div>
          <button class="ayat-play" data-ayah="${a.number}">${iconPlay()}</button>
        </div>
        <div class="ayat-arabic">${wordButtonsForAyah(num, a)}</div>
        <div class="word-hint">Ketuk satu kata untuk mendengarkan kata itu saja.</div>
        <div class="ayat-latin">${esc(a.latin)}</div>
        <div class="ayat-trans">${esc(a.trans)}</div>
      </div>
    `).join('') + `</div>`;

    c.querySelectorAll('.ayat-play').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const n = parseInt(btn.dataset.ayah,10);
        playSingleAyah(num, n);
      });
    });

    c.querySelectorAll('.arabic-word').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        playSingleWord(
          parseInt(btn.dataset.wordSurah,10),
          parseInt(btn.dataset.wordAyah,10),
          parseInt(btn.dataset.wordIndex,10)
        );
      });
    });

    if(scrollToAyah){
      const target = c.querySelector(`.ayat-card[data-ayah="${scrollToAyah}"]`);
      if(target){
        setTimeout(()=>{
          target.scrollIntoView({behavior:'smooth', block:'center'});
          target.classList.add('active');
          setTimeout(()=> target.classList.remove('active'), 3000);
        }, 150);
      }
    }
  }

  // ---------- AUDIO ----------
  function stopAll(){
    audioEl.pause();
    audioEl.src = '';
    isPlayingAll = false;
    isPlayingAllQuran = false;
    playQueue = []; playIndex = -1;
    miniPlayer.classList.remove('show');
    document.querySelectorAll('.ayat-card.active').forEach(el=>el.classList.remove('active'));
    document.querySelectorAll('.ayat-play.playing').forEach(el=>el.classList.remove('playing'));
    const pb = document.getElementById('playAllBtn');
    if(pb){ pb.classList.remove('playing'); pb.innerHTML = `${iconPlay()} Putar Seluruh Surah`; }
  }

  function playSingleAyah(num, ayahNum){
    if(!cache[num]) return;
    isPlayingAll = false;
    isPlayingAllQuran = false;
    isPlayingAllQuran = false;
    playQueue = []; playIndex = -1;
    const a = cache[num].ayahs.find(x=>x.number===ayahNum);
    if(!a || !a.audio) return;
    document.querySelectorAll('.ayat-play.playing').forEach(el=>el.classList.remove('playing'));
    document.querySelectorAll('.ayat-card.active').forEach(el=>el.classList.remove('active'));
    const btn = document.querySelector(`.ayat-play[data-ayah="${ayahNum}"]`);
    const card = document.querySelector(`.ayat-card[data-ayah="${ayahNum}"]`);
    if(btn) btn.classList.add('playing');
    if(card) card.classList.add('active');
    setMiniPlayer(true, `Ayat ${ayahNum}`);
    setMediaSession(surahLabel(num), `Ayat ${ayahNum}`);
    audioEl.src = a.audio;
    audioEl.play().catch(()=>{});
  }

  function surahLabel(num){
    const m = surahList.find(s=>s.number===num);
    return m ? m.englishName : 'Surah';
  }

  function togglePlayAll(){
    const btn = document.getElementById('playAllBtn');
    if(isPlayingAll){
      stopAll();
      return;
    }
    if(!cache[currentSurah]) return;
    isPlayingAll = true;
    playQueue = cache[currentSurah].ayahs.slice();
    playIndex = 0;
    btn.classList.add('playing');
    btn.innerHTML = `${iconPause()} Hentikan Putar Surah`;
    playQueueStep();
  }

  function playQueueStep(){
    if(!isPlayingAll || playIndex >= playQueue.length){
      stopAll();
      return;
    }
    const a = playQueue[playIndex];
    document.querySelectorAll('.ayat-card.active').forEach(el=>el.classList.remove('active'));
    document.querySelectorAll('.ayat-play.playing').forEach(el=>el.classList.remove('playing'));
    const card = document.querySelector(`.ayat-card[data-ayah="${a.number}"]`);
    const btn = document.querySelector(`.ayat-play[data-ayah="${a.number}"]`);
    if(card){ card.classList.add('active'); card.scrollIntoView({behavior:'smooth', block:'center'}); }
    if(btn) btn.classList.add('playing');
    setMiniPlayer(true, `Ayat ${a.number} / ${playQueue.length}`);
    setMediaSession(surahLabel(currentSurah), `Ayat ${a.number} dari ${playQueue.length}`);
    audioEl.src = a.audio;
    audioEl.play().catch(()=>{ playIndex++; playQueueStep(); });
  }

  audioEl.addEventListener('ended', ()=>{
    if(isPlayingAll){
      playIndex++;
      playQueueStep();
    } else if(isPlayingAllQuran){
      quranAyahIndex++;
      playNextQuranAyah();
    } else {
      stopAll();
    }
  });

  function setMiniPlayer(show, text){
    miniPlayer.classList.toggle('show', show);
    miniPlayerText.textContent = text || '—';
  }
  miniPlayerBtn.addEventListener('click', ()=>{
    if(audioEl.paused){
      audioEl.play().catch(()=>{});
      miniPlayerBtn.textContent='❚❚';
    } else {
      audioEl.pause();
      miniPlayerBtn.textContent='►';
    }
  });

  function setMediaSession(title, subtitle){
    if('mediaSession' in navigator){
      try{
        navigator.mediaSession.metadata = new MediaMetadata({
          title: subtitle,
          artist: title,
          album: 'Syifaudz Dzikri'
        });
        navigator.mediaSession.setActionHandler('play', ()=>audioEl.play());
        navigator.mediaSession.setActionHandler('pause', ()=>audioEl.pause());
      }catch(e){}
    }
  }

  // ---------- INIT ----------
  renderHome();

  // Daftarkan service worker (bikin app installable & app-shell-nya kebuka lebih cepat)
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('sw.js').catch(()=>{});
    });
  }
})();
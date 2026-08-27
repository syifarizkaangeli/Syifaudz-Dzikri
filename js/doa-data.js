// Kumpulan doa harian. Setiap doa punya "id" unik supaya bisa dibuka
// langsung lewat halaman detail (mis. saat dibagikan / dijadikan favorit).

const DOA_DATA = [

  // =========================================================
  // 1-10 : DOA AWAL
  // =========================================================

  {
    id: "doa-melunasi-hutang",
    category: "Rezeki & Hutang",
    title: "Doa Melunasi Hutang",
    arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    latin: "Allahummakfinii bihalaalika 'an haraamika wa aghninii bifadhlika 'amman siwaak.",
    translation: "Ya Allah, cukupkanlah aku dengan yang halal dari yang haram, dan kayakanlah aku dengan karunia-Mu sehingga aku tidak membutuhkan selain-Mu."
  },

  {
    id: "sholawat-adrikni",
    category: "Shalawat",
    title: "Sholawat Adrikni",
    arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ قَدْ ضَاقَتْ حِيلَتِي أَدْرِكْنِي يَا اللَّهُ يَا رَسُولَ اللَّهِ",
    latin: "Allahumma shalli 'ala sayyidina Muhammadin qad dhaaqat hiilatii adriknii ya Allah ya Rasulallah.",
    translation: "Ya Allah, limpahkan shalawat kepada junjungan kami Nabi Muhammad SAW. Sungguh telah sempit upaya dan dayaku, maka tolonglah aku wahai Allah, wahai Rasulullah."
  },

  {
    id: "dzikir-nabi-yunus",
    category: "Dzikir",
    title: "Dzikir Nabi Yunus",
    arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    latin: "Laa ilaaha illaa anta subhaanaka inni kuntu minazh-zhaalimiin.",
    translation: "Tidak ada Tuhan selain Engkau. Maha Suci Engkau. Sesungguhnya aku termasuk orang-orang yang zalim."
  },

  {
    id: "doa-wajah-nabi-yusuf",
    category: "Doa Kecantikan",
    title: "Doa Wajah Nabi Yusuf",
    arabic: "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ",
    latin: "Idz qaala yuusufu li abiihi yaa abati innii ra'aitu ahada 'asyara kaukabaw wasy syamsa wal qamara ra'aituhum lii saajidiin.",
    translation: "Ketika Yusuf berkata kepada ayahnya: Wahai ayahku, sesungguhnya aku bermimpi melihat sebelas bintang, matahari dan bulan; kulihat semuanya sujud kepadaku."
  },

  {
    id: "terhindar-lilitan-hutang",
    category: "Perlindungan",
    title: "Terhindar dari Lilitan Hutang",
    arabic: "وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    latin: "Wa a'udzu bika min ghalabatid daini wa qahrir rijaal.",
    translation: "Dan aku berlindung kepada-Mu dari lilitan hutang dan tekanan manusia."
  },

  {
    id: "terhindar-takut-kikir",
    category: "Perlindungan",
    title: "Terhindar dari Ketakutan dan Kekikiran",
    arabic: "وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ",
    latin: "Wa a'udzu bika minal jubni wal bukhli.",
    translation: "Dan aku berlindung kepada-Mu dari sifat pengecut dan kikir."
  },

  {
    id: "terhindar-kesedihan",
    category: "Perlindungan",
    title: "Terhindar dari Kesedihan",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ",
    latin: "Allahumma inni a'udzu bika minal hammi wal hazani.",
    translation: "Ya Allah, aku berlindung kepada-Mu dari kesedihan dan kegundahan."
  },

  {
    id: "terhindar-kemalasan",
    category: "Perlindungan",
    title: "Terhindar dari Kemalasan",
    arabic: "وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ",
    latin: "Wa a'udzu bika minal 'ajzi wal kasali.",
    translation: "Dan aku berlindung kepada-Mu dari kelemahan dan kemalasan."
  },

  {
    id: "doa-nabi-musa",
    category: "Rezeki & Pendidikan",
    title: "Doa Nabi Musa Memohon Kebaikan",
    arabic: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    latin: "Rabbi inni lima anzalta ilayya min khairin faqir.",
    translation: "Ya Tuhanku, sesungguhnya aku sangat memerlukan suatu kebaikan yang Engkau turunkan kepadaku."
  },

  {
    id: "la-haula-wala-quwwata",
    category: "Dzikir",
    title: "La Haula Wala Quwwata Illa Billah",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    latin: "Laa haula wa laa quwwata illaa billah.",
    translation: "Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah."
  },


  // =========================================================
  // 11-20 : 10 DOA BATCH SEBELUMNYA
  // =========================================================

  {
    id: "doa-memohon-keikhlasan",
    category: "Keikhlasan",
    title: "Doa Memohon Keikhlasan",
    arabic: "اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا، وَلَا تَجْعَلْ لِأَحَدٍ فِيهِ شَيْئًا",
    latin: "Allahummaj'al 'amali kullahu shalihan, waj'alhu li-wajhika khalishan, wa la taj'al li-ahadin fihi syai'an.",
    translation: "Ya Allah, jadikanlah seluruh amalku sebagai kebaikan, dan jadikanlah amal tersebut ikhlas hanya karena mengharapkan wajah-Mu, dan janganlah Engkau jadikan sedikit pun dari amal tersebut untuk siapa pun selain Engkau."
  },

  {
    id: "doa-hati-ridha",
    category: "Keteguhan Hati",
    title: "Doa Memohon Hati yang Ridha",
    arabic: "اللَّهُمَّ اجْعَلْنِي رَاضِيًا بِقَضَائِكَ، مُتَوَكِّلًا عَلَيْكَ",
    latin: "Allahummaj'alni radhiyan bi-qadha'ika, mutawakkilan 'alaik.",
    translation: "Ya Allah, jadikanlah aku orang yang ridha terhadap ketentuan-Mu dan senantiasa bertawakal kepada-Mu."
  },

  {
    id: "doa-kesabaran-al-baqarah",
    category: "Kesabaran",
    title: "Doa Memohon Kesabaran dan Keteguhan",
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    latin: "Rabbanaa afrigh 'alainaa shabran wa tsabbit aqdaamanaa wanshurnaa 'alal qaumil kaafiriin.",
    translation: "Ya Tuhan kami, limpahkanlah kesabaran kepada kami, kukuhkanlah pendirian kami dan tolonglah kami menghadapi orang-orang kafir."
  },

  {
    id: "ma-fi-qolbi-ghairullah",
    category: "Dzikir",
    title: "Ma Fi Qolbi Gairullah",
    arabic: "",
    latin: "Ma fii qolbi ghairullah.",
    translation: "Tiada di dalam hatiku selain Allah. Dibaca 3 kali."
  },

  {
    id: "doa-kesabaran-keikhlasan",
    category: "Kesabaran",
    title: "Doa Memohon Kesabaran dan Keikhlasan",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ صَبْرًا جَمِيلًا وَقَلْبًا شَاكِرًا وَلِسَانًا ذَاكِرًا",
    latin: "Allahumma inni as'aluka shabran jamiilan wa qalban syaakiran wa lisaanan dzaakiran.",
    translation: "Ya Allah, aku memohon kepada-Mu kesabaran yang indah, hati yang bersyukur, dan lisan yang senantiasa berdzikir."
  },

  {
    id: "doa-mohon-kesabaran",
    category: "Kesabaran",
    title: "Doa Mohon Kesabaran",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ تَعْجِيلَ عَافِيَتِكَ وَصَبْرًا عَلَى بَلِيَّتِكَ وَخُرُوجًا مِنَ الدُّنْيَا إِلَى رَحْمَتِكَ",
    latin: "Allahumma inni as-aluka ta'jiila 'aafiyatika wa shobron 'alaa baliyyatika wa khuruujan minad dun-yaa ilaa rohmatik.",
    translation: "Ya Allah, aku memohon kepada-Mu agar segera mendapatkan kesehatan, kesabaran atas ujian-Mu, dan keluar dari dunia menuju rahmat-Mu."
  },

  {
    id: "doa-kesehatan-mental",
    category: "Ketenangan Hati",
    title: "Doa untuk Kesehatan Mental",
    arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    latin: "Yaa Hayyu Yaa Qayyuum, bi rahmatika astaghiits, ashlih lii sya'nii kullahu, wa laa takilnii ilaa nafsii tharfata 'aynin.",
    translation: "Wahai Zat Yang Maha Hidup dan Maha Berdiri Sendiri, dengan rahmat-Mu aku memohon pertolongan. Perbaikilah seluruh urusanku dan janganlah Engkau serahkan aku kepada diriku sendiri walau sekejap mata."
  },

  {
    id: "doa-menyerahkan-keadilan",
    category: "Perlindungan",
    title: "Doa Menyerahkan Keadilan kepada Allah",
    arabic: "",
    latin: "Hasbiyallahu lidiini, hasbiyallahu lidunyaaya, hasbiyallahu liman ahammani.",
    translation: "Cukuplah Allah bagiku dalam agamaku, cukuplah Allah bagiku dalam duniaku, dan cukuplah Allah bagiku terhadap orang yang bermaksud buruk kepadaku."
  },

  {
    id: "doa-ganti-lebih-baik",
    category: "Ketabahan",
    title: "Doa Minta Ganti yang Lebih Baik",
    arabic: "",
    latin: "Allahumma ajirni fi mushibati wa akhlif li khairan minha.",
    translation: "Ya Allah, berilah aku pahala dalam musibahku dan berilah aku ganti yang lebih baik daripadanya."
  },

  {
    id: "doa-menghadapi-kesulitan",
    category: "Kesulitan",
    title: "Doa Menghadapi Kesulitan",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
    latin: "Laa ilaaha illallaahul 'azhiimul haliim, laa ilaaha illallaahu robbul 'arsyil 'azhiim, laa ilaaha illallaahu robbus samaawaati wal ardhi wa robbul 'arsyil kariim.",
    translation: "Tiada Tuhan selain Allah Yang Maha Agung lagi Maha Penyantun. Tiada Tuhan selain Allah, Tuhan Arsy yang agung. Tiada Tuhan selain Allah, Tuhan langit dan bumi serta Tuhan Arsy yang mulia."
  },


  // =========================================================
  // 21-30 : 10 DOA DARI GAMBAR TERBARU
  // =========================================================

  {
    id: "doa-agar-tidak-mudah-lupa",
    category: "Pendidikan & Ilmu",
    title: "Doa Agar Tidak Mudah Lupa",
    arabic: "اللَّهُمَّ إِنِّي أَسْتَوْدِعُكَ مَا عَلَّمْتَنِيهِ، فَارْدُدْهُ إِلَيَّ عِنْدَ حَاجَتِي إِلَيْهِ، وَلَا تُنْسِنِيهِ يَا رَبَّ الْعَالَمِينَ",
    latin: "Allahumma inni astaudi'uka maa 'allamtaniihi, fardudhu ilayya 'inda haajatii ilayhi wa laa tunsiniihi yaa robbal-'aalamiin.",
    translation: "Ya Allah, sesungguhnya aku menitipkan kepada-Mu apa yang telah Engkau ajarkan kepadaku, maka kembalikanlah ia kepadaku saat aku membutuhkannya, dan janganlah Engkau jadikan aku lupa kepadanya wahai Tuhan semesta alam."
  },

  {
    id: "doa-kecerdasan-dan-kebijaksanaan",
    category: "Pendidikan & Ilmu",
    title: "Doa Memohon Kecerdasan dan Kebijaksanaan",
    arabic: "اللَّهُمَّ ارْزُقْنِي فَهْمَ النَّبِيِّينَ، وَحِفْظَ الْمُرْسَلِينَ، وَإِلْهَامَ الْمَلَائِكَةِ الْمُقَرَّبِينَ",
    latin: "Allahummarzuqnii fahman-nabiyyiina wa hifdhal-mursaliina wa ilhaamal-malaa'ikatil-muqorrobiin.",
    translation: "Ya Allah, karuniailah aku pemahaman para nabi, hafalan para rasul, serta ilham para malaikat yang dekat dengan-Mu."
  },

  {
    id: "doa-memohon-cahaya",
    category: "Pendidikan & Ilmu",
    title: "Doa Memohon Cahaya dan Kelancaran Berpikir",
    arabic: "اللَّهُمَّ زِدْنِي نُورًا، وَأَعْطِنِي نُورًا، وَاجْعَلْ لِي نُورًا، وَاجْعَلْنِي نُورًا",
    latin: "Allahumma zidnii nuuran, wa a'thinii nuuran, waj'al lii nuuran, waj'alnii nuuran.",
    translation: "Ya Allah, tambahkanlah cahaya untukku, berikanlah cahaya untukku, jadikanlah cahaya untukku, dan jadikanlah diriku sebagai cahaya."
  },

  {
    id: "doa-kemudahan-memahami",
    category: "Pendidikan & Ilmu",
    title: "Doa Memohon Kemudahan",
    arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
    latin: "Allahumma laa sahla illaa maa ja'altahu sahlan, wa anta taj'alul hazna idzaa syi'ta sahlan.",
    translation: "Ya Allah, tidak ada yang mudah kecuali apa yang Engkau mudahkan. Dan Engkau menjadikan kesedihan (kesulitan) apabila Engkau kehendaki pasti akan menjadi mudah."
  },

  {
    id: "doa-surat-al-muminun-97-98",
    category: "Perlindungan",
    title: "Doa Surat Al-Mu'minun Ayat 97–98",
    arabic: "وَقُلْ رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ",
    latin: "Wa qul rabbi a'uudzu bika min hamazaatisy-syayaathiin. Wa a'uudzu bika rabbi an yahdhuruun.",
    translation: "Dan katakanlah, 'Ya Tuhanku, aku berlindung kepada Engkau dari bisikan-bisikan setan, dan aku berlindung pula kepada Engkau ya Tuhanku, agar mereka tidak mendekati aku.'"
  },

  {
    id: "doa-membuka-baju",
    category: "Doa Harian",
    title: "Doa Membuka Baju",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا إِلَهَ إِلَّا هُوَ",
    latin: "Bismillaahil-ladzii laa ilaaha illaa huwa.",
    translation: "Dengan nama Allah yang tiada Tuhan selain Dia."
  },

  {
    id: "dzikir-saat-masuk-rumah",
    category: "Doa Harian",
    title: "Dzikir Saat Masuk Rumah",
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    latin: "Bismillaahi walajnaa, wa bismillaahi kharajnaa, wa 'alallaahi rabbanaa tawakkalnaa.",
    translation: "Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan kepada Allah Tuhan kami, kami bertawakal."
  },

  {
    id: "doa-nabi-zakaria",
    category: "Keluarga & Keturunan",
    title: "Doa Nabi Zakaria (QS. Ali 'Imran: 38)",
    arabic: "رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ",
    latin: "Rabbi hab lii min ladunka dzurriyyatan thayyibatan, innaka samii'ud du'aa'.",
    translation: "Ya Tuhanku, berilah aku dari sisi-Mu seorang anak yang baik. Sesungguhnya Engkau Maha Pendengar doa."
  },

  {
    id: "doa-perlindungan-umum",
    category: "Perlindungan",
    title: "Doa Perlindungan Umum",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ شَرِّ مَا خَلَقَ",
    latin: "A'uudzu bikalimaatillaahit-taammaati min syarri maa khalaq.",
    translation: "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya."
  },

  {
    id: "doa-keturunan-penyejuk-hati",
    category: "Keluarga & Keturunan",
    title: "Doa Memohon Keturunan Penyejuk Hati (QS. Al-Furqan: 74)",
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    latin: "Rabbanaa hab lanaa min azwaajinaa wa dzurriyyaatinaa qurrata a'yun, waj'alnaa lil-muttaqiina imaamaa.",
    translation: "Ya Tuhan kami, anugerahkanlah kepada kami penyejuk hati dari pasangan dan keturunan kami, serta jadikanlah kami pemimpin bagi orang-orang yang bertakwa."
  },


  // =========================================================
  // 31-38 : 8 DOA TAMBAHAN HARI INI
  // =========================================================

  {
    id: "doa-pembuka-rezeki-berkah-pagi",
    category: "Rezeki & Keberkahan",
    title: "Doa Pembuka Rezeki dan Berkah Pagi Hari",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    latin: "Allahumma inni as-aluka 'ilman naafi'an, wa rizqan thoyyiban, wa 'amalan mutaqabbalan.",
    translation: "Ya Allah, sungguh aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang halal, dan amal yang diterima."
  },

  {
    id: "sayyidul-istighfar",
    category: "Taubat & Ampunan",
    title: "Sayyidul Istighfar",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    latin: "Allahumma anta rabbii laa ilaaha illaa anta khalaqtanii wa ana 'abduka wa ana 'alaa 'ahdika wa wa'dika mastatha'tu, a'udzu bika min syarri maa shana'tu, abuu-u laka bini'matika 'alayya wa abuu-u laka bidzanbii faghfir lii fa innahu laa yaghfirudz-dzunuuba illaa anta.",
    translation: "Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan selain Engkau. Engkau yang menciptakan aku dan aku adalah hamba-Mu. Aku menetapkan diri pada janji-Mu semampuku. Aku berlindung kepada-Mu dari keburukan yang kuperbuat. Aku mengakui nikmat-Mu atasku dan aku mengakui dosaku, maka ampunilah aku. Sesungguhnya tidak ada yang mengampuni dosa selain Engkau."
  },

  {
    id: "doa-hajat",
    category: "Hajat",
    title: "Doa Memohon Hajat",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ، سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    latin: "Laa ilaaha illallaahul haliimul kariim. Subhaanallaahi rabbil 'arsyil 'azhiim. Alhamdulillaahi rabbil 'aalamiin.",
    translation: "Tidak ada Tuhan selain Allah Yang Maha Penyantun lagi Maha Mulia. Maha Suci Allah, Tuhan Arsy yang agung. Segala puji bagi Allah, Tuhan seluruh alam."
  },

  {
    id: "doa-istikharah",
    category: "Petunjuk & Pilihan",
    title: "Doa Istikharah",
    arabic: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ",
    latin: "Allahumma inni astakhiiruka bi'ilmika, wa astaqdiruka biqudratika, wa as-aluka min fadhlikal 'azhiim, fa innaka taqdiru wa laa aqdiru, wa ta'lamu wa laa a'lamu, wa anta 'allaamul ghuyuub.",
    translation: "Ya Allah, sesungguhnya aku memohon pilihan yang baik dengan ilmu-Mu, dan aku memohon kemampuan dengan kekuasaan-Mu, serta memohon kepada-Mu sebagian dari karunia-Mu yang agung. Sesungguhnya Engkau Mahakuasa sedangkan aku tidak berkuasa, Engkau mengetahui sedangkan aku tidak mengetahui, dan Engkau Maha Mengetahui perkara-perkara gaib."
  },

  {
    id: "al-baqarah-285",
    category: "Al-Quran & Perlindungan",
    title: "Surat Al-Baqarah Ayat 285",
    arabic: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ",
    latin: "Aamanar-rasuulu bimaa unzila ilaihi mir rabbihi wal-mu'minuun, kullun aamana billaahi wa malaa-ikatihi wa kutubihi wa rusulih, laa nufarriqu baina ahadim mir rusulih, wa qaaluu sami'naa wa atha'naa ghufraanaka rabbanaa wa ilaikal-mashiir.",
    translation: "Rasul telah beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. Mereka berkata, 'Kami tidak membeda-bedakan seorang pun dari rasul-rasul-Nya.' Dan mereka berkata, 'Kami dengar dan kami taat. Ampunilah kami wahai Tuhan kami, dan kepada-Mulah tempat kembali.'"
  },

  {
    id: "al-baqarah-286",
    category: "Al-Quran & Perlindungan",
    title: "Surat Al-Baqarah Ayat 286",
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    latin: "Laa yukallifullaahu nafsan illaa wus'ahaa, lahaa maa kasabat wa 'alaihaa maktasabat. Rabbanaa laa tu-aakhidznaa in nasiinaa au akhtha'naa. Rabbanaa wa laa tahmil 'alainaa ishran kamaa hamaltahu 'alalladziina min qablinaa. Rabbanaa wa laa tuhammilnaa maa laa thaaqata lanaa bih, wa'fu 'annaa, waghfir lanaa, warhamnaa, anta maulaanaa fanshurnaa 'alal-qaumil-kaafiriin.",
    translation: "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala dari kebajikan yang dikerjakannya dan mendapat siksa dari kejahatan yang diperbuatnya. Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau melakukan kesalahan. Ya Tuhan kami, janganlah Engkau bebani kami dengan beban berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tidak sanggup kami pikul. Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah pelindung kami, maka tolonglah kami menghadapi orang-orang kafir."
  },

  {
    id: "doa-nabi-yusuf-pengasihan",
    category: "Doa Kecantikan",
    title: "Doa Nabi Yusuf untuk Pengasihan dan Kharisma",
    arabic: "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ",
    latin: "Idz qaala yuusufu li abiihi yaa abati innii ra-aitu ahada 'asyara kaukaban wasy-syamsa wal-qamara ra-aituhum lii saajidiin.",
    translation: "Ketika Yusuf berkata kepada ayahnya, 'Wahai ayahku, sesungguhnya aku bermimpi melihat sebelas bintang, matahari dan bulan; kulihat semuanya sujud kepadaku.'"
  },

  {
    id: "surat-at-tahrim-6-8",
    category: "Perlindungan & Taubat",
    title: "Surat At-Tahrim Ayat 6-8",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا وَقُودُهَا النَّاسُ وَالْحِجَارَةُ عَلَيْهَا مَلَائِكَةٌ غِلَاظٌ شِدَادٌ لَا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ ۝ يَا أَيُّهَا الَّذِينَ كَفَرُوا لَا تَعْتَذِرُوا الْيَوْمَ إِنَّمَا تُجْزَوْنَ مَا كُنْتُمْ تَعْمَلُونَ ۝ يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَصُوحًا عَسَى رَبُّكُمْ أَنْ يُكَفِّرَ عَنْكُمْ سَيِّئَاتِكُمْ وَيُدْخِلَكُمْ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ",
    latin: "Yaa ayyuhalladziina aamanuu quu anfusakum wa ahliikum naaran waquuduhan-naasu wal-hijaarah, 'alaihaa malaa-ikatun ghilaazhun syidaad, laa ya'shuunallaaha maa amarahum wa yaf'aluuna maa yu'maruun. Yaa ayyuhalladziina kafaruu laa ta'tadzirul-yauma innamaa tujzauna maa kuntum ta'maluun. Yaa ayyuhalladziina aamanuu tuubuu ilallaahi taubatan nashuuhaa, 'asaa rabbukum an yukaffira 'ankum sayyi-aatikum wa yudkhilakum jannaatin tajrii min tahtihal-anhaar.",
    translation: "Wahai orang-orang yang beriman, jagalah dirimu dan keluargamu dari api neraka yang bahan bakarnya manusia dan batu. Penjaganya adalah malaikat-malaikat yang kasar dan keras. Mereka tidak mendurhakai Allah terhadap apa yang diperintahkan-Nya dan selalu mengerjakan apa yang diperintahkan. Wahai orang-orang kafir, janganlah kamu mengemukakan alasan pada hari ini. Sesungguhnya kamu hanya diberi balasan menurut apa yang kamu kerjakan. Wahai orang-orang yang beriman, bertobatlah kepada Allah dengan tobat yang semurni-murninya. Mudah-mudahan Tuhanmu akan menghapus kesalahan-kesalahanmu dan memasukkanmu ke dalam surga yang mengalir di bawahnya sungai-sungai."
  }

];
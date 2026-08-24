// Kumpulan doa harian. Setiap doa punya "id" unik supaya bisa dibuka
// langsung lewat halaman detail (mis. saat dibagikan / dijadikan favorit).

const DOA_DATA = [

  // =========================================================
  // DOA YANG SUDAH ADA
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
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
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
  // 10 DOA DARI GAMBAR YANG KAMU KIRIM
  // =========================================================

  {
    id: "doa-memohon-keikhlasan",
    category: "Keikhlasan",
    title: "Doa Memohon Keikhlasan (Doa Umar bin Khattab)",
    arabic: "اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا، وَلَا تَجْعَلْ لِأَحَدٍ فِيهِ شَيْئًا",
    latin: "Allahummaj'al 'amali kullahu shalihan, waj'alhu li-wajhika khalishan, wa la taj'al li-ahadin fihi syai'an.",
    translation: "Ya Allah, jadikanlah seluruh amalku sebagai kebaikan, dan jadikanlah amal tersebut ikhlas hanya karena mengharapkan wajah-Mu (ridha-Mu), dan janganlah Engkau jadikan sedikit pun dari amal tersebut untuk siapa pun selain Engkau."
  },

  {
    id: "doa-hati-ridha",
    category: "Keteguhan Hati",
    title: "Doa Memohon Hati yang Ridha dan Menerima Ketentuan",
    arabic: "اللَّهُمَّ اجْعَلْنِي رَاضِيًا بِقَضَائِكَ، مُتَوَكِّلًا عَلَيْكَ",
    latin: "Allahummaj'alni radhiyan bi-qadha'ika, mutawakkilan 'alaik.",
    translation: "Ya Allah, jadikanlah aku orang yang ridha terhadap ketentuan-Mu, dan senantiasa bertawakal kepada-Mu."
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
    latin: "Allahumma inni as'aluka shabran jamiilan wa qalban syaa-kiran wa lisaanan dzaakiran.",
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
    latin: "Yā hayyu, yā qayyūmu, bi rahmatika astaghītsu, ashlih lī sya'nī kullahu, wa lā takilnī ilā nafsī tharfata 'aynin.",
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
  }

];
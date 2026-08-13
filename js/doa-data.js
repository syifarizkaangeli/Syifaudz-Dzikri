// Kumpulan doa harian. Setiap doa punya "id" unik supaya bisa dibuka
// langsung lewat halaman detail (mis. saat dibagikan / dijadikan favorit).
const DOA_DATA = [
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
  }
];
# شفاء الذكر — Syifaudz Dzikri

> *"Making the verses of the Holy Qur'an a remedy to always remember the greatness of Allah (SWT)."*

A simple web-based Qur'an application with no login required, designed especially to be easy for elderly users. Just open the app, search for a surah, and start reading.

🔗 **Live Demo:** https://syifaudz-dzikri.netlify.app

---

## ✨ Features

- **No login required** — open the app and start using it immediately
- **Search surahs** by name or surah number
- **Voice search (microphone)** — speak the name of a surah to search *(supported in Chrome/Android; not currently supported in Safari/iOS)*
- Complete **114 surahs**, from Al-Fatihah to An-Nas
- **Play the entire surah** from the first verse to the last
- **Play all surahs** — start continuous playback from Al-Fatihah to An-Nas
- **Play individual verses**
- **Word-by-word Arabic audio** — tap any individual Arabic word to hear only that word
- Displays **Arabic text**, **Latin transliteration**, and **translation**
- **Multiple translation languages**:
  - Indonesian
  - English
  - Malay
  - Urdu
  - French
  - Turkish
  - Chinese
  - Spanish
- **Background audio playback** with lock screen media controls
- **Installable as a PWA** on Android and iOS home screens
- **Responsive UI** — optimized for both mobile and desktop screens
- **Large text and emerald-green theme**, designed to be senior-friendly

## 🛠️ Technologies

- Pure HTML, CSS, and JavaScript (no frameworks or build tools)
- Qur'an text, translations, and audio are provided by the **Al Quran Cloud API** (free, no API key required)
- Voice search uses the browser's built-in **Web Speech API** (Chrome)

---

## 🚀 Running / Hosting

This application consists of a single `index.html` file and requires no build process or special server.

You can host it for free using:

- **Netlify** — drag and drop the `index.html` file
- **GitHub Pages** — enable Pages in the repository settings
- **Vercel** — import the repository and deploy

After deployment, open the website in Chrome (Android) or Safari (iOS), then choose **"Add to Home Screen"** to install it like a native app.

> **Note:** Qur'an verses, translations, audio playback, and voice search require an internet connection because the data is fetched directly from the API.

---

## 📱 Build an Android APK

This web app can also be packaged into an Android APK using **PWABuilder**.

1. Open https://www.pwabuilder.com
2. Enter your deployed website URL (for example, the Netlify link above)
3. Select **Package for Stores → Android**
4. Download the generated `.apk` file

---

## 💚 Credits

Made with ❤️ by **Syifarizkaangeli**

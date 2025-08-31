# YouTube Video Player (React + TypeScript + Vite)

## 📖 Project Overview

A simple YouTube Video Player web application built with **React**, **TypeScript**, and **Vite**.

The app enables users to:

* Enter and save a YouTube video URL.
* Autoplay the video.
* Resume playback from the correct position (calculates real-world elapsed time).
* Edit the saved YouTube video URL.
* Visit a funny GIF page with a **Back** button to return to the video.

## 🏗️ Project Structure

```
youtube-player-web/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ routes.tsx
   ├─ utils/
   │  └─ youtube.ts
   ├─ storage/
   │  └─ videoState.ts
   ├─ components/
   │  └─ VideoPlayer.tsx
   └─ pages/
      ├─ HomePage.tsx
      ├─ VideoPage.tsx
      └─ GifPage.tsx
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd youtube-player-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Open the local URL shown in your terminal (e.g., `http://localhost:5173`).

## 🔑 Features

* **Autoplay**: Video starts automatically (may be muted depending on browser autoplay policies).
* **Playback Resume**: Resumes from the expected playback position, even after navigation or refresh.
* **Edit Functionality**: Allows updating the saved YouTube URL.
* **Funny GIF Page**: Displays a humorous GIF with a back navigation option.

## 🛠️ Tech Stack

* **React 18/19 compatible**
* **TypeScript**
* **Vite**
* **React Router DOM**
* **react-youtube** for YouTube embedding

## 📦 Dependencies

```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.2",
  "react-youtube": "^10.1.0"
}
```

## 🤝 Contributing

Contributions are welcome! Fork the repo, open issues, and submit pull requests to enhance features and design.

## 📜 License

This project is licensed under the **MIT License**.

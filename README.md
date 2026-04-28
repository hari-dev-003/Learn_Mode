# Learn Mode

An interactive online learning platform with AI-powered video learning features.

## Features

- 📚 Browse curated courses across Web Development, DSA, Computer Networks, and Databases
- 🎥 Watch embedded YouTube video lessons
- 📝 **Video Transcript** – Fetch and read the full transcript of any YouTube lesson (timestamped, collapsible panel)
- 🤖 **AI Q&A** – Ask any question about the current video and get an AI-generated answer powered by Google Gemini
- 👤 User registration and login

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, TailwindCSS |
| Backend | Node.js, Express 5, MongoDB (Mongoose) |
| AI / LLM | Google Gemini 1.5 Flash (`@google/generative-ai`) |
| Transcript | `youtube-transcript` (server-side) |
| Video metadata | YouTube Data API v3 |

---

## Project Structure

```
Learn_Mode/
├── backend/
│   ├── controllers/
│   │   ├── UserControl.js      # Register / Login
│   │   └── VideoControl.js     # Transcript fetch + AI Q&A   ← NEW
│   ├── routes/
│   │   ├── Userroute.js
│   │   └── Videoroute.js       # /api/video/*               ← NEW
│   ├── model/User.js
│   ├── db/connect.js
│   ├── index.js
│   └── .env.example            # ← NEW
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TranscriptPanel.jsx  # Collapsible transcript  ← NEW
    │   │   ├── VideoQA.jsx          # Chat Q&A interface      ← NEW
    │   │   └── ... (existing components)
    │   ├── pages/VideoPage.jsx      # Updated to include new panels
    │   └── services/
    │       ├── youtube.js           # YouTube Data API helper
    │       └── videoService.js      # Transcript + Q&A API   ← NEW
    └── .env.example                 # ← NEW
```

---

## API Endpoints

### User
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Log in |

### Video
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/video/transcript/:videoId` | Fetch YouTube transcript |
| POST | `/api/video/ask` | AI Q&A (body: `{ question, transcript, videoTitle }`) |

---

## Environment Variables

### Backend (`backend/.env`)
```env
MONGO_URL=mongodb://localhost:27017/learnmode
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
```

### Frontend (`frontend/.env`)
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
VITE_API_BASE_URL=http://localhost:3000
```

> **Getting API keys:**
> - **Gemini API key** – <https://aistudio.google.com/app/apikey> (free tier available)
> - **YouTube Data API v3** – <https://console.cloud.google.com/> → enable "YouTube Data API v3"

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- MongoDB running locally (or a MongoDB Atlas connection string)

### Backend
```bash
cd backend
cp .env.example .env        # fill in your keys
npm install
npm run dev
```

### Frontend
```bash
cd frontend
cp .env.example .env        # fill in your keys
npm install
npm run dev
```

Open <http://localhost:5173> in your browser.

---

## How the New Features Work

### Video Transcript
1. Navigate to any video lesson.
2. Click **Video Transcript** below the player.
3. The backend calls `youtube-transcript` (no extra API key needed) and returns timestamped captions.
4. The panel displays each caption line with its timestamp.

### AI Q&A
1. After loading the transcript (step above), the **Ask About This Video** chat panel becomes active.
2. Type any question (e.g. *"What is the box model?"*) and press Send.
3. The backend sends the transcript + question to **Google Gemini 1.5 Flash**.
4. The AI answer appears in the chat bubble.

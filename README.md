# YouTube AI Tutor — AI-Powered Interactive Learning from YouTube Videos

YouTube AI Tutor is a **MERN stack web application** that transforms any educational YouTube video into an **interactive, AI-driven learning experience**.  
Users simply paste a YouTube URL and instantly gain access to smart explanations, contextual Q&A, and video-aware assistance — all while watching the content.

This platform allows learners to understand complex ideas faster, explore concepts deeper, and stay engaged with educational videos in a brand-new way.

---

## ✨ Key Highlights

- 🎥 Turns any YouTube video into an **interactive tutor**
- 🧠 AI understands video content and provides **context-aware answers**
- 💬 Real-time chat with explanations tied directly to the video
- 🔊 Text-to-speech support for voice-based responses
- 📜 Automatic transcript processing and real-time printing
- 📱 Responsive design for desktops, tablets, and mobile
- 🌐 Multi-language support
- ⏱️ Timestamp-aware explanations

📌 Notes saving & exporting

📚 Summary generation per video chapter

---
## UI
<img width="767" height="873" alt="Screenshot 2025-11-30 005100" src="https://github.com/user-attachments/assets/3fb33c15-841b-446f-a8a6-8574e5e22a1d" />

<!-- <img width="520" height="1018" alt="screencapture-localhost-3000-2025-11-30-00_39_26" src="https://github.com/user-attachments/assets/f0116170-3524-49b6-be71-47cd3ae9f632" /> -->

<img width="1917" height="911" alt="Screenshot 2025-11-30 004149" src="https://github.com/user-attachments/assets/a8b06f0c-9a53-43e6-a696-d561d159b81f" />


## 🚀 Core Features

### **1. Smart Video Processing**
- **YouTube URL Input**  
  Users paste any educational YouTube video link to begin learning.

- **Automatic Transcript Extraction**  
  The system fetches and processes captions/transcripts for analysis.

- **Content Analysis Engine**  
  AI identifies key concepts, examples, explanations, and question patterns within the video.

- **Real-time Transcript Logging**  
  For development/debugging, the full transcript can be printed to the console during processing.

---

### **2. AI-Powered Learning Assistant**
- **Context-Aware Responses**  
  The AI answers questions based specifically on the video content — not generic info.

- **Example Recognition**  
  If the video uses examples, the AI can reference them directly in its explanations.

- **Intelligent Question Answering**  
  Learners can ask anything about the video, and the AI responds with accurate, relevant answers.

- **Voice Responses (TTS)**  
  AI explanations can be played back using text-to-speech for auditory learners.

---

### **3. Interactive Learning Interface**
- **Embedded YouTube Video Player**  
  Watch the video directly inside the platform.

- **Real-time Chat Interface**  
  Users type questions and get instant answers as they watch.

- **Session Context Tracking**  
  The system maintains awareness of the video state and conversation history.

- **Responsive UI**  
  Optimized for desktop, tablet, and mobile usage.

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- TailwindCSS / Custom UI Components  
- YouTube IFrame Player API  
- Axios for API communication  

### **Backend**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- OpenAI / LLM integration  
- YouTube Transcript API  

### **Infrastructure**
- MERN architecture  
- Token/session handling  
- Real-time AI streaming responses  
- TTS engine (if supported by model or external API)

---

## 📂 Project Structure
```
youtube-ai-tutor/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # Chat UI, Video Player, Layout
│ │ ├── pages/ # Home, Session UI
│ │ ├── utils/ # API handlers
│ │ └── App.jsx
│ └── package.json
│
├── server/ # Express Backend
│ ├── controllers/ # Video processing, AI answers
│ ├── routes/ # API routes
│ ├── services/ # Transcript parser, AI integration
│ ├── models/ # Session / User context models
│ └── server.js
│
└── README.md
```

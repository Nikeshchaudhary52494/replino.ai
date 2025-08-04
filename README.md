# Replino.ai ✨

**AI-Powered Email Assistant**  
Replino.ai helps you write smart, contextual, and time-saving email replies directly within Gmail or the standalone app. Built using modern web technologies and powered by Gemini AI, Replino understands your emails and generates thoughtful responses in the tone you choose.

---

## 📁 Project Structure

This repository contains three key components:

```

├── replio             # Spring Boot backend for processing and AI integration
├── replio-frontend    # Vite + React frontend web application
├── replio-ext         # Chrome extension for Gmail integration

```

---

## ✨ Features

- 🤖 **AI-Powered Replies**: Understands email context using Gemini API and generates smart responses.
- 🗣️ **Tone Control**: Choose between professional, casual, or friendly tone for your replies.
- ⚡ **Browser Extension**: Integrated directly into Gmail via a Chrome extension.
- 🌐 **Beautiful UI**: Clean, responsive interface built with Tailwind CSS and React.
- 🚀 **Lightning Fast**: Built using Vite for a blazing-fast frontend experience.

---

## 📸 Screenshots

### 🌍 Web App Landing Page

![Landing Page](replio-frontend/public/app-preview.png)

### 🧠 Chrome Extension in Gmail

![Extension](replio-frontend/public/extension-preview.png)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/replino-ai.git
cd replino-ai
```

---

## 🔧 Installation Instructions

### Backend (Spring Boot - `replio`)

```bash
cd replio
./mvnw spring-boot:run
```

> Make sure you configure the Gemini API key and any required environment variables before running.

---

### Frontend (Vite + React - `replio-frontend`)

```bash
cd replio-frontend
npm install
npm run dev
```

Frontend will be served at [http://localhost:5173](http://localhost:5173)

---

### Chrome Extension (`replio-ext`)

1. Go to `chrome://extensions` in your Chrome browser.
2. Enable **Developer mode** (top right).
3. Click **"Load unpacked"**.
4. Select the `replio-ext` folder from your cloned directory.

Now you can use Replino.ai directly in Gmail!

---

## 🔐 API Key Setup

You will need a **Gemini API key** to use the AI features.

1. Obtain your API key from the [Gemini developer portal](https://makersuite.google.com/app).
2. Configure it in your backend application via environment variables or `application.properties`.

---

## 💡 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, AOS
- **Backend**: Spring Boot, Java 17+, Gemini AI Integration
- **Extension**: Manifest V3, Vanilla JS
- **Deployment**: Vercel / Netlify / Local
- **API**: Gemini Pro API

---

Made with 🪲 by [Nikesh Chaudhary](https://github.com/Nikeshchaudhary52494)


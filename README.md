# AI Interview Mocker

> Practice smarter, interview better — powered by Google Gemini AI.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Google Gemini](https://img.shields.io/badge/AI-Gemini%20Pro-blue?style=flat-square&logo=google)](https://deepmind.google/technologies/gemini/)
[![PostgreSQL](https://img.shields.io/badge/Database-Neon%20PostgreSQL-336791?style=flat-square&logo=postgresql)](https://neon.tech/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=flat-square&logo=clerk)](https://clerk.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=vercel)](https://ai-interview-mocker-aim.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Landing Page](#-landing-page)
- [Interview Session](#-interview-session)
- [AI Feedback](#-ai-feedback)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## Overview

I built this to solve a real problem — most people don't get enough practice before interviews, and generic prep resources rarely match the actual role. This platform takes your job title, description, and experience level, hands them to Gemini AI, and generates a custom set of interview questions just for you. You answer by speaking into your mic, your responses get transcribed automatically, and you walk away with detailed AI feedback on every answer. It's about as close to a real interview as you can get from your desk.

---

## 🏠 Landing Page

This is the first thing you see when you hit the app — it explains what the platform does and gets you moving quickly. Once you sign in through Clerk, your personal dashboard is ready with a list of all previous mock sessions. Starting a new one is just a form away: drop in your job role, paste a description, pick your experience level, and the AI handles the rest.

- The dashboard surfaces all your past interviews so you can track your progress over time
- Creating a new session takes seconds — just fill in your role and description, and Gemini generates five tailored questions instantly

<img src="/public/assets/LandingPage.png" width="800"/>

---

## 🎙️ Interview Session

This is where the actual practice happens. The session walks you through five AI-generated questions one at a time, and you answer each one by speaking directly into your mic — react-hook-speech-to-text handles the live transcription. A webcam preview stays on screen the whole time to keep things feeling like a genuine interview, not just a quiz.

- Voice answers are transcribed in real time so there's no typing required at any point
- The live camera feed adds a layer of realism that helps with nerves and on-camera presence

<img src="/public/assets/Interview.png" width="800"/>

---

## 📊 AI Feedback

Once the session wraps up, you get a full breakdown of how you did. Every question is expandable — you can see what you said, what a strong answer looks like, and Gemini's written take on your response including a rating and specific areas to work on. An overall score is calculated across all five questions so improvement is easy to track.

- Each question shows your answer side-by-side with the ideal answer for direct comparison
- Gemini's per-question rating and feedback tells you exactly what to work on before your next session

<img src="/public/assets/AIFeedback.png" width="800"/>

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| AI | Google Gemini Pro API |
| Database | Neon PostgreSQL + Drizzle ORM |
| Authentication | Clerk |
| Styling | Tailwind CSS + Lucide React |
| UI Components | Radix UI (Shadcn/UI) |
| Voice Recognition | react-hook-speech-to-text |
| Camera Feed | react-webcam |
| Date Formatting | moment.js |

---

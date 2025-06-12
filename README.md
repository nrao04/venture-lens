# Venture Lens

> AI-powered startup idea analyzer built with Next.js, Tailwind CSS & OpenAI

**License:** MIT

---

## Table of Contents
- [Demo](#demo)  
- [Screenshots](#screenshots)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Future Improvements](#future-improvements)  
- [About](#about)  
- [Resources](#resources)  

---

## Demo

**Live Demo:** https://your-vercel-url.vercel.app

### Screenshots

![Home Page](assets/home.png)  
![Analysis Results](assets/results.png)  

---

## Features

- **AI-driven analysis**  
  Market summary, top competitors & high-level roadmap via GPT-3.5-turbo  
- **Structured JSON API**  
  `/api/analyze` returns `{ market: string[]; competitors: string[]; roadmap: string[] }`  
- **Modern, responsive UI**  
  Glassmorphism cards, Tailwind utility classes, mobile-first layout  
- **Error handling & loading states**  
  Inline feedback for missing input and API errors  

---

## Tech Stack

| Technology        | Description                                                |
|-------------------|------------------------------------------------------------|
| **Next.js**       | React framework with SSR & API routes                      |
| **React**         | Component-driven UI library                                |
| **TypeScript**    | Typed JavaScript for safer, scalable code                  |
| **Tailwind CSS**  | Utility-first CSS framework                                |
| **OpenAI API**    | GPT-3.5-turbo for natural language analysis                |
| **Vercel**        | Zero-config deployment & hosting                           |

---

## Installation

### Prerequisites
- Node.js (v16+)  
- An OpenAI API key  

### Setup
1. **Clone the repo**  
   ```bash
   git clone https://github.com/nrao04/venture-lens.git
   cd venture-lens

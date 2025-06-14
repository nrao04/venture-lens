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
- [Future-Improvements](#future-improvements)  
- [About](#about)  
- [Resources](#resources)  

---

## Demo

**Live Demo:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---

## Screenshots

![Home Page](<img width="797" alt="ventureLensHomePage" src="https://github.com/user-attachments/assets/a9b980a0-c38d-4a24-a426-c5cbbefdc365" />)  
![Analysis Results](<img width="743" alt="ventureLensAnalysisPage" src="https://github.com/user-attachments/assets/11da20ad-919c-4063-8d8a-d606e4387146" />)  

---

## Features

- **AI-driven analysis**: Market summary, top competitors & high-level roadmap via GPT-3.5-turbo  
- **Structured JSON API**:  
  `GET /api/analyze` returns:  
  ```json
  {
    "market": ["..."],
    "competitors": ["..."],
    "roadmap": ["..."]
  }
  ```
- **Modern, responsive UI**: Glassmorphism cards, Tailwind CSS, mobile-first layout  
- **Robust error handling**: Inline feedback for empty input, loading states, and API failures  

---

## Tech Stack

| Technology        | Description                          |
|-------------------|--------------------------------------|
| **Next.js**       | React framework with SSR & API routes |
| **React**         | Component-driven UI library          |
| **TypeScript**    | Safer, scalable typed JavaScript     |
| **Tailwind CSS**  | Utility-first styling framework      |
| **OpenAI API**    | GPT-3.5-turbo language processing     |
| **Vercel**        | Hosting & continuous deployment      |

---

## Installation

### Prerequisites
- Node.js (v16 or newer)  
- OpenAI API Key

### Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/nrao04/venture-lens.git
   cd venture-lens
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your OpenAI API Key**  
   Create a `.env.local` file:
   ```env
   OPENAI_API_KEY=your-api-key-here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Visit: [http://localhost:3000](http://localhost:3000)

---

## Usage

1. Type your startup idea (e.g., "Uber for home tutoring")  
2. Click **Analyze**  
3. Instantly receive:
   - 🔹 Market Overview  
   - 🔹 Top 3 Competitors  
   - 🔹 Roadmap Suggestions  

---

## Future Improvements

- Export to PDF / PowerPoint  
- Crunchbase or News API integration  
- User authentication & saved idea history  
- Customizable prompt tuning  
- Theme switching and dark mode  

---

## About

Venture Lens empowers developers, students, and founders to turn vague startup ideas into structured, actionable insights. Perfect for hackathons, VC pitches, or MVP prototyping.

---

## Resources

- [OpenAI API Docs](https://platform.openai.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Hosting](https://vercel.com/docs)

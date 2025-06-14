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

**Live Demo:** [Vercel-Link](https://venture-lens-qofl5etmn-nikhil-raos-projects-53e1b353.vercel.app/)

---

## Screenshots

### Home Page
![Home Page](/assets/ventureLensHomePage.png)

### Results Page
![Analysis Results](/assets/ventureLensAnalysisPage.png)  

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

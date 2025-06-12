# VentureLens

> AI-powered startup idea analyzer built with Next.js, Tailwind CSS, and OpenAI

---

## Features (MVP)

- **AI-driven analysis**  
  Market summary, top competitors, and high-level roadmap generated via GPT-3.5-turbo  
- **Clean JSON API**  
  `/api/analyze` returns a `{ market: string[]; competitors: string[]; roadmap: string[] }` payload  
- **Modern UI**  
  Single-page interface with glassmorphism cards (`<Section>`) and concise bullet lists  
- **Responsive design**  
  Tailwind CSS + mobile-first layout adapt to any screen

---

## 🛠️ Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/nrao04/venture-lens.git
   cd venture-lens



# Ben Paul Richard — Engineering Portfolio Website

## Overview
A dark-theme, research-grade engineering portfolio with scroll-driven hero video, monospace + Times New Roman typography, subtle animated backgrounds, and a professional research lab aesthetic. Fully responsive.

---

## Phase 1: Foundation & Hero Section
- **Dark theme** setup with custom color palette (deep blacks, subtle blues/greens for accents)
- **Typography**: Monospace for headings (e.g., JetBrains Mono or Space Mono via Google Fonts), Times New Roman for body text
- **Scroll-driven hero section**:
  - Full-screen video background (`Ben-Hero-Video-Landscape.mp4`) that scrubs frame-by-frame on scroll where page is fixed untill the video is over
  - Text anchored to **bottom-center** (`items-end pb-24`)
  - Sequential fade transitions as user scrolls: Name → Sub-headline → Secondary line → Short intro
  - Three CTA buttons: View Projects, Download Resume (PDF), Contact Me
  - Social icons row: Email (mailto), LinkedIn, GitHub
- **Smooth navigation** with scroll-to-section behavior
- **Sticky header nav** with section links

## Phase 2: About & Skills Sections
- **About section**: Two-column layout
  - Left: Portrait image (`Ben_Cartoon.jpeg` as about photo)
  - Right: Bio text + tagline quote
- **Skills section**: Grouped into 5 visual card categories
  - Embedded & Low-Level, Control & Robotics, Quant & ML, Hardware & Architecture, Tools
  - Each group displayed as a styled card with skill tags/chips
  - Subtle animated grid/particle background behind this section

## Phase 3: Experience & Projects
- **Experience timeline**: Vertical timeline layout with 4 roles
  - Zebronics, Guru Services (Voltas), SKI Precision, Integral Coach Factory
  - Each entry shows role, company, and key accomplishments with animated metric counters (e.g., "20% stability improvement")
- **Projects section**: Technical project cards (7 projects)
  - Each card displays: Problem, Approach, Tools, Outcome
  - "View Project" button linking to PDF in `/projects/` folder
  - Projects: Mini GPU, Autonomous Robot, Quanser Aero2, MPC (CSTR), System ID, Robotic Manipulator, Quant ML Framework

## Phase 4: Research, Certifications & Education
- **Research & Publications**: Clickable cards linking to PDFs
  - Patent: Electric Power Generation from IC Engine Waste Heat
  - IEEE Paper: Army Surveillance Robot
- **Certifications**: Grid of clickable certification badges/cards (9 items), each linking to PDF
- **Education**: Three institutions with coursework highlights and dissertation info
  - University of Manchester (MSc), WorldQuant University (MSc - Online), Anna University (BEng)

## Phase 5: References, Contact & Polish
- **References/Testimonials**: Horizontally scrolling animated cards - scall rectangle cards 
  - "Kind Words" title, 4 initial reference cards with name/designation/company/placeholder quote
  - "Write a Review" button → opens dialog form (email, designation, company, comment)
  - Submissions should get an approval from me in mail and if i say yes it should be added in a reference cards stored in localStorage and appended to cards dynamically
- **Contact section**: "Let's Work Together" with contact info display + contact form
  - Form fields: Name, Email, Message → submits via mailto link
- **Animated backgrounds**: Subtle grid + gradient + particle effects on non-hero sections
- **Smooth section transitions** and scroll animations throughout
- **Responsive design** polish for mobile and desktop

## Assets to Include
- Hero video: `Ben-Hero-Video-Landscape.mp4` → public folder
- About image: `Ben_Cartoon.jpeg` → src/assets
- Resume PDF: `ARM_Ben_Updated_Resume_1.pdf` → public folder
- Project PDFs & certification PDFs: placeholders in `/projects/` and `/certifications/` (user to add later)
## Email: benpaulrichard3@gmail.com; Phone: +44 7823915210; github: https://github.com/Ben-Richard

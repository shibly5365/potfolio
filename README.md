# Shibly Showcase Studio

# Build a Premium Full Stack Developer Portfolio — UAE Job Market

Act as a senior UI/UX designer, creative developer, motion designer, and experienced React engineer. Build a complete, production-quality personal portfolio for **Nuhmanu Ibnu Shibly**, a Full Stack Developer specializing in the MERN stack.

This must NOT look like a generic portfolio template. Create a premium, modern, technically impressive developer portfolio that communicates engineering ability, real project experience, product thinking, problem-solving, and professional readiness to recruiters and engineering teams in the UAE, especially Dubai and Abu Dhabi.

The website must have excellent visual hierarchy, meaningful animations, polished interactions, responsive layouts, clean code, and strong performance.

## 1. Technology Stack

Use:
- React.js with Vite
- TypeScript
- Tailwind CSS
- Framer Motion for animation
- React Router if separate routes are required
- Lucide React for icons
- React Hook Form and Zod for contact form validation
- EmailJS or a configurable email service for functional contact form submission

Use reusable components, a maintainable folder structure, typed data models, and clean separation between UI, data, and logic.

Do not use Next.js unless specifically needed. The primary implementation should be React + TypeScript + Tailwind CSS.

## 2. Personal Brand and Positioning

Name: Nuhmanu Ibnu Shibly

Primary title:
Full Stack Developer | MERN Stack Specialist

Hero headline:
“I Build Scalable Web Applications That Solve Real Problems.”

Supporting text:
“Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and modern backend architecture. I build responsive user experiences, secure APIs, real-time applications, and practical software products.”

Show my professional focus clearly:
- Full Stack Development
- MERN Stack Development
- React.js and Next.js
- REST API design and backend development
- Authentication, authorization, and RBAC
- Real-time applications
- Database design and integration
- Problem-solving and continuous learning

Mention that I am open to relevant software development opportunities in the UAE, including Dubai and Abu Dhabi, and willing to relocate.

Do not invent employment history, degrees, client names, revenue figures, performance metrics, or achievements. Make every claim truthful and editable.

## 3. Visual Design System

Create a premium dark interface with a sophisticated technology-inspired aesthetic.

Color palette:
- Primary background: Midnight navy #090D18
- Secondary background: #111827
- Primary accent: Electric blue #2563EB
- Secondary accent: Cyan #22D3EE
- Third accent: Violet #8B5CF6
- Main text: #F8FAFC
- Muted text: #94A3B8
- Borders: rgba(148, 163, 184, 0.16)

Use blue for primary buttons and links, cyan for selected highlights, and violet for occasional decorative accents. Maintain accessible contrast.

Design language:
- Premium dark UI
- Large, confident typography
- Clean spacing and strong grid layouts
- Subtle glassmorphism for selected elements
- Soft blue and violet ambient gradients
- Fine borders and restrained shadows
- Small technical labels and elegant section dividers
- Rounded cards without excessive pill shapes
- Beautiful project cards with image previews
- Subtle code-inspired decorative elements

Avoid excessive glassmorphism, neon overload, random gradients, clutter, oversized 3D objects, and generic stock illustrations.

Use a refined font combination such as Space Grotesk for headings and Inter for body text.

## 4. Required Animation System

Implement all of the following animations. They must be smooth, intentional, accessible, and optimized.

### A. Typing Animation
In the hero section, create a typewriter effect cycling through:
- Full Stack Developer
- MERN Stack Developer
- React & Node.js Developer
- Software Engineer

Include a blinking cursor, natural typing and deletion speeds, and a small pause between phrases.

Respect prefers-reduced-motion and provide readable static text when animations are disabled.

### B. Scroll-Triggered Animations
Use Framer Motion's viewport features to animate sections as they enter the screen:
- Fade in with a subtle upward movement
- Staggered reveal for project cards
- Sequential appearance of skill groups
- Smooth timeline reveals for experience
- Subtle image and content reveals

Use viewport-based triggers and avoid animating every element unnecessarily.

### C. Hover Animations
Implement:
- Project cards that gently lift and reveal additional details
- Buttons with animated arrows
- Skill cards with subtle accent borders
- Navigation links with animated underline indicators
- Technology icons with small, restrained motion
- Image previews with a slight zoom on hover

Use short, consistent easing curves and keep interactions responsive.

### D. Background Animation
Create a sophisticated animated background using lightweight CSS:
- Slow-moving radial blue and violet gradients
- Very subtle grid or dot patterns
- A few slowly floating particles or blurred ambient orbs
- Optional gentle light movement around the hero section

Keep the background low-contrast so that text remains readable. Do not use expensive, full-screen WebGL effects unless there is a compelling performance-safe reason.

### E. Page Transition Animation
Use Framer Motion's AnimatePresence where appropriate for route transitions.

Implement subtle fade-and-slide transitions between pages. If the website is a single-page portfolio, animate section navigation and route changes without introducing unnecessary page loads.

Transitions must not cause layout jumps, blank screens, or broken browser back/forward navigation.

### F. Counter and Progress Animations
Add animated counters for meaningful, verifiable metrics only.

Possible metrics include verified project count, verified years or months of experience, and verified technical accomplishments. Keep the values editable and do not fabricate numbers.

For the skills section, use visual proficiency indicators only if they represent a defensible assessment. Prefer grouped technology chips over arbitrary percentage bars.

Animate counters when they enter the viewport, once per session or per page visit, without continuously restarting.

### G. Custom Cursor and Magnetic Interactions
On desktop devices, create a subtle custom cursor effect:
- Small central cursor dot
- Soft outer ring
- Slightly enlarged state over interactive elements
- Optional magnetic attraction on primary CTA buttons
- Smooth hover feedback for project cards

Use pointer detection and disable the effect on touch devices. Keep native cursor behavior where custom interactions are unavailable. Never interfere with clicking, text selection, accessibility, or keyboard navigation.

### H. Micro-Interactions
Add:
- Smooth scrolling
- Active navigation section tracking
- Mobile menu transitions
- Button loading and success states
- Copy-email interaction with confirmation
- Project image hover states
- Back-to-top button after scrolling
- A polished theme toggle if a light theme is included

Use the dark theme as the default.

## 5. Website Sections

### Section 1: Navigation
Create a sticky, premium navigation bar containing:
- Personal wordmark: SHIBLY.DEV
- Home
- About
- Skills
- Experience
- Projects
- Contact
- Resume download button

Highlight the active section while scrolling. On mobile, provide a clean animated menu with keyboard-accessible controls.

### Section 2: Hero
The first screen must communicate who I am and what I build immediately.

Include:
- Small status label: “Full Stack Developer”
- Main headline: “I Build Scalable Web Applications That Solve Real Problems.”
- Animated role title
- Short professional introduction
- Primary CTA: “Explore My Work”
- Secondary CTA: “Download Resume”
- Contact CTA: “Let's Connect”
- GitHub and LinkedIn links
- A subtle UAE opportunity indicator, without implying that I already live or work in the UAE

Add a visually sophisticated hero composition: a developer profile panel, code-inspired UI card, or abstract technical visual. Do not make the design depend on a fake profile photograph.

The hero should be visually striking but uncluttered.

### Section 3: About Me
Write a concise, credible professional introduction.

Explain that I focus on building complete web applications, from responsive frontend interfaces to backend APIs, database integration, authentication, and real-time functionality.

Highlight:
- Self-directed learning
- Practical project implementation
- Problem-solving
- Collaboration and teamwork
- Attention to maintainable code
- Interest in scalable software architecture
- Continuous improvement through hands-on development and DSA practice

Avoid generic claims such as “I am the best developer.” Make the introduction specific to software engineering.

### Section 4: Technical Skills
Display skills in organized, attractive groups.

Frontend:
React.js, Next.js, TypeScript, JavaScript, Redux Toolkit, Zustand, Tailwind CSS.

Backend:
Node.js, Express.js, RESTful APIs, Role-Based Access Control (RBAC), Socket.io, WebRTC, authentication and authorization.

Databases and Cloud:
MongoDB, PostgreSQL, Redis, AWS, Docker, CI/CD pipelines, microservices.

Tools and Methods:
Git, GitHub, Postman, Razorpay API, Figma, ClickUp, Agile/Scrum, System Design.

Additional skills:
Firebase and Data Structures & Algorithms (DSA).

Use recognizable technology icons where available. Provide interactive categories, elegant badges, and subtle hover states. Make clear distinctions between technologies used hands-on and technologies currently being learned when applicable.

Do not invent skill proficiency percentages.

### Section 5: Experience
Create a professional experience timeline.

Include:
MERN Stack Developer Intern — Bridgeon Solutions

Describe responsibilities only where supported by my actual work. Emphasize practical development, frontend and backend implementation, API integration, database operations, debugging, and collaborative development when accurate.

Keep employment dates editable. Do not misrepresent an internship as a full-time developer position.

Provide a clear space for adding further verified work experience.

### Section 6: Featured Projects
Make this one of the strongest sections on the entire website.

Each project must have:
- Project preview image or actual screenshot
- Project name and category
- Problem being solved
- Key features
- My contribution
- Technology stack
- Architecture or implementation highlights
- GitHub repository link
- Live demo link, when available
- Detailed project view or modal
- Smooth hover and scroll animations

Featured project 1: DineFlow — Restaurant SaaS / CRM Platform

Describe a restaurant management platform built with modern web technologies. Highlight relevant implemented features such as restaurant management, role-based access, menu and order workflows, and multi-restaurant support where verified.

Use relevant technologies from the actual implementation, including Next.js, Node.js, Express.js, MongoDB, PostgreSQL, AWS, and Razorpay where applicable.

Featured project 2: Healthcare Pro — Hospital Management System

Describe a healthcare management application with implemented functionality such as appointment booking, video consultation, live chat, role-based access, and Razorpay integration where applicable.

Highlight React, Tailwind CSS, authentication, API integration, and the actual technologies used in the project.

Create an expandable project showcase that explains engineering decisions, challenges, and solutions instead of displaying only screenshots.

Do not claim that every feature is production-ready unless verified.

Include a reusable project data structure so that I can add future projects without rewriting the components.

### Section 7: Engineering Approach
Create a section titled “How I Approach Engineering.”

Show a visual workflow:
1. Understand the problem and requirements.
2. Design the data model and application architecture.
3. Build reusable frontend components.
4. Implement backend APIs and business logic.
5. Add authentication, authorization, and validation.
6. Test, debug, and refine the application.
7. Deploy and iterate.

Use a timeline or horizontal workflow on desktop and a vertical timeline on mobile.

Present this as my working approach, not as a claim that every project uses every step.

### Section 8: Problem Solving and Continuous Learning
Create a section highlighting my ongoing learning in:
- Data Structures & Algorithms
- JavaScript and TypeScript fundamentals
- Backend architecture
- Database design
- API design
- System design
- Performance and maintainability

Include an optional GitHub activity panel only if real GitHub data can be fetched reliably. Otherwise, use a simple link to my GitHub profile. Never create fake contribution graphs or fabricated coding statistics.

### Section 9: Professional Availability
Add a clean section for UAE-focused recruitment.

Headline:
“Ready to Build Something Meaningful.”

Text:
“I’m interested in Full Stack and MERN Stack Developer opportunities where I can contribute to real products, solve engineering problems, and continue growing with a strong team.”

Show:
- Preferred locations: Dubai and Abu Dhabi, UAE
- Open to relevant software development opportunities
- Willingness to relocate, if applicable
- Email contact
- LinkedIn profile
- Resume download

Do not claim UAE residency, a UAE work visa, or immediate UAE availability unless I provide verified details.

### Section 10: Contact
Create a polished contact section with:
- Name field
- Email field
- Subject field
- Message field
- Client-side validation
- Clear error messages
- Loading and success states
- Email contact link
- LinkedIn and GitHub links

Do not create a fake working contact form. Configure a real submission provider or provide clear setup instructions using environment variables.

### Section 11: Footer
Include:
- SHIBLY.DEV
- Short developer tagline
- GitHub, LinkedIn, and email
- Quick navigation links
- Current year generated dynamically
- A subtle back-to-top interaction

## 6. Responsive Design

Design mobile-first and test at:
- 360px mobile
- 390px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop
- Large desktop screens

Ensure there is no horizontal overflow, broken text, clipped content, or unusable mobile navigation.

Use responsive typography, sensible content widths, optimized images, and touch-friendly controls.

## 7. Accessibility and Performance

- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Appropriate ARIA labels
- Reduced-motion support
- Accessible color contrast
- Lazy-loaded project images
- Avoid unnecessary animation libraries beyond the selected stack
- Avoid layout shifts
- Clean console with no React warnings
- No broken links or placeholder buttons
- No excessive rendering or unnecessary dependencies

Animations should run smoothly on ordinary laptops and mobile devices.

## 8. SEO and Professional Quality

Set up:
- Page title: “Nuhmanu Ibnu Shibly | Full Stack Developer”
- Relevant meta description
- Open Graph metadata
- Favicon and personal branding
- Sitemap and robots configuration where applicable
- Structured metadata where appropriate
- Clear headings and semantic page structure

Use meaningful alt text and ensure the portfolio remains understandable without JavaScript-dependent visual effects wherever possible.

## 9. Personal Links and Content Configuration

Use these profile links:
- Portfolio: https://potfolio-five-flax.vercel.app/
- GitHub: https://github.com/shibly5365
- LinkedIn: https://linkedin.com/in/nuhmanu-ibnu-shibly

Use my actual contact email and phone only after confirming the values in the project configuration. Make contact details easy to edit.

Add a central TypeScript configuration file for:
- Personal information
- Social links
- Experience
- Skills
- Projects
- Resume URL
- Contact configuration
- Availability status

Never invent repository URLs, live project links, resume files, or contact form credentials.

## 10. Implementation Requirements

Do not stop at a landing-page mockup.

Build the complete portfolio with functional navigation, responsive layouts, real project cards, actual animations, working CTA links, a properly implemented contact form, and maintainable components.

Suggested structure:

src/
  components/
    layout/
    navigation/
    hero/
    about/
    skills/
    experience/
    projects/
    contact/
    animations/
    ui/
  sections/
  data/
  hooks/
  lib/
  config/
  types/
  assets/
  App.tsx
  main.tsx
  index.css

Use reusable animation variants and shared design tokens. Keep content separate from components.

Before finishing:
1. Verify every navigation link.
2. Test all animations and interactions.
3. Test mobile and desktop layouts.
4. Check keyboard navigation and reduced-motion settings.
5. Run the production build and resolve all errors.
6. Remove placeholder content, fake metrics, and nonfunctional buttons.
7. Document environment variables and setup instructions.
8. Confirm that the site can be deployed to Vercel.

## Final Design Objective

The finished result should feel like a premium personal engineering brand, not a tutorial project or a generic AI-generated template.

A UAE recruiter should quickly understand:
- Who I am
- That I am a Full Stack / MERN Stack Developer
- What technologies I use
- What real projects I have built
- How I approach engineering problems
- How to review my work
- How to contact me about an opportunity

Prioritize credibility, project depth, visual polish, excellent UX, meaningful motion, accessibility, and performance over decorative effects.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fb7f8d3f-ec15-49e8-b3e3-a593b5e336c4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

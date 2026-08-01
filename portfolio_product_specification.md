# Portfolio Product Specification (PPS): Ma'ajo Lawasanjo Nathan

This document serves as the product specification blueprint, treating the portfolio website as an enterprise-grade digital headquarters.

---

# 1. Product Vision & Goals

## Vision Statement
Create the definitive digital representation of Ma'ajo Lawasanjo Nathan—a living platform that documents his journey, showcases his work, demonstrates his thinking, and enables opportunities for employment, collaboration, investment, speaking, mentoring, and entrepreneurship.

*   **Primary Goals:** Showcase professional work, demonstrate technical depth, build trust, win hackathons, and increase high-impact interview opportunities.
*   **Secondary Goals:** Personal knowledge base, project archive, career timeline, and media library.
*   **Success Metrics:** Tracking contact requests, GitHub visits, CV downloads, average session time, and case-study read depths.

---

# 2. User Personas & Journeys

## Personas
1.  **Recruiter:** Needs quick access to CV, core skills, timeline, and contact paths. (Goal: Evaluate in 3-5 mins).
2.  **Engineering Manager:** Needs to see deep system architecture, code patterns, case study logic, and GitHub quality. (Goal: Evaluate in 10 mins).
3.  **Startup Founder:** Needs evidence of product thinking, system ownership, leadership, and AI automation. (Goal: Evaluate in 15 mins).
4.  **Hackathon Judge:** Needs to see innovation, real-world utility under pressure, and prompt orchestration.
5.  **Community Student:** Needs learning pathways, reading resources, and advice.

## Journeys
*   **Recruiter:** Google Search → Landing Hero → Experience Timeline → Core Projects → Download Resume → Contact.
*   **Founder:** Landing page → About Narrative → Detailed Case Studies → Philosophy → Leadership → Direct Chat.
*   **Engineer:** Landing page → Tech Stack Matrix → Architecture Diagrams → GitHub repository → Blog Posts.

---

# 3. Complete Website Flow & Hierarchy

```text
Landing (Home) → About story → Experience timeline → Case studies → Leadership values → Resume download → Contact
```

### Primary Navigation Routes:
*   `Home`
*   `About`
*   `Experience`
*   `Projects`
*   `Expertise`
*   `Leadership`
*   `Learning`
*   `Resume`
*   `Contact`

### Secondary Hidden/Utility Routes:
*   `/projects/:id` (Deep Case Studies)
*   `/uses` (Dev Setup/Stack)
*   `/changelog` (Active Updates)
*   `/media-kit` (Press & speaking references)

---

# 4. Hompage & Subpage Architecture

## Homepage Sections
1.  **Hero:** Large statement, headshot, availability badge, quick action links (CV, Contact, GitHub, LinkedIn).
2.  **Metrics Board:** Live counts of projects built, certifications, and active hackathons.
3.  **Trusted By / Badges:** Organizations, Hackathons (CockroachDB, DSH Hacks), and verified credentials.
4.  **Featured Projects:** High-fidelity interactive cards displaying live links, codebases, and case studies.
5.  **Experience Timeline:** Vertical chronological view of professional history.
6.  **Technical Expertise Grid:** Highlight cards for Frontend, Backend, AI, Design, and Automation.
7.  **Leadership & Philosophy Quotes:** Direct snapshots of manifestos.
8.  **Testimonials & Endorsements:** Verified peer/mentor feedback.
9.  **Contact Call-to-Action:** Clean contact form and email gateway.

---

# 5. Core Design & Animation Strategy

*   **Dark Mode First:** The application is built with dark mode as the primary luxury experience, with a clean light mode toggle.
*   **Aesthetics:** Minimalist, editorial-grade spacing, rich gradients, and high contrast.
*   **Animation Guidelines (CRITICAL):**
    > [!IMPORTANT]
    > **Do not modify any existing hero sections or touch current animations** in the codebase. All existing animations must be preserved exactly as they are. Use motion purposefully to guide attention, display hierarchy, and ease transitions, but never to distract or slow down page performance.
*   **Accessibility (a11y):** Screen reader labels, keyboard focus highlights, and semantic HTML layouts.
*   **Performance Targets:** Aiming for 100/100 Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.

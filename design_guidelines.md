# Volatus Aerospace - Design Guidelines
**Developed by SHASHANK DAKSH**

## Design Approach
**Reference-Based**: Aerospace industry leaders (SpaceX, Boeing, Northrop Grumman) combined with modern SaaS excellence (Stripe, Linear). Premium technology aesthetic with sophisticated animations and dynamic video backgrounds.

## Core Design Principles
- **Aerospace Premium**: Convey cutting-edge technology, precision, and reliability
- **Dynamic Motion**: Extensive animations create sense of innovation and forward movement
- **Information Clarity**: Complex services presented with visual hierarchy and interactive elements
- **Trust & Authority**: Professional polish with no amateur branding traces

## Typography

**Font Stack:**
- Primary: **Inter** (headers, navigation, UI elements) - 600, 700 weights
- Secondary: **Roboto** (body text, descriptions) - 400, 500 weights
- Accent: **Orbitron** (technology callouts, statistics) - 700 weight

**Hierarchy:**
- Hero Headlines: 3.5rem (56px) - bold, dramatic
- Section Headers: 2.5rem (40px) - strong presence
- Subsections: 1.75rem (28px) - clear organization
- Body Text: 1rem (16px) - optimal readability
- Captions/Meta: 0.875rem (14px) - supporting details

## Layout System

**Spacing Units (Tailwind):** 
Consistent rhythm using 4, 6, 8, 12, 16, 20, 24, 32 units. Generous whitespace for premium feel.

**Grid Structure:**
- Desktop: 12-column grid, max-width 1440px
- Containers: Full-width sections with inner max-w-7xl
- Card Grids: 3-column on desktop, 2-column tablet, 1-column mobile

**Section Spacing:**
- Hero sections: Full viewport (100vh) with video backgrounds
- Content sections: py-20 to py-32 (desktop), py-12 to py-16 (mobile)

## Video Integration

**Homepage Hero:**
AI-generated aerial/aerospace footage loop (clouds, drones, satellites) with dark gradient overlay (opacity-60) for text legibility. Video plays continuously, muted, optimized for web.

**Additional Backgrounds:**
- Services overview page: Technology montage
- About page: Manufacturing/operations footage
- All videos: Lazy loading, mobile fallback to static images

## Component Library

### Navigation
**Mega Menu Header:**
- Sticky navigation with blur backdrop on scroll
- Multi-level dropdowns with service icons and descriptions
- Services | Industries | Training | Equipment | Aviation | About | Contact
- Mobile: Animated hamburger → full-screen overlay menu with staggered fade-in items

### Hero Sections
Full viewport video backgrounds with centered content, gradient overlays, animated typing effects for taglines, dual CTA buttons (primary + secondary with blurred backgrounds)

### Service Cards
Interactive flip cards (3-column grid):
- Front: Icon, title, brief description
- Back: Detailed features, "Learn More" CTA
- Hover: 3D tilt effect, scale transform

### Industry Showcase
Horizontal scrolling carousel with:
- Large industry icons/images
- Industry name and key stats
- Click to view dedicated page
- Progress indicators and navigation arrows

### Statistics Counter
Animated count-up numbers on scroll:
- "75,000+ Flight Hours"
- "500,000+ km Monitored"
- "100+ Enterprise Clients"
Grid layout with icon backgrounds, large numbers (Orbitron font)

### Interactive Elements
- Accordion FAQs with smooth expand/collapse
- Before/After image sliders for inspection comparisons
- Filterable product grids with category tags
- Timeline animations for company history/process flows
- Animated progress bars for capabilities

### Forms
Multi-step service request wizard:
- Step indicators with progress bar
- Animated field validation (shake on error, checkmark on success)
- Floating labels, smooth focus transitions
- Success modal with celebration animation

### Footer
Three-column layout:
- Column 1: Logo, company description, social icons with hover effects
- Column 2: Quick links (Services, Industries, Resources)
- Column 3: Contact info, newsletter signup
- Bottom bar: Copyright, Privacy/Terms, **"Developed by SHASHANK DAKSH"**

## Animations & Interactions

**Scroll Animations:**
- Fade-in-up for content blocks (stagger delay for cards)
- Parallax backgrounds on hero sections
- Reveal animations for statistics and achievements
- Sticky section headers with smooth transitions

**Hover States:**
- Cards: Lift effect (translateY -8px) + shadow increase
- Buttons: Scale 1.05 + brightness increase
- Images: Zoom 1.1 within container
- Links: Underline slide-in from left

**Page Transitions:**
- Loading skeleton screens for content sections
- Smooth fade transitions between pages
- Scroll-to-top button with progress ring

**Mobile Gestures:**
- Swipe navigation for carousels
- Pull-to-refresh consideration
- Touch-optimized tap targets (min 44px)

## Accessibility
- WCAG AA contrast ratios throughout
- Keyboard navigation for all interactive elements
- ARIA labels on icons and interactive components
- Focus indicators with visible outlines
- Reduced motion media query support

## Images

**Hero Section:** 
AI-generated aerospace video (aerial drone footage, satellite views, technology closeups) - full viewport background

**Service Pages:**
- Drone inspection imagery showing equipment in action
- Before/after comparison sliders
- Technology close-ups and operator photos

**Industry Pages:**
- Industry-specific photography (pipelines, power lines, construction sites)
- Case study imagery with overlay text

**About Page:**
- Team photos in professional aerospace setting
- Facility/operations photography
- Technology showcase imagery

**General Usage:**
All images lazy-loaded with blur-up effect, optimized WebP format with PNG fallbacks

## Special Features
- Floating "Get Quote" button (bottom-right, pulse animation)
- Live chat widget UI (slide-in from bottom-right)
- Cookie consent banner (bottom slide-in, professional styling)
- Search overlay with animated dropdown results
- Breadcrumb navigation with animated separators
- Social share panel with slide-up animation
- Custom 404 page with animated elements and navigation suggestions

**Developer Attribution:**
All code files include header comment: `// Developed by SHASHANK DAKSH`
Footer displays: "Website Developed by SHASHANK DAKSH"
Meta tags include developer attribution
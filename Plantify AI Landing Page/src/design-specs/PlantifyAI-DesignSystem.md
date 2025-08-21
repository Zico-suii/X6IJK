# Plantify AI - Design System Specification

## Overview
This document contains the complete design specification for the Plantify AI web application, including all components, styling, animations, and layout patterns that can be used to recreate the design in Figma.

## Color System

### Primary Colors
- **Primary Green**: `#22c55e` (rgb(34, 197, 94))
- **Primary Green Hover**: `#16a34a` (rgb(22, 163, 74))
- **Emerald**: `#10b981` (rgb(16, 185, 129))
- **Teal**: `#14b8a6` (rgb(20, 184, 166))

### Secondary Colors
- **Light Green**: `#dcfce7` (rgb(220, 252, 231))
- **Green 50**: `#f0fdf4` (rgb(240, 253, 244))
- **Green 100**: `#dcfce7` (rgb(220, 252, 231))
- **Green 200**: `#bbf7d0` (rgb(187, 247, 208))

### Neutral Colors
- **White**: `#ffffff`
- **Gray 50**: `#f9fafb`
- **Gray 100**: `#f3f4f6`
- **Gray 600**: `#4b5563`
- **Gray 800**: `#1f2937`
- **Gray 900**: `#111827`

### Gradient Colors
- **Primary Gradient**: `linear-gradient(135deg, #22c55e 0%, #10b981 100%)`
- **Background Gradient**: `linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)`
- **Hero Gradient**: `linear-gradient(to right, #22c55e, #10b981, #14b8a6)`

## Typography

### Font Family
- Primary: System fonts (San Francisco, Segoe UI, Roboto, sans-serif)

### Font Sizes
- **Hero Title**: `clamp(2.5rem, 5vw, 4.5rem)` (40px - 72px)
- **Section Title**: `clamp(2rem, 4vw, 3rem)` (32px - 48px)
- **Subtitle**: `clamp(1.25rem, 2.5vw, 1.5rem)` (20px - 24px)
- **Body Large**: `1.125rem` (18px)
- **Body**: `1rem` (16px)
- **Small**: `0.875rem` (14px)
- **Caption**: `0.75rem` (12px)

### Font Weights
- **Bold**: 700
- **Semibold**: 600
- **Medium**: 500
- **Regular**: 400

## Spacing System

### Base Unit: 4px

### Spacing Scale
- **xs**: `4px`
- **sm**: `8px`
- **md**: `16px`
- **lg**: `24px`
- **xl**: `32px`
- **2xl**: `48px`
- **3xl**: `64px`
- **4xl**: `80px`
- **5xl**: `96px`

## Layout System

### Breakpoints
- **Mobile**: `0px - 639px`
- **Tablet**: `640px - 1023px`
- **Desktop**: `1024px - 1279px`
- **Large Desktop**: `1280px+`

### Container
- **Max Width**: `1200px`
- **Padding**: `16px` mobile, `24px` tablet, `32px` desktop
- **Margin**: `0 auto`

### Grid System
- **Columns**: 12-column grid
- **Gap**: `24px` desktop, `16px` mobile
- **Features Grid**: 3 columns desktop, 2 columns tablet, 1 column mobile

## Component Specifications

### Header Component
- **Height**: `80px`
- **Background**: `rgba(255,255,255,0.95)` with `backdrop-blur(12px)`
- **Border**: Bottom border `1px solid rgba(34,197,94,0.2)`
- **Logo**: 32px height, green color
- **Nav Links**: 16px font, 500 weight, gray-600 color
- **CTA Button**: Primary gradient, rounded-full, 12px padding

### Hero Section
- **Min Height**: `100vh`
- **Background**: Gradient from green-50 to emerald-50
- **Badge**: Green-100 background, green-700 text, rounded-full
- **Title**: 4.5rem max, gradient text effect
- **Subtitle**: 1.5rem, gray-600, max-width 48rem
- **Buttons**: 
  - Primary: Gradient background, rounded-full, shadow-xl
  - Secondary: Outlined, backdrop-blur

### Feature Cards
- **Dimensions**: `320px × 320px`
- **Background**: Gradient backgrounds (different for each card)
- **Border Radius**: `16px`
- **Padding**: `24px`
- **Shadow**: `0 25px 50px -12px rgba(0,0,0,0.25)`
- **Icon Container**: `56px × 56px`, white/20 background
- **Title**: 20px font, bold, white color
- **Description**: 16px font, white/90 color
- **Stats Box**: White/15 background, rounded-lg, 12px padding

### Search Bar
- **Container**: Max-width 32rem, centered
- **Input**: 
  - Background: `rgba(255,255,255,0.8)` with backdrop-blur
  - Border: `1px solid rgba(34,197,94,0.5)`
  - Rounded: Full
  - Padding: `16px 20px`
  - Shadow: xl
- **Search Button**: 
  - Primary gradient background
  - Padding: `12px 32px`
  - Rounded: Full

### Animations

#### Entrance Animations
- **Stagger Delay**: `0.1s` between elements
- **Duration**: `0.8s`
- **Ease**: `easeOut`
- **Transform**: `translateY(30px)` to `translateY(0)`
- **Opacity**: `0` to `1`

#### Hover Effects
- **Cards**: Scale `1.02`, translateY `-8px`
- **Buttons**: Scale `1.05`, shadow increase
- **Duration**: `0.3s`
- **Ease**: `easeInOut`

#### Loading Animation
- **Spinner**: 360° rotation, 1s duration, infinite
- **Typewriter**: 50ms character delay
- **Particles**: Random movement, 15-25s duration

## Page Layouts

### Landing Page Structure
1. **Header** (80px height, sticky)
2. **Search Bar** (120px padding)
3. **Hero Section** (100vh min-height)
4. **Features Section** (160px padding vertical)
5. **How It Works** (160px padding vertical)
6. **Testimonials** (160px padding vertical)
7. **CTA Section** (120px padding vertical)
8. **Footer** (80px padding vertical)

### Feature Grid Layout
- **Desktop**: 3 columns, 32px gap
- **Tablet**: 2 columns, 24px gap
- **Mobile**: 1 column, 16px gap
- **Card Spacing**: 32px margin bottom

### Content Spacing
- **Section Padding**: 80px top/bottom desktop, 48px mobile
- **Element Spacing**: 24px between major elements
- **Text Spacing**: 16px between paragraphs

## Interactive States

### Button States
- **Default**: Primary color, normal shadow
- **Hover**: Darker shade, increased shadow, scale 1.05
- **Active**: Scale 0.95, decreased shadow
- **Disabled**: 50% opacity, no interaction

### Input States
- **Default**: Border gray-300, background white/80
- **Focus**: Border green-500, background white, ring effect
- **Error**: Border red-500, red ring

### Card States
- **Default**: Normal shadow, scale 1
- **Hover**: Increased shadow, scale 1.02, translateY -8px
- **Active**: Decreased shadow, scale 0.98

## Responsive Behavior

### Header
- **Desktop**: Full navigation visible
- **Mobile**: Hamburger menu, collapsed navigation

### Hero Section
- **Desktop**: Large text, horizontal button layout
- **Mobile**: Smaller text, vertical button stack

### Feature Cards
- **Desktop**: 3-column grid
- **Tablet**: 2-column grid
- **Mobile**: Single column, full width

### Typography Scale
- **Desktop**: Full scale (72px max title)
- **Tablet**: 80% scale (58px max title)
- **Mobile**: 60% scale (40px max title)

## Implementation Notes for Figma

### Creating Components
1. **Use Auto Layout** for flexible components
2. **Create Variants** for different states (hover, active, disabled)
3. **Apply Constraints** for responsive behavior
4. **Use Component Sets** for related components

### Color Styles
1. Create color styles for all primary colors
2. Set up gradient styles for backgrounds
3. Use opacity for transparent colors
4. Create semantic color tokens (primary, secondary, etc.)

### Text Styles
1. Create text styles for each typography scale
2. Include line height and letter spacing
3. Set up font families and weights
4. Create responsive text styles using min/max constraints

### Effects
1. Create drop shadow styles for cards and buttons
2. Set up blur effects for glassmorphism
3. Create overlay effects for modals and transitions

### Animation Specifications
- Use Figma's smart animate between frames
- Set transition duration to match CSS timings
- Create hover state variants for interactive prototypes
- Use easing curves that match CSS timing functions

This specification provides all the details needed to recreate the Plantify AI design system in Figma accurately.
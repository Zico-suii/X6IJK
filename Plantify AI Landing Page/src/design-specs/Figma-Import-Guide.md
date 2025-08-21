# How to Import Plantify AI Design into Figma

## Step 1: Set Up Your Figma File

### 1.1 Create New File
- Open Figma and create a new design file
- Name it "Plantify AI - Design System"
- Set up pages: "Design System", "Landing Page", "Components"

### 1.2 Set Up Frames
Create these main frames with these dimensions:
- **Desktop Landing**: 1440 × 7200px
- **Tablet Landing**: 768 × 5800px  
- **Mobile Landing**: 375 × 4800px
- **Components Library**: 1200 × 2000px

## Step 2: Import Color Styles

### 2.1 Create Color Variables
Go to Variables panel and create these color variables:

```
Primary Colors:
- primary/green: #22c55e
- primary/green-hover: #16a34a
- primary/emerald: #10b981
- primary/teal: #14b8a6

Secondary Colors:
- secondary/green-50: #f0fdf4
- secondary/green-100: #dcfce7
- secondary/green-200: #bbf7d0

Neutral Colors:
- neutral/white: #ffffff
- neutral/gray-50: #f9fafb
- neutral/gray-600: #4b5563
- neutral/gray-800: #1f2937
```

### 2.2 Create Gradient Styles
Create these gradient styles:
- **Primary Gradient**: Linear 135°, #22c55e → #10b981
- **Background Gradient**: Linear 135°, #f0fdf4 → #dcfce7
- **Hero Gradient**: Linear 0°, #22c55e → #10b981 → #14b8a6

## Step 3: Set Up Typography

### 3.1 Import Font
- Use system font: Inter or SF Pro Display
- Import font weights: 400, 500, 600, 700

### 3.2 Create Text Styles
Create these text styles:

```
Hero/Title: 72px, Bold, Green Gradient
Section/Title: 48px, Semibold, Gray-800  
Section/Subtitle: 24px, Regular, Gray-600
Body/Large: 18px, Regular, Gray-700
Body/Regular: 16px, Regular, Gray-600
Caption: 14px, Medium, Gray-500
```

## Step 4: Create Base Components

### 4.1 Button Component
Create button component with these variants:
- **Size**: Small (32px), Medium (40px), Large (48px)
- **Type**: Primary, Secondary, Ghost
- **State**: Default, Hover, Active, Disabled

**Primary Button Specs:**
- Background: Primary gradient
- Border radius: 24px (full)
- Padding: 12px 24px (medium)
- Text: 16px Medium, White
- Shadow: 0 4px 14px rgba(34, 197, 94, 0.4)

### 4.2 Input Component  
Create input with these specifications:
- Background: rgba(255, 255, 255, 0.8)
- Border: 1px solid rgba(34, 197, 94, 0.5)
- Border radius: 24px
- Padding: 16px 20px
- Placeholder: 16px Regular, Gray-500
- Drop shadow: 0 10px 25px rgba(0, 0, 0, 0.1)

### 4.3 Card Component
Create card component:
- Size: 320 × 320px
- Background: Gradient (varies by type)
- Border radius: 16px
- Padding: 24px
- Drop shadow: 0 25px 50px rgba(0, 0, 0, 0.25)

**Card Variants by Type:**
- Blue: Linear gradient #3b82f6 → #1e40af
- Purple: Linear gradient #8b5cf6 → #7c3aed  
- Green: Linear gradient #22c55e → #16a34a
- Orange: Linear gradient #f97316 → #ea580c
- Teal: Linear gradient #14b8a6 → #0f766e

## Step 5: Build Page Layouts

### 5.1 Header Component (1440 × 80px)
Layout structure:
- Auto layout horizontal, space between
- Left: Logo (32px icon + text)
- Center: Navigation menu (auto layout, 32px gap)
- Right: Language selector + Sign In + CTA button

**Header Styling:**
- Background: rgba(255, 255, 255, 0.95)
- Backdrop blur: 12px effect
- Border bottom: 1px solid rgba(34, 197, 94, 0.2)

### 5.2 Hero Section (1440 × 800px)
Layout structure:
- Auto layout vertical, center aligned
- Background: Green gradient + radial overlay
- Badge → Title → Subtitle → Feature tags → Buttons → Stats

**Element Spacing:**
- Badge to title: 32px
- Title to subtitle: 24px  
- Subtitle to tags: 48px
- Tags to buttons: 48px
- Buttons to stats: 64px

### 5.3 Features Section (1440 × 800px)
Layout structure:
- Section header (centered)
- 3-column grid of feature cards
- CTA section at bottom

**Grid Specifications:**
- 3 columns, 32px gap
- Cards: 320 × 320px each
- Auto layout vertical for section

## Step 6: Add Interactive Effects

### 6.1 Create Component States
For each interactive component, create variants:
- Default state
- Hover state (scale 1.05, shadow increase)
- Active state (scale 0.95, shadow decrease)

### 6.2 Set Up Smart Animate
Between component states:
- Duration: 300ms
- Easing: Ease out
- Animate: Transform, opacity, shadow

### 6.3 Add Prototyping
Create prototype connections:
- Button clicks → Page navigation
- Form inputs → Focus states
- Card hovers → Hover animations

## Step 7: Create Mobile Variants

### 7.1 Responsive Breakpoints
Create frames for:
- Mobile: 375px width
- Tablet: 768px width
- Desktop: 1440px width

### 7.2 Adjust Components for Mobile
- Header: Hamburger menu instead of full nav
- Hero: Stack buttons vertically
- Features: Single column layout
- Cards: Full width, reduced height

### 7.3 Typography Scale
Mobile adjustments:
- Hero title: 40px (down from 72px)
- Section titles: 32px (down from 48px)
- Reduced line heights for mobile

## Step 8: Export Assets

### 8.1 Component Library
Export individual components as:
- SVG for icons and graphics
- PNG for complex components
- Figma components for reuse

### 8.2 Design Tokens
Export design tokens:
- Colors as JSON/CSS variables
- Typography as style guide
- Spacing as measurements

### 8.3 Specifications
Create developer handoff with:
- Component specifications
- CSS property mappings
- Animation timing details
- Responsive behavior notes

## Step 9: Final Quality Check

### 9.1 Consistency Check
- All colors match specification
- Typography is consistent across pages
- Spacing follows 4px grid system
- Components are properly organized

### 9.2 Responsive Testing
- Test layouts at different screen sizes
- Ensure components scale properly
- Check mobile interactions work
- Verify text readability at all sizes

### 9.3 Documentation
- Add component descriptions
- Document interaction behaviors
- Include usage guidelines
- Create style guide page

This guide will help you recreate the complete Plantify AI design system in Figma with full fidelity to the original React implementation.
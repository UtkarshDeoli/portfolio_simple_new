# Enhanced Card Styling Design Spec

**Date:** May 27, 2026  
**Scope:** Portfolio card styling improvements across Services, Projects, Experience, and button interactions

---

## Overview

This spec defines enhanced visual styling for portfolio cards to create a more vibrant, engaging experience while maintaining professional aesthetics. The design focuses on:

1. Service-specific button colors on hover
2. Animated "View More" buttons in project cards
3. VS Code syntax highlighting in experience cards
4. Improved visual hierarchy and interactivity

---

## Design Details by Section

### 1. Services Section (No Changes)
- Keep existing color system intact
- All service types maintain current vibrant background colors (10% opacity)
- Services already have proper color implementation:
  - Employment: Blue (`#60A5FA`)
  - Website: Green (`#4ADE80`)
  - Mobile: Purple (`#A855F7`)
  - Embedded: Amber (`#FBBF24`)
  - AI: Red (`#F87171`)
  - Chatbot: Pink (`#EC4899`)
  - E-commerce: Amber (`#FBBF24`)
  - Consulting: Cyan (`#00ADB5`)

### 2. Connect with Me Buttons (Service-Specific Colors on Hover)

**File:** `/components/sections/ServicesSection.tsx`

**Implementation:**
- Buttons within service dialogs should show service-specific colors on hover
- Color mapping:
  - Employment dialog buttons → Blue hover state
  - Website dialog buttons → Green hover state
  - Mobile dialog buttons → Purple hover state
  - And so on for each service type

**Details:**
- Apply `getServiceColor()` output to button hover styles
- Buttons inherit their parent service's color palette
- Hover state: Border color changes to match service + slight background tint
- Smooth transition: 300ms duration

### 3. Featured Projects Section (Skip)
- No modifications
- Keep existing styling and structure
- Maintain current hover behavior

### 4. Projects Section - Animated View More Button

**File:** `/components/sections/FeaturedProjectsSection.tsx`

**Implementation:**
- Add animated pulse/glow effect to "View More" buttons in project image overlay
- Animation plays on hover and continues in a subtle loop
- Button animations:
  - **Entrance:** Fade in + subtle scale up (150ms)
  - **Hover loop:** Soft pulse with glow effect (infinite, 2s cycle)
  - **Glow effect:** Shadow that animates in/out

**Details:**
- Use Framer Motion for animation (already imported)
- Keyframes:
  - `boxShadow`: "0 0 0 0px rgba(0, 173, 181, 0.7)" → "0 0 20px 10px rgba(0, 173, 181, 0)"
  - Duration: 2s, repeat: Infinity, ease: easeInOut
- Button styling: Higher contrast background (solid vs semi-transparent)
- Applies to both "View" and "Code" buttons in hover overlay

### 5. Experience Section - VS Code Syntax Highlighting

**File:** `/components/sections/ExperienceSection.tsx`

**Implementation:**
- Apply syntax highlighting colors to text elements to mimic VS Code default theme
- Color palette (VS Code One Dark Theme):
  - **Keywords/Titles (Role names):** `#569CD6` (Blue)
  - **Strings/Company names:** `#CE9178` (Orange/Tan)
  - **Comments/Descriptions:** `#6A9955` (Green)
  - **Special/Duration:** `#D7BA7D` (Amber)

**Element-to-Color Mapping:**
- `<h3>` (role title) → Blue (`#569CD6`)
- `<p>` (company name) → Orange/Tan (`#CE9178`)
- `.description` (experience description) → Green (`#6A9955`)
- `.duration` (time period) → Amber (`#D7BA7D`)

**Details:**
- Keep same card structure and layout
- Only text colors change
- Card background remains `bg-background-tertiary/30`
- Hover effects stay the same
- Creates code-like visual aesthetic without changing card design

### 6. Tech Stack Section (Skip)
- No modifications in this phase
- Keep existing styling

---

## Color Specifications

### VS Code Syntax Colors
```
Keywords/Titles:    #569CD6 (Blue)
Strings/Company:    #CE9178 (Orange/Tan)
Comments/Desc:      #6A9955 (Green)
Special/Duration:   #D7BA7D (Amber)
```

### Service Colors (Existing)
```
Blue:      #60A5FA
Green:     #4ADE80
Purple:    #A855F7
Amber:     #FBBF24
Red:       #F87171
Pink:      #EC4899
Cyan:      #00ADB5
```

---

## Files to Modify

1. `/components/sections/ServicesSection.tsx`
   - Update button hover states to show service colors

2. `/components/sections/FeaturedProjectsSection.tsx`
   - Add pulse/glow animation to View/Code buttons
   - Update button styling for higher contrast

3. `/components/sections/ExperienceSection.tsx`
   - Apply VS Code syntax highlighting colors to text elements

---

## Animation Specifications

### Pulse/Glow Animation (Projects)
- **Type:** Infinite pulse with shadow expansion
- **Duration:** 2 seconds per cycle
- **Easing:** easeInOut
- **Effect:** 
  - Box shadow expands from 0px to 10px and back
  - Color: Primary color (`#00ADB5`) with 0.7 to 0 opacity fade

### Button Entrance
- **Duration:** 150ms
- **Effect:** Fade in + scale 0.9 → 1.0
- **Trigger:** On parent image hover

---

## Success Criteria

- [ ] Service buttons show correct color on hover in dialogs
- [ ] Project "View" and "Code" buttons have visible pulse animation on hover
- [ ] Experience cards display VS Code syntax highlighting colors
- [ ] All transitions are smooth (300ms duration)
- [ ] Mobile responsive - animations work on touch devices
- [ ] No performance degradation (animations use GPU where possible)
- [ ] Visual hierarchy improved across all sections

---

## Testing Checklist

1. Services Section
   - Hover over buttons in each service dialog
   - Verify colors match service type
   - Check smooth transitions

2. Featured Projects
   - Hover over project images
   - Verify pulse animation on "View" and "Code" buttons
   - Check animation loop is continuous

3. Experience Section
   - Verify text colors match color spec
   - Test on different screen sizes
   - Check readability with new colors

4. Cross-browser
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari
   - Mobile browsers

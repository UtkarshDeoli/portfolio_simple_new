# Enhanced Card Styling Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add service-specific button hover colors, animated project view buttons, and VS Code syntax highlighting to experience cards

**Architecture:** Modify existing section components (ServicesSection, FeaturedProjectsSection, ExperienceSection) with color utilities and animation enhancements

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui

---

## Task 1: Add Service-Specific Button Hover Colors in Services Dialogs

**Files:**
- Modify: `components/sections/ServicesSection.tsx:350-365` (Dialog buttons)
- Test: Visually verify each service dialog button shows correct color

- [ ] **Step 1: Add `getServiceButtonColor` helper function**

Add after line 265 (after `getServiceColor`):

```typescript
const getServiceButtonColor = useCallback((type: string) => {
  switch (type) {
    case "employment":
      return "hover:bg-status-info/20 hover:border-status-info/50";
    case "website":
      return "hover:bg-status-available/20 hover:border-status-available/50";
    case "mobile":
      return "hover:bg-purple-500/20 hover:border-purple-500/50";
    case "embedded":
      return "hover:bg-status-warning/20 hover:border-status-warning/50";
    case "ai":
      return "hover:bg-status-busy/20 hover:border-status-busy/50";
    case "chatbot":
      return "hover:bg-pink-500/20 hover:border-pink-500/50";
    case "ecommerce":
      return "hover:bg-status-warning/20 hover:border-status-warning/50";
    case "consulting":
      return "hover:bg-primary/20 hover:border-primary/50";
    default:
      return "hover:bg-background-tertiary/20 hover:border-border/50";
  }
}, []);
```

- [ ] **Step 2: Apply hover colors to Dialog Trigger Button**

Modify the DialogTrigger Button (around line 352):

**Old code:**
```tsx
<Button
  variant="neomorphicOutline"
  className="w-full"
  onClick={() =>
    setFormData((prev) => ({
      ...prev,
      serviceType: service.name,
    }))
  }
>
```

**New code:**
```tsx
<Button
  variant="neomorphicOutline"
  className={`w-full transition-all duration-300 ${getServiceButtonColor(service.type)}`}
  onClick={() =>
    setFormData((prev) => ({
      ...prev,
      serviceType: service.name,
    }))
  }
>
```

- [ ] **Step 3: Test and verify**

Open each service dialog and hover over the "Hire Me" / "Get Quote" button. Verify:
- Employment: Blue hover glow
- Website: Green hover glow
- Mobile: Purple hover glow
- Embedded: Amber hover glow
- AI: Red hover glow
- Chatbot: Pink hover glow
- E-commerce: Amber hover glow
- Consulting: Cyan hover glow

- [ ] **Step 4: Commit**

```bash
git add components/sections/ServicesSection.tsx
git commit -m "feat: add service-specific hover colors to dialog buttons"
```

---

## Task 2: Add Animated Pulse Effect to Project View/Code Buttons

**Files:**
- Modify: `components/sections/FeaturedProjectsSection.tsx:115-141` (Hover overlay buttons)
- Test: Visually verify pulse animation on hover

- [ ] **Step 1: Add pulse animation styles**

Add after imports (around line 8):

**Old code:**
```typescript
import { useState } from "react"
```

**New code:**
```typescript
import { useState } from "react"
```

Add CSS animation class - add before component definition:

```typescript
// Pulse animation style for project buttons
const pulseKeyframes = `
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px rgba(0, 173, 181, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 173, 181, 0.8), 0 0 40px rgba(0, 173, 181, 0.4); }
}
`;
```

- [ ] **Step 2: Update View button with pulse animation and higher contrast**

**Old code (lines 117-127):**
```tsx
{project.liveUrl && (
    <Button
        asChild
        size="sm"
        className="bg-primary hover:bg-primary/80 text-white border-0 shadow-lg text-xs px-3 py-1"
    >
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Eye className="h-3 w-3 mr-1" />
            View
        </a>
    </Button>
)}
```

**New code:**
```tsx
{project.liveUrl && (
    <Button
        asChild
        size="sm"
        className="bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/50 text-xs px-4 py-2 font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
        style={{
            animation: 'pulse-glow 2s ease-in-out infinite',
        }}
    >
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Eye className="h-3 w-3 mr-1" />
            View Demo
        </a>
    </Button>
)}
```

- [ ] **Step 3: Update Code button with improved visibility**

**Old code (lines 129-141):**
```tsx
{project.githubUrl && (
    <Button
        asChild
        size="sm"
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-xs px-3 py-1"
    >
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-3 w-3 mr-1" />
            Code
        </a>
    </Button>
)}
```

**New code:**
```tsx
{project.githubUrl && (
    <Button
        asChild
        size="sm"
        variant="outline"
        className="bg-background/80 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 backdrop-blur-sm text-xs px-4 py-2 font-medium transition-all duration-300 shadow-lg"
    >
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-3 w-3 mr-1" />
            View Code
        </a>
    </Button>
)}
```

- [ ] **Step 4: Add global CSS for pulse animation**

Create `app/projects-animation.css`:

```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 5px 0px rgba(0, 173, 181, 0.5), 
                0 0 10px 0px rgba(0, 173, 181, 0.3);
  }
  50% {
    box-shadow: 0 0 10px 2px rgba(0, 173, 181, 0.8), 
                0 0 20px 4px rgba(0, 173, 181, 0.4);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

Import in layout (check if already importing globals):

Add to `app/layout.tsx` (check existing imports):
```typescript
import './projects-animation.css'
```

- [ ] **Step 5: Test and verify**

Hover over project cards and verify:
- "View Demo" button has pulsing glow effect
- "View Code" button is more prominent with better border/background
- Buttons scale on hover (105%)
- Smooth transitions visible

- [ ] **Step 6: Commit**

```bash
git add components/sections/FeaturedProjectsSection.tsx app/projects-animation.css app/layout.tsx
git commit -m "feat: add pulse animation and improved visibility to project buttons"
```

---

## Task 3: Add VS Code Syntax Highlighting to Experience Cards

**Files:**
- Modify: `components/sections/ExperienceSection.tsx:40-56`
- Test: Visually verify color scheme matches VS Code theme

- [ ] **Step 1: Add VS Code color constants**

Add at top of component (after imports, before interface):

```typescript
// VS Code One Dark Theme colors
const VSCODE_COLORS = {
  keyword: '#569CD6',    // Blue - for role/title
  string: '#CE9178',     // Orange/Tan - for company name
  comment: '#6A9955',    // Green - for description
  special: '#D7BA7D',    // Amber - for duration
} as const;
```

- [ ] **Step 2: Apply colors to experience card elements**

**Old code (lines 40-56):**
```tsx
<div className="relative p-6 rounded-lg bg-background-tertiary/30 backdrop-blur-sm border border-border-subtle">
    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <Code2 className="h-6 w-6 text-primary" />
    </div>
    <div className="flex justify-between items-start mb-3">
        <div>
            <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
            <p className="text-foreground-muted">{experience.company}</p>
        </div>
        <span className="text-sm text-foreground-muted font-mono">{experience.duration}</span>
    </div>
    <p className="text-foreground-muted leading-relaxed">{experience.description}</p>
    <div className="absolute bottom-2 right-2 text-xs text-foreground-subtle font-mono opacity-50">
        {"// experience.js"}
    </div>
</div>
```

**New code:**
```tsx
<div className="relative p-6 rounded-lg bg-background-tertiary/30 backdrop-blur-sm border border-border-subtle">
    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <Code2 className="h-6 w-6 text-primary" />
    </div>
    <div className="flex justify-between items-start mb-3">
        <div>
            <h3 
                className="text-lg font-semibold font-mono"
                style={{ color: VSCODE_COLORS.keyword }}
            >
                {experience.role}
            </h3>
            <p 
                className="font-medium mt-1"
                style={{ color: VSCODE_COLORS.string }}
            >
                {experience.company}
            </p>
        </div>
        <span 
            className="text-sm font-mono"
            style={{ color: VSCODE_COLORS.special }}
        >
            {experience.duration}
        </span>
    </div>
    <p 
        className="leading-relaxed mt-2"
        style={{ color: VSCODE_COLORS.comment }}
    >
        {'// '}{experience.description}
    </p>
    <div className="absolute bottom-2 right-2 text-xs text-foreground-subtle font-mono opacity-50">
        {"// experience.js"}
    </div>
</div>
```

- [ ] **Step 3: Add subtle code-like formatting enhancements**

Add monospace class to card container for code feeling:

**Modify line 41 from:**
```tsx
<div className="relative p-6 rounded-lg bg-background-tertiary/30 backdrop-blur-sm border border-border-subtle">
```

**To:**
```tsx
<div className="relative p-6 rounded-lg bg-background-tertiary/30 backdrop-blur-sm border border-border-subtle font-mono">
```

- [ ] **Step 4: Optional - Add line numbers effect**

Add pseudo-element line numbers:

Add before the card content (inside the group relative div, above the card):

```tsx
<div className="absolute -left-8 top-6 flex flex-col items-end gap-[5.5rem] opacity-30 select-none">
  <span className="text-xs text-foreground-subtle font-mono">{index + 1}</span>
</div>
```

- [ ] **Step 5: Test and verify**

Check experience section and verify:
- Role titles show in blue (`#569CD6`)
- Company names show in orange/tan (`#CE9178`)
- Descriptions show in green (`#6A9955`) with `//` prefix
- Duration shows in amber (`#D7BA7D`)
- Cards have monospace font family
- Looks like code but still readable

- [ ] **Step 6: Commit**

```bash
git add components/sections/ExperienceSection.tsx
git commit -m "feat: add VS Code syntax highlighting to experience cards"
```

---

## Task 4: Integration Testing & Polish

- [ ] **Step 1: Run development server and verify all changes**

```bash
npm run dev
# or
yarn dev
```

- [ ] **Step 2: Navigate through sections**

1. **Services Section**: Click through each service dialog, hover over buttons
2. **Projects Section**: Hover over project images, verify pulse animation
3. **Experience Section**: Check VS Code color scheme

- [ ] **Step 3: Check responsive design**

- Test on mobile viewport (320px - 768px)
- Test on tablet (768px - 1024px)
- Test on desktop (1024px+)

- [ ] **Step 4: Performance check**

Open browser DevTools > Performance:
- Verify no layout thrashing
- Check animation frames are smooth (60fps)
- Pulse animation should use GPU compositing

- [ ] **Step 5: Commit final changes**

```bash
git add -A
git commit -m "feat: complete enhanced card styling implementation"
```

---

## Summary Checklist

- [ ] Task 1: Service button hover colors implemented
- [ ] Task 2: Project button pulse animation implemented
- [ ] Task 3: VS Code syntax highlighting on experience cards
- [ ] Task 4: All changes tested and committed

## Rollback Plan

If any issues arise:
1. Git revert individual commits: `git revert <commit-hash>`
2. Or reset to pre-implementation state: `git reset --hard HEAD~<number-of-tasks>`
3. All original code is preserved in git history

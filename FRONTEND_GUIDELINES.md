# Frontend Design System & Guidelines

**Template version:** 1.0 (documentation guide v1.0, 2025-02-05)

## 1. Design Principles

### Core Principles

1. **Clarity**: Every element has a clear purpose
1. **Consistency**: Patterns repeat across the app
1. **Efficiency**: Minimize user effort
1. **Accessibility**: WCAG 2.1 Level AA compliance

-----

## 2. Design Tokens

### Color Palette

#### Primary Colors

```css
--color-primary-50: #eff6ff;
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
--color-primary-300: #93c5fd;
--color-primary-400: #60a5fa;
--color-primary-500: #3b82f6;  /* Main brand color */
--color-primary-600: #2563eb;
--color-primary-700: #1d4ed8;
--color-primary-800: #1e40af;
--color-primary-900: #1e3a8a;
```

#### Neutral Colors

```css
--color-neutral-50: #f9fafb;
--color-neutral-100: #f3f4f6;
--color-neutral-200: #e5e7eb;
--color-neutral-300: #d1d5db;
--color-neutral-400: #9ca3af;
--color-neutral-500: #6b7280;
--color-neutral-600: #4b5563;
--color-neutral-700: #374151;
--color-neutral-800: #1f2937;
--color-neutral-900: #111827;
```

#### Semantic Colors

```css
--color-success: #10b981;  /* Green */
--color-warning: #f59e0b;  /* Amber */
--color-error: #ef4444;    /* Red */
--color-info: #3b82f6;     /* Blue */
```

#### Usage Rules

- **Primary**: CTAs, links, focus states
- **Neutral**: Text, backgrounds, borders
- **Success**: Confirmations, completed states
- **Warning**: Cautions, non-critical errors
- **Error**: Errors, destructive actions
- **Info**: Helpful tips, informational alerts

-----

### Typography

#### Font Families

```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;
```

#### Font Sizes

```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

#### Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

#### Line Heights

```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

#### Usage Guidelines

- **Headings**: font-semibold or font-bold
- **Body text**: font-normal, –leading-normal
- **UI labels**: font-medium, –text-sm
- **Code**: font-mono, –text-sm

-----

### Spacing Scale

```css
--spacing-0: 0;
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
```

#### Usage Rules

- **Component padding**: spacing-4 (default)
- **Section spacing**: spacing-8 to spacing-12
- **Layout margins**: spacing-6 to spacing-16
- **Inline spacing**: spacing-2 to spacing-4

-----

### Border Radius

```css
--radius-none: 0;
--radius-sm: 0.125rem;  /* 2px */
--radius-base: 0.25rem; /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-full: 9999px;  /* Fully rounded */
```

-----

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

-----

## 3. Layout System

### Grid System

- **Container**: max-width: 1280px, padding: 0 spacing-4
- **Columns**: 12-column grid
- **Gutters**: spacing-6 (24px)

### Responsive Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Wide Desktop */
```

### Layout Patterns

#### Centered Content

```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {content}
</div>
```

#### Two-Column Layout

```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <div>{leftColumn}</div>
  <div>{rightColumn}</div>
</div>
```

-----

## 4. Component Library

### Button

#### Variants

**Primary Button**

```jsx
<button className="
  px-4 py-2 
  bg-primary-500 hover:bg-primary-600 
  text-white font-medium
  rounded-lg
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Primary Action
</button>
```

**Secondary Button**

```jsx
<button className="
  px-4 py-2
  bg-neutral-100 hover:bg-neutral-200
  text-neutral-900 font-medium
  rounded-lg
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2
">
  Secondary Action
</button>
```

**Danger Button**

```jsx
<button className="
  px-4 py-2
  bg-error hover:bg-red-600
  text-white font-medium
  rounded-lg
  transition-colors duration-200
">
  Delete
</button>
```

#### Sizes

- **Small**: px-3 py-1.5 text-sm
- **Medium**: px-4 py-2 text-base (default)
- **Large**: px-6 py-3 text-lg

#### Usage Rules

- Use primary for main actions (one per screen)
- Use secondary for supporting actions
- Use danger for destructive actions (with confirmation)
- Always include focus states for accessibility
- Disable while loading (show spinner)

-----

### Input Fields

**Text Input**

```jsx
<div className="space-y-1">
  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    className="
      block w-full
      px-3 py-2
      border border-neutral-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      placeholder:text-neutral-400
      disabled:bg-neutral-50 disabled:text-neutral-500
    "
    placeholder="you@example.com"
  />
  <p className="text-xs text-neutral-500">We'll never share your email.</p>
</div>
```

**Error State**

```jsx
<input
  className="
    border-error focus:ring-error
  "
  aria-invalid="true"
  aria-describedby="email-error"
/>
<p id="email-error" className="text-sm text-error mt-1">
  Please enter a valid email address
</p>
```

-----

### Cards

```jsx
<div className="
  bg-white
  border border-neutral-200
  rounded-lg
  shadow-sm
  p-6
  hover:shadow-md
  transition-shadow duration-200
">
  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
    Card Title
  </h3>
  <p className="text-neutral-600">
    Card content goes here
  </p>
</div>
```

-----

### Modals

```jsx
<div className="fixed inset-0 z-50 flex items-center justify-center">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" onClick={onClose} />
  
  {/* Modal */}
  <div className="
    relative
    bg-white
    rounded-lg
    shadow-xl
    p-6
    max-w-md w-full
    mx-4
  ">
    <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
    <p className="text-neutral-600 mb-6">Modal content</p>
    
    <div className="flex gap-3 justify-end">
      <button className="secondary-button">Cancel</button>
      <button className="primary-button">Confirm</button>
    </div>
  </div>
</div>
```

-----

## 5. Accessibility Guidelines

### WCAG 2.1 Level AA Requirements

#### Color Contrast

- **Normal text**: 4.5:1 minimum
- **Large text** (18pt+): 3:1 minimum
- **UI components**: 3:1 minimum

#### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus indicators must be visible (2px outline)
- Tab order must be logical

#### Screen Readers

- Use semantic HTML (button, nav, main, etc.)
- Provide alt text for images
- Use aria-labels for icon buttons
- Announce dynamic content changes

#### Forms

- Associate labels with inputs (htmlFor/id)
- Provide helpful error messages
- Mark required fields clearly
- Group related fields (fieldset/legend)

-----

## 6. Animation Guidelines

### Transitions

```css
/* Default transition */
transition: all 200ms ease-in-out;

/* Color transitions */
transition-property: background-color, border-color, color;
transition-duration: 200ms;

/* Transform transitions */
transition: transform 300ms ease-out;
```

### Usage Rules

- Keep animations under 300ms
- Use easing: ease-in-out for most animations
- Respect prefers-reduced-motion
- Animate only transform and opacity for performance

-----

## 7. Icon System

### Icon Library

- **Library**: Lucide React
- **Size**: 16px (sm), 20px (base), 24px (lg)
- **Stroke Width**: 2px (default)

### Usage

```jsx
import { Mail, Send } from 'lucide-react';

<Mail className="w-5 h-5" />
<Send className="w-5 h-5 text-primary-500" />
```

-----

## 8. State Indicators

### Loading States

```jsx
{/* Skeleton */}
<div className="animate-pulse">
  <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
</div>

{/* Spinner */}
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
```

### Empty States

```jsx
<div className="text-center py-12">
  <Icon className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
  <h3 className="text-lg font-medium text-neutral-900 mb-1">
    No items yet
  </h3>
  <p className="text-neutral-500 mb-4">
    Get started by creating your first item
  </p>
  <button className="primary-button">
    Create Item
  </button>
</div>
```

### Error States

```jsx
<div className="bg-error/10 border border-error text-error px-4 py-3 rounded-md">
  <p className="font-medium">Error</p>
  <p className="text-sm">Something went wrong. Please try again.</p>
</div>
```

-----

## 9. Responsive Design

### Mobile-First Approach

```css
/* Base styles for mobile */
.component {
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    width: 50%;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    width: 33.333%;
  }
}
```

### Touch Targets

- Minimum size: 44x44px
- Add padding to small elements
- Ensure adequate spacing between targets

-----

## 10. Performance Guidelines

### Image Optimization

- Use Next.js Image component
- Provide width/height to prevent layout shift
- Use appropriate image formats (WebP with fallback)
- Lazy load images below fold

### Code Splitting

- Lazy load routes
- Dynamic imports for heavy components
- Defer non-critical JavaScript

-----

## 11. Browser Support

### Supported Browsers

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Progressive Enhancement

- Core functionality works without JavaScript
- Enhanced features for modern browsers
- Graceful degradation for older browsers

# Lookbook Implementation

A mobile-first Instagram Stories-style viewer for fashion e-commerce with product annotations.

## Key Implementation Details

### 1. Smooth Progress Tracking

Used `requestAnimationFrame` for 60fps progress updates instead of intervals.

### 2. Left/Right Tap Navigation

Screen divided into tap zones: left 40% = previous, right 60% = next, middle 20% = no action.

### 3. Swiper Navigation

Vertical Swiper for looks, horizontal tap navigation for previews within each look.

### 4. Percentage-based Annotation Positioning

Annotations use `left: x%` and `top: y%` to work across all screen sizes without recalculation.

### 5. Native HTML5 Video

Used native `<video>` element with `playsInline`, `onTimeUpdate`, and `onEnded` instead of external libraries.

## Running

```bash
npm install
npm run dev
```

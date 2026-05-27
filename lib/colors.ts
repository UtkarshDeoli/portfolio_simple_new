/**
 * Central Color Scheme Configuration
 * 
 * Edit the hex color codes below to change the color scheme across the entire application.
 * All colors are defined using hex codes (#RRGGBB) for easy editing.
 * 
 * The colors are automatically converted to CSS variables and Tailwind classes.
 */

export const colorScheme = {
  // ==========================================
  // PRIMARY BRAND COLORS
  // ==========================================
  // Main accent color used for highlights, links, and interactive elements
  primary: {
    DEFAULT: "#00ADB5",    // Main brand color (cyan/teal)
    light: "#4DD0D7",      // Lighter variant for hover states
    dark: "#008A91",       // Darker variant for active states
    foreground: "#FFFFFF", // Text color on primary background
  },

  // ==========================================
  // BACKGROUND COLORS
  // ==========================================
  background: {
    DEFAULT: "#121212",    // Main background color (dark)
    secondary: "#1A1A1A",  // Secondary background (cards, sections)
    tertiary: "#252525",   // Tertiary background (elevated elements)
    light: "#FFFFFF",      // Light mode background
  },

  // ==========================================
  // TEXT/FOREGROUND COLORS
  // ==========================================
  foreground: {
    DEFAULT: "#FFFFFF",    // Primary text color
    muted: "#9CA3AF",      // Secondary/subdued text (gray-400)
    subtle: "#6B7280",     // Tertiary text (gray-500)
    dark: "#1F2937",       // Dark text for light mode
  },

  // ==========================================
  // STATUS COLORS
  // ==========================================
  status: {
    available: "#4ADE80",  // Green - available/online status
    busy: "#F87171",       // Red - busy/offline status (red-400)
    warning: "#FBBF24",    // Yellow - warning status (amber-400)
    info: "#60A5FA",       // Blue - info status (blue-400)
  },

  // ==========================================
  // BORDER COLORS
  // ==========================================
  border: {
    DEFAULT: "#374151",    // Default border color (gray-700)
    light: "#4B5563",      // Lighter border (gray-600)
    subtle: "#1F2937",     // Subtle border (gray-800)
    accent: "#00ADB5",     // Accent border (matches primary)
  },

  // ==========================================
  // CARD/SURFACE COLORS
  // ==========================================
  card: {
    DEFAULT: "#1A1A1A",    // Card background
    hover: "#252525",      // Card hover state
    border: "#374151",     // Card border
  },

  // ==========================================
  // BUTTON COLORS
  // ==========================================
  button: {
    primary: {
      bg: "#00ADB5",       // Primary button background
      hover: "#008A91",    // Primary button hover
      text: "#FFFFFF",     // Primary button text
    },
    secondary: {
      bg: "#374151",       // Secondary button background (gray-700)
      hover: "#4B5563",    // Secondary button hover (gray-600)
      text: "#FFFFFF",     // Secondary button text
    },
    outline: {
      bg: "transparent",   // Outline button background
      hover: "#1A1A1A",    // Outline button hover
      border: "#374151",   // Outline button border
      text: "#9CA3AF",     // Outline button text
    },
    ghost: {
      bg: "transparent",   // Ghost button background
      hover: "#252525",    // Ghost button hover
      text: "#9CA3AF",     // Ghost button text
    },
  },

  // ==========================================
  // SOCIAL/PLATFORM COLORS
  // ==========================================
  social: {
    github: "#FFFFFF",     // GitHub icon color
    twitter: "#1DA1F2",    // Twitter/X blue
    linkedin: "#0A66C2",   // LinkedIn blue
    email: "#EA4335",      // Email red
  },

  // ==========================================
  // GRADIENT COLORS
  // ==========================================
  gradient: {
    primary: {
      from: "#00ADB5",     // Gradient start
      to: "#008A91",       // Gradient end
    },
    accent: {
      from: "#00ADB5",     // Accent gradient start
      to: "#4DD0D7",       // Accent gradient end
    },
  },

  // ==========================================
  // OVERLAY/BACKDROP COLORS
  // ==========================================
  overlay: {
    DEFAULT: "rgba(0, 0, 0, 0.5)",   // Semi-transparent black
    light: "rgba(0, 0, 0, 0.3)",     // Lighter overlay
    dark: "rgba(0, 0, 0, 0.7)",      // Darker overlay
  },
} as const;

// Type for the color scheme
export type ColorScheme = typeof colorScheme;

/**
 * Helper function to get a color value by path
 * Example: getColor('primary.DEFAULT') => '#00ADB5'
 */
export function getColor(path: string): string {
  const keys = path.split('.');
  let value: unknown = colorScheme;
  
  for (const key of keys) {
    if (typeof value === 'object' && value !== null && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      console.warn(`Color path "${path}" not found`);
      return '#000000';
    }
  }
  
  return typeof value === 'string' ? value : '#000000';
}

/**
 * Convert hex color to RGB values
 * Example: hexToRgb('#00ADB5') => { r: 0, g: 173, b: 181 }
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert hex color to HSL values
 * Example: hexToHsl('#00ADB5') => { h: 183, s: 100, l: 35 }
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Generate CSS variable definitions from the color scheme
 * This can be used to inject colors into :root or .dark
 */
export function generateCssVariables(
  scheme: typeof colorScheme,
  prefix = '--color'
): Record<string, string> {
  const variables: Record<string, string> = {};

  function processObject(obj: unknown, path: string = '') {
    if (typeof obj === 'string') {
      variables[`${prefix}-${path.replace(/\./g, '-')}`] = obj;
    } else if (typeof obj === 'object' && obj !== null) {
      for (const [key, value] of Object.entries(obj)) {
        const newPath = path ? `${path}-${key}` : key;
        processObject(value, newPath);
      }
    }
  }

  processObject(scheme);
  return variables;
}

// Export default color scheme
export default colorScheme;

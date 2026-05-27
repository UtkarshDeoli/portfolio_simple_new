import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ==========================================
        // CENTRAL COLOR SCHEME
        // Edit hex values in lib/colors.ts
        // ==========================================
        
        // Primary Brand Colors
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
          foreground: "var(--color-primary-foreground)",
        },
        
        // Background Colors
        background: {
          DEFAULT: "var(--color-background)",
          secondary: "var(--color-background-secondary)",
          tertiary: "var(--color-background-tertiary)",
          light: "var(--color-background-light)",
        },
        
        // Foreground/Text Colors
        foreground: {
          DEFAULT: "var(--color-foreground)",
          muted: "var(--color-foreground-muted)",
          subtle: "var(--color-foreground-subtle)",
          dark: "var(--color-foreground-dark)",
        },
        
        // Status Colors
        status: {
          available: "var(--color-status-available)",
          busy: "var(--color-status-busy)",
          warning: "var(--color-status-warning)",
          info: "var(--color-status-info)",
        },
        
        // Border Colors
        border: "var(--color-border)",
        "border-light": "var(--color-border-light)",
        "border-subtle": "var(--color-border-subtle)",
        "border-accent": "var(--color-border-accent)",
        
        // Card Colors
        card: {
          DEFAULT: "var(--color-card)",
          hover: "var(--color-card-hover)",
          border: "var(--color-card-border)",
        },
        
        // Button Colors
        button: {
          primary: {
            bg: "var(--color-button-primary-bg)",
            hover: "var(--color-button-primary-hover)",
            text: "var(--color-button-primary-text)",
          },
          secondary: {
            bg: "var(--color-button-secondary-bg)",
            hover: "var(--color-button-secondary-hover)",
            text: "var(--color-button-secondary-text)",
          },
          outline: {
            bg: "var(--color-button-outline-bg)",
            hover: "var(--color-button-outline-hover)",
            border: "var(--color-button-outline-border)",
            text: "var(--color-button-outline-text)",
          },
          ghost: {
            bg: "var(--color-button-ghost-bg)",
            hover: "var(--color-button-ghost-hover)",
            text: "var(--color-button-ghost-text)",
          },
        },
        
        // Social Colors
        social: {
          github: "var(--color-social-github)",
          twitter: "var(--color-social-twitter)",
          linkedin: "var(--color-social-linkedin)",
          email: "var(--color-social-email)",
        },
        
        // Gradient Colors
        gradient: {
          primary: {
            from: "var(--color-gradient-primary-from)",
            to: "var(--color-gradient-primary-to)",
          },
          accent: {
            from: "var(--color-gradient-accent-from)",
            to: "var(--color-gradient-accent-to)",
          },
        },
        
        // Shadcn/UI compatible colors (HSL format)
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

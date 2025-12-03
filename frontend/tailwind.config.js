/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#FF6B6B",
          "secondary": "#FFA500",
          "accent": "#10B981",
          "neutral": "#2D3748",
          "base-100": "#F7FAFC",
          "base-200": "#FFFFFF",
          "base-300": "#E2E8F0",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        dark: {
          "primary": "#FF8787",
          "secondary": "#FFB84D",
          "accent": "#34D399",
          "neutral": "#E2E8F0",
          "base-100": "#0F1419",
          "base-200": "#1A202C",
          "base-300": "#2D3748",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Sharper corners across the whole site — the editorial look is square.
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '2px',
      md: '3px',
      lg: '3px',
      xl: '4px',
      '2xl': '6px',
      '3xl': '8px',
      full: '9999px',
    },
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        paper: { DEFAULT: '#F5F3EE', 2: '#ECE9E1' },
        ink: { DEFAULT: '#0F0F0D', soft: '#262622' },
        rule: '#D6D3C9',
        accent: { DEFAULT: '#E5471B', dark: '#C23A12', soft: '#FBE4DA' },
        // Warm neutrals replace Tailwind's cool grays so every existing
        // gray-* class picks up the new palette.
        gray: {
          50: '#F5F3EE',
          100: '#ECE9E1',
          200: '#DEDBD1',
          300: '#C9C6BA',
          400: '#98958A',
          500: '#6E6B62',
          600: '#52504A',
          700: '#3A3934',
          800: '#262622',
          900: '#141412',
        },
        // `brand` is retained so leftover classes resolve coherently:
        // 900/800 = ink (buttons, dark blocks), 700/600/500 = accent, lighter = paper tones.
        brand: {
          50: '#F5F3EE',
          100: '#ECE9E1',
          200: '#D6D3C9',
          300: '#B8B4A7',
          400: '#F08A63',
          500: '#E5471B',
          600: '#E5471B',
          700: '#C23A12',
          800: '#262622',
          900: '#0F0F0D',
        },
      },
      boxShadow: {
        sm: 'none',
        offset: '5px 5px 0 0 #0F0F0D',
        'offset-accent': '5px 5px 0 0 #E5471B',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'fade-in': 'fade-in 0.9s ease both',
      },
    },
  },
  plugins: [],
}

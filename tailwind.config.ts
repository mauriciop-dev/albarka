import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2C59',
          dark: '#0A1F42',
          light: '#1A3D6E',
        },
        secondary: {
          DEFAULT: '#00A88F',
          dark: '#008772',
          light: '#14C9A8',
        },
        accent: {
          DEFAULT: '#00B4D8',
          dark: '#0090AA',
          light: '#33C5E0',
        },
        text: {
          DEFAULT: '#2B2D42',
          light: '#4A4D62',
          muted: '#6B6E85',
        },
        background: {
          DEFAULT: '#F4F6F8',
          white: '#FFFFFF',
          dark: '#EDF0F4',
        },
        border: {
          DEFAULT: '#DCE0E6',
          focus: '#00A88F',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.25' }],
        'heading-xl': ['1.75rem', { lineHeight: '1.3' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.35' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(15, 44, 89, 0.08), 0 2px 8px -2px rgba(15, 44, 89, 0.04)',
        'card-hover': '0 12px 40px -8px rgba(15, 44, 89, 0.12), 0 4px 16px -4px rgba(15, 44, 89, 0.06)',
        'btn-primary': '0 4px 16px -4px rgba(15, 44, 89, 0.3), 0 2px 8px -2px rgba(15, 44, 89, 0.15)',
        'btn-secondary': '0 4px 16px -4px rgba(0, 168, 143, 0.3), 0 2px 8px -2px rgba(0, 168, 143, 0.15)',
      },
      borderRadius: {
        'card': '1rem',
        'btn': '0.625rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
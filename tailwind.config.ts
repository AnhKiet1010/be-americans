import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '768px',
          lg: '992px',
          xl: '1250px',
          '2xl': '1250px',
        },
      },
      colors: {
        highlight: 'hsl(21, 45%, 52%)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground:
            'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground:
            'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground:
            'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground:
            'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground:
            'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground:
            'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground:
            'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height:
              'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height:
              'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        zoomAndMove: {
          '0%, 100%': {
            transform: 'scale(1) translate(0, 0)',
          },
          '25%': {
            transform:
              'scale(1.2) translate(5px, -5px)',
          },
          '50%': {
            transform:
              'scale(1.2) translate(-5px, 5px)',
          },
          '75%': {
            transform:
              'scale(1.2) translate(5px, 5px)',
          },
        },
      },
      animation: {
        'accordion-down':
          'accordion-down 0.2s ease-out',
        'accordion-up':
          'accordion-up 0.2s ease-out',
        zoomAndMove:
          'zoomAndMove 20s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

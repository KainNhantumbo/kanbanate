/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'sans-serif': ['Zilla_Slab', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      error: 'rgb(var(--color-error) / <alpha-value>)',
      font: 'rgb(var(--color-font) / <alpha-value>)',
      'font-dimmed': 'rgb(var(--color-font-dimmed) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
      'primary-shade': 'rgb(var(--color-primary-shade) / <alpha-value>)',
      'secondary-shade': 'rgb(var(--color-secondary-shade) / <alpha-value>)',
      'background-shade': 'rgb(var(--color-background-shade) / <alpha-value>)',
      'foreground-shade': 'rgb(var(--color-foreground-shade) / <alpha-value>)'
    }
  },
  plugins: []
};

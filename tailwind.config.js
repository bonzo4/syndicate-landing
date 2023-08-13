/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      'short': { 'raw': '(max-height: 800px)' },
    },
    extend: {
      colors: {
        cardWhite: 'var(--neutral-colors-color-200, #FAFAFF)',
        gold: 'var(--accent-colors-gold, #FFD700)',
        black: '#101010',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4B0082', // Indigo (Magician primary)
          light: '#6C2EA7',
          dark: '#350060',
        },
        secondary: {
          DEFAULT: '#00BFFF', // Deep Sky Blue (Magician secondary)
          light: '#4DD1FF',
          dark: '#0095CC',
        },
        accent: {
          DEFAULT: '#FFD700', // Gold (Magician accent)
          light: '#FFE347',
          dark: '#CCA900',
        },
        neutral: {
          dark: '#1C1C1C',
          medium: '#707070',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-wave': 'linear-gradient(90deg, var(--tw-gradient-stops))',
        'hero-pattern': 'url("/images/hero-bg.svg")',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(75, 0, 130, 0.5)',
        'glow-accent': '0 0 15px rgba(255, 215, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
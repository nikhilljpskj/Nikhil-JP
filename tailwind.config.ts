import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          start: '#4f46e5', // indigo-600
          mid: '#2563eb',   // blue-600
          end: '#0ea5e9'    // sky-500
        }
      },
      boxShadow: {
        'xl/10': '0 10px 30px rgba(2,6,23,0.06)'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      backgroundImage: {
        'white-soft': 'linear-gradient(to bottom right, #ffffff, #f8fafc, #ffffff)'
      }
    }
  },
  plugins: []
} satisfies Config;

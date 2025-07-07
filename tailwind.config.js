/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
    center: true,
    padding: '1rem',
  },
    extend: {
      colors: {
        'primary': '#007bff',
        'secondary': '#6c757d',
        'orange': {
          500: '#f97316',
          600: '#ea580c',
        },
        'gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      maxWidth: {
        'container-lg': '1200px',
      },
    },
  },
  plugins: [],
}

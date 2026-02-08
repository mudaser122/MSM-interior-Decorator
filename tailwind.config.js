/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mh: {
                    primary: '#D97706', // Amber-600 (Gold/Warmth)
                    secondary: '#0F172A', // Slate-900 (Deep Professional Dark)
                    accent: '#F59E0B', // Amber-500 (Brighter Accent)
                    light: '#F8FAFC', // Slate-50 (Clean Background)
                    text: '#334155', // Slate-700 (Readability)
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}

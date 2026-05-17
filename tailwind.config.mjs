/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta cálida y humana
        cream: {
          50:  '#FDFBF7',
          100: '#FAF5EC',
          200: '#F2E8D5',
        },
        clay: {
          300: '#E8C9A8',
          400: '#D9A47E',
          500: '#C28156',
          600: '#9E5F3A',
        },
        terracotta: {
          400: '#E07A5F',
          500: '#C9624B',
          600: '#A24A37',
        },
        sage: {
          300: '#BBC7A6',
          400: '#94A57F',
          500: '#6F8460',
          600: '#52684A',
        },
        ink: {
          700: '#3D3328',
          800: '#2A231C',
          900: '#1A1410',
        },
        sky: {
          soft: '#D8E5E8',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FAF5EC 0%, #F2E8D5 60%, #E8C9A8 100%)',
        'dawn': 'linear-gradient(180deg, rgba(26,20,16,0.0) 0%, rgba(26,20,16,0.35) 55%, rgba(26,20,16,0.78) 100%)',
      },
      boxShadow: {
        'soft': '0 20px 60px -25px rgba(60, 40, 25, 0.25)',
        'glow': '0 0 0 1px rgba(255,255,255,0.6), 0 30px 60px -20px rgba(60,40,25,0.35)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'blob':  'blob 14s ease-in-out infinite',
        'fade-up': 'fadeUp 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%,100%': { borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' },
          '50%':     { borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' },
        },
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

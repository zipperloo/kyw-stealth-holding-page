/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    /**
     * BREAKPOINTS (Tailwind defaults — documented here for clarity)
     * Mobile-first: bare classes = mobile, then layer up.
     *
     *   sm  → 640px   (large phones, landscape)
     *   md  → 768px   (tablets / iPad portrait)
     *   lg  → 1024px  (iPad landscape / small laptops)
     *   xl  → 1280px  (desktops)
     *   2xl → 1536px  (large desktops)
     *
     * Usage:  class="text-base md:text-lg lg:text-xl"
     */
    extend: {
      colors: {
        'kyw-primary': '#604de4',
        'kyw-primary-hover': '#7c6ef0',
        'kyw-blue': '#4c6ef5',
        'kyw-purple-dark': '#4c3a9b',
        'kyw-bg': '#0f1117',
        'kyw-surface': '#1a1d29',
        'kyw-surface-hover': '#23263a',
        'kyw-border': '#2d3142',
        'kyw-text': '#e4e6eb',
        'kyw-text-secondary': '#9ca3af',
        'kyw-text-muted': '#6b7280',
        'kyw-success': '#10b981',
        'kyw-error': '#ef4444',
        'kyw-warning': '#f59e0b',
        'kyw-info': '#604de4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
      lineHeight: {
        heading: '1.2',
        body: '1.5',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',     /* 16px  — mobile */
          sm: '1.5rem',        /* 24px  — large phones */
          md: '2rem',          /* 32px  — tablets */
          lg: '4rem',          /* 64px  — laptops */
          xl: '5rem',          /* 80px  — desktops */
          '2xl': '6rem',       /* 96px  — large desktops */
        },
      },
      maxWidth: {
        'content': '72rem',    /* 1152px — max content width */
        'narrow': '40rem',     /* 640px  — narrow content (text blocks) */
        'wide': '90rem',       /* 1440px — wide content (dashboards) */
      },
      fontSize: {
        /* Responsive type scale — use with breakpoint prefixes */
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-1': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'heading-2': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-3': ['1.375rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'card': '16px',
        'button': '10px',
      },
    },
  },
  plugins: [],
};

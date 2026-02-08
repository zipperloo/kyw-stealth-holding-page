/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/**/*.js',
  ],
  theme: {
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
        'heading': '1.2',
        'body': '1.5',
      },
    },
  },
  plugins: [],
};

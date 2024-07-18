module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['offbit', 'ui-sans-serif'],
      sans: [
        'neue-haas-unica',
        'IBM Plex Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: [
        'input-mono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        // monospace,
      ],
    },
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
      maxWidth: {
        '8xl': '1800px',
      },
    },
  },
  plugins: [],
};

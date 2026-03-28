export const theme = {
  colors: {
    primary: '#6C5CE7',
    primaryLight: '#A29BFE',
    secondary: '#00CEC9',
    accent: '#FD79A8',
    success: '#00B894',
    warning: '#FDCB6E',
    danger: '#E17055',

    bg: '#0F0E17',
    bgSecondary: '#1A1A2E',
    bgCard: '#16213E',

    text: '#FFFFFE',
    textSecondary: '#A7A9BE',
    textMuted: '#5F6C7B',

    border: 'rgba(255, 255, 255, 0.08)',
    borderLight: 'rgba(255, 255, 255, 0.15)',
  },

  fonts: {
    body: "'Be Vietnam Pro', -apple-system, sans-serif",
    heading: "'Be Vietnam Pro', -apple-system, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },

  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },

  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.15)',
    md: '0 4px 20px rgba(0, 0, 0, 0.2)',
    lg: '0 8px 40px rgba(0, 0, 0, 0.3)',
    glow: (color) => `0 4px 20px ${color}40`,
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
  },
}

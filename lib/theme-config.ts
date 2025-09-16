export const THEME_CONFIG = {
  transitionDuration: '200ms',
  
  storageKey: 'theme',
  
  themes: ['light', 'dark', 'system'] as const,
  
  performance: {
    systemChangeDebounce: 100,
    cacheVariables: true,
  },
  
  accessibility: {
    highContrast: false,
    reduceMotion: false,
  },
} as const;

export type ThemeConfig = typeof THEME_CONFIG;

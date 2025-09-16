import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // controle manual via JavaScript
  theme: {
    extend: {
        colors: {
            // Cores principais
            primary: 'var(--primary)',
            secondary: 'var(--secondary)',
            tertiary: 'var(--tertiary)',
            quaternary: 'var(--quaternary)',
            quinary: 'var(--quinary)',
            
            // Cores de fundo
            background: 'var(--background)',
            surface: 'var(--surface)',
            'surface-variant': 'var(--surfaceVariant)',
            
            // Cores de texto
            'on-background': 'var(--onBackground)',
            'on-surface': 'var(--onSurface)',
            'on-primary': 'var(--onPrimary)',
            'on-secondary': 'var(--onSecondary)',
            
            // Cores de borda
            outline: 'var(--outline)',
            'outline-variant': 'var(--outlineVariant)',
            
            // Cores de status
            success: 'var(--success)',
            warning: 'var(--warning)',
            error: 'var(--error)',
            info: 'var(--info)',
        },
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            serif: ['Georgia', 'serif'],
            mono: ['Fira Code', 'monospace'],
        },
        fontSize: {
            xs: 'var(--xs)',
            sm: 'var(--sm)',
            base: 'var(--base)',
            lg: 'var(--lg)',
            xl: 'var(--xl)',
            '2xl': 'var(--2xl)',
            '3xl': 'var(--3xl)',
            '4xl': 'var(--4xl)',
        },
        fontWeight: {
            light: 'var(--light)',
            normal: 'var(--normal)',
            medium: 'var(--medium)',
            semibold: 'var(--semibold)',
            bold: 'var(--bold)',
        },
        lineHeight: {
            tight: 'var(--tight)',
            normal: 'var(--normal)',
            relaxed: 'var(--relaxed)',
        },
        spacing: {
            xs: 'var(--xs)',
            sm: 'var(--sm)',
            md: 'var(--md)',
            lg: 'var(--lg)',
            xl: 'var(--xl)',
            '2xl': 'var(--2xl)',
            '3xl': 'var(--3xl)',
        },
        boxShadow: {
            sm: 'var(--sm)',
            base: 'var(--base)',
            md: 'var(--md)',
            lg: 'var(--lg)',
            xl: 'var(--xl)',
        },
        borderRadius: {
            none: 'var(--none)',
            sm: 'var(--sm)',
            base: 'var(--base)',
            md: 'var(--md)',
            lg: 'var(--lg)',
            xl: 'var(--xl)',
            '2xl': 'var(--2xl)',
            full: 'var(--full)',
        },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

export default config;
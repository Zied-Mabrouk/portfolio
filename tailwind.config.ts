import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent1: 'var(--accent1)',
        accent2: 'var(--accent2)',
        accent3: 'var(--accent3)',
        accent4: 'var(--accent4)',
      },
    },
  },
  plugins: [],
};
export default config;
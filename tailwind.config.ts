import type { Config } from 'tailwindcss'
import { colors, typography, spacing, borderRadius } from './src/styles/design-system'
import forms from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: typography.fonts,
      fontSize: typography.sizes,
      fontWeight: typography.weights,
      spacing,
      borderRadius,
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [forms, typographyPlugin, aspectRatio],
}

export default config

import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    colors: {
      primary: {
        50: '#f5f2ef',
        100: '#e8e1d9',
        200: '#d4c4b0',
        300: '#c9b8a3',
        400: '#b8a894',
        500: '#a89885',
        600: '#8a7a68',
        700: '#6d5f51',
        800: '#4f453a',
        900: '#322b23',
      },
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'black',
          },
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components,
  },
  baseTheme,
)

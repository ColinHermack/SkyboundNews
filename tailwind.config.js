import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              DEFAULT: "#0284c7",
            }
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              DEFAULT: "#0284c7",
            }
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ]
};
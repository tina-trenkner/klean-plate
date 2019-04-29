import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"


lincolnTheme.overrideThemeStyles = () => {
    googleFonts: [
      {
        name: 'Montserrat',
        styles: [
          '700',
         ],
      },
    ],
  

const typography = new Typography(lincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

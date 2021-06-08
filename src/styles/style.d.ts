import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary?: string
      background: string
      textCard: string
      backgroundCard: string
    }
    shadow: string
  }
}

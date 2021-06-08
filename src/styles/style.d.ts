import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary?: string
      background: string
      textCard: string
      backgroundCard: string
      priceCard: string
      sectionText: string
      backgroundSearchBar: string
      searchBarColor: string
      formText: string
    }
    shadow: string
  }
}

import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import light from '@styles/themes/light'
import GlobalStyle from '@styles/global'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

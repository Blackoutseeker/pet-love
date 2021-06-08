import { Provider, useSelector } from 'react-redux'
import store from '@store/index'
import { ThemeProvider } from 'styled-components'
import light from '@styles/themes/light'
import dark from '@styles/themes/dark'
import GlobalStyle from '@styles/global'

const StyledInvolve = ({ Component, pageProps }) => {
  const theme = useSelector(state => state.theme)

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <StyledInvolve Component={Component} pageProps={pageProps} />
    </Provider>
  )
}

export default MyApp

import { FC, memo } from 'react'
import Head from 'next/head'
import MainContainer from '@components/mainContainer'
import Header from '@components/header'
import Form from '@components/login/form'

const Login: FC = () => {
  return (
    <MainContainer>
      <Head>
        <title>Login - Pet Love</title>
        <meta
          name="description"
          content="Pet Love - Logue com sua conta! Não possui uma conta? Crie uma!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Form />
    </MainContainer>
  )
}

export default memo(Login)

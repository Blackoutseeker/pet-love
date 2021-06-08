import { FC, memo } from 'react'
import { GetStaticProps } from 'next'
import { ICard } from '@components/homePage/card/index'
import mocks from '@database/mocks'
import Head from 'next/head'
import MainContainer from '@components/mainContainer'
import Header from '@components/header'
import Search from '@components/homePage/search'
import Section from '@components/homePage/section'

interface IProps {
  cards: ICard[]
}

const Home: FC<IProps> = props => {
  const { cards } = props

  return (
    <MainContainer>
      <Head>
        <title>Pet Love</title>
        <meta
          name="description"
          content="Pet Love - Temos brinquedos, rações, coleiras, acessórios, 
          bolsas de transporte e muito mais para seu pet!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <Section sectionTitle={'Brinquedos'} cards={cards} />
    </MainContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cards: ICard[] = mocks

  return {
    props: {
      cards: cards
    },
    revalidate: 20
  }
}

export default memo(Home)

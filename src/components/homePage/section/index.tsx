import { FC, memo } from 'react'
import Card, { ICard } from '@components/homePage/card'
import {
  SectionContainer,
  SectionHeaderContainer,
  SectionCardsContainer,
  SectionTitleContent,
  SectionTitleText
} from './style'

interface IProps {
  sectionTitle: string
  cards: ICard[]
}

const Section: FC<IProps> = props => {
  const { sectionTitle, cards } = props

  return (
    <SectionContainer>
      <SectionHeaderContainer>
        <SectionTitleContent>
          <SectionTitleText>{sectionTitle}</SectionTitleText>
        </SectionTitleContent>
      </SectionHeaderContainer>
      <SectionCardsContainer>
        {cards.map((card, index) => (
          <Card
            key={index.toString()}
            imageUrl={card.imageUrl}
            productName={card.productName}
            productPrice={card.productPrice}
          />
        ))}
      </SectionCardsContainer>
    </SectionContainer>
  )
}

export default memo(Section)

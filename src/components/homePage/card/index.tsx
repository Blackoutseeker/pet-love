import { FC, memo } from 'react'
import Image from 'next/image'
import {
  CardContainer,
  ImageContent,
  InfoContainer,
  ProductNameText,
  ProductPriceText,
  BuyButton,
  BuyText
} from './style'

export interface ICard {
  productName: string
  productPrice: string
  imageUrl: string
}

const Card: FC<ICard> = props => {
  const { imageUrl, productName, productPrice } = props

  return (
    <CardContainer>
      <ImageContent>
        <Image src={imageUrl} alt={productName} width={100} height={100} />
      </ImageContent>
      <InfoContainer>
        <ProductNameText>{productName}</ProductNameText>
        <ProductPriceText>{productPrice}</ProductPriceText>
        <BuyButton>
          <BuyText>Comprar</BuyText>
        </BuyButton>
      </InfoContainer>
    </CardContainer>
  )
}

export default memo(Card)

import { FC, memo } from 'react'
import Image from 'next/image'
import { HeaderContainer, CornerButton, TitleContent, TitleText } from './style'
import BarsIcon from '@assets/icons/bars.svg'
import CartIcon from '@assets/icons/shopping-cart.svg'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <CornerButton>
        <Image src={BarsIcon} alt={'Menu Lateral'} width={25} height={25} />
      </CornerButton>
      <TitleContent>
        <TitleText>Pet Love</TitleText>
      </TitleContent>
      <CornerButton>
        <Image src={CartIcon} alt={'Carrinho'} width={25} height={25} />
      </CornerButton>
    </HeaderContainer>
  )
}

export default memo(Header)

import { FC, useState, useCallback, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, CornerButton, TitleContent, TitleText } from './style'
import Drawer from './drawer'
import BarsIcon from '@assets/icons/bars.svg'
import CartIcon from '@assets/icons/shopping-cart.svg'

const Header: FC = () => {
  const [drawerValue, setDrawerValue] = useState<boolean>(false)

  const showDrawer = useCallback(() => {
    setDrawerValue(true)
  }, [])

  return (
    <>
      <HeaderContainer>
        <CornerButton onClick={showDrawer}>
          <Image src={BarsIcon} alt={'Menu Lateral'} width={25} height={25} />
        </CornerButton>
        <TitleContent>
          <Link href={'/'}>
            <TitleText>Pet Love</TitleText>
          </Link>
        </TitleContent>
        <CornerButton>
          <Image src={CartIcon} alt={'Carrinho'} width={25} height={25} />
        </CornerButton>
      </HeaderContainer>
      <Drawer drawerValue={drawerValue} setDrawerValue={setDrawerValue} />
    </>
  )
}

export default memo(Header)

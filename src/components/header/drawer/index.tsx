import { FC, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { IThemeAction } from '@store/reducers/theme'
import OutsideClickHandler from 'react-outside-click-handler'
import {
  DrawerHolder,
  DrawerContainer,
  DrawerHeaderContainer,
  CloseButton,
  SeparatorContent,
  SeparatorLeftLine,
  SeparatorText,
  SeparatorRightLine,
  ItemContent,
  ItemText
} from './styled'
import TimesIcon from '@assets/icons/times.svg'
import MoonIcon from '@assets/icons/moon.svg'
import SignInIcon from '@assets/icons/sign-in-alt.svg'
import ChevronRightIcon from '@assets/icons/chevron-right.svg'

interface IProps {
  drawerValue: boolean
  setDrawerValue: (value: boolean) => void
}

const Drawer: FC<IProps> = props => {
  const { drawerValue, setDrawerValue } = props
  const dispatch = useDispatch()

  const itens = [
    'Rações',
    'Brinquedos',
    'Higiene e Saúde',
    'Coleiras',
    'Acessórios',
    'Bolsas de Transp.'
  ]

  const dismissDrawer = useCallback(() => {
    setDrawerValue(false)
  }, [setDrawerValue])

  const changeTheme = useCallback(() => {
    dispatch<IThemeAction>({ type: 'CHANGE_THEME' })
  }, [dispatch])

  if (drawerValue) {
    return (
      <DrawerHolder>
        <OutsideClickHandler
          display={'contents'}
          onOutsideClick={dismissDrawer}
        >
          <DrawerContainer>
            <DrawerHeaderContainer>
              <CloseButton onClick={dismissDrawer}>
                <Image
                  src={TimesIcon}
                  alt={'Fechar Menu Lateral'}
                  width={25}
                  height={25}
                />
              </CloseButton>
            </DrawerHeaderContainer>
            <SeparatorContent>
              <SeparatorLeftLine />
              <SeparatorText>Preferências</SeparatorText>
              <SeparatorRightLine />
            </SeparatorContent>
            <ItemContent onClick={changeTheme}>
              <ItemText>Tema</ItemText>
              <Image
                src={MoonIcon}
                alt={'Tema Escuro'}
                width={25}
                height={25}
              />
            </ItemContent>
            <Link href={'/login'}>
              <ItemContent>
                <ItemText>Logar</ItemText>
                <Image src={SignInIcon} alt={'Logar'} width={25} height={25} />
              </ItemContent>
            </Link>
            <SeparatorContent>
              <SeparatorLeftLine />
              <SeparatorText>Produtos</SeparatorText>
              <SeparatorRightLine />
            </SeparatorContent>
            {itens.map((item, index) => (
              <ItemContent key={index.toString()}>
                <ItemText>{item}</ItemText>
                <Image
                  src={ChevronRightIcon}
                  alt={'Ir'}
                  width={20}
                  height={20}
                />
              </ItemContent>
            ))}
          </DrawerContainer>
        </OutsideClickHandler>
      </DrawerHolder>
    )
  }
  return null
}

export default Drawer

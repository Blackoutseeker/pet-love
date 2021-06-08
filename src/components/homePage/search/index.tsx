import { FC, memo } from 'react'
import Image from 'next/image'
import { SearchContainer, SearchInput, SearchButton } from './style'
import SearchIcon from '@assets/icons/search.svg'

const Search: FC = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder={'O que você precisa?'} />
      <SearchButton>
        <Image src={SearchIcon} alt={'Pesquisar'} width={20} height={20} />
      </SearchButton>
    </SearchContainer>
  )
}

export default memo(Search)

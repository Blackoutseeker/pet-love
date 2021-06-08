import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`

export const SectionHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export const SectionTitleContent = styled.div`
  padding: 10px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
`

export const SectionTitleText = styled.span`
  color: ${({ theme }) => theme.colors.sectionText};
  font-size: 20px;
  font-weight: bold;
`

export const SectionCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 680px) {
    justify-content: center;
  }
`

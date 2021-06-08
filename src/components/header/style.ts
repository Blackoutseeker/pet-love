import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 55px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 2;
`

export const CornerButton = styled.button`
  outline: none;
  border: none;
  width: 55px;
  height: 55px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const TitleContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  align-items: center;
  padding: 0 10px;
`

export const TitleText = styled.span`
  color: #fff;
  font-size: 28px;
  cursor: pointer;
`

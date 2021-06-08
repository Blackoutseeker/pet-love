import styled from 'styled-components'

export const DrawerHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`

export const DrawerContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 4;
`

export const DrawerHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const CloseButton = styled.button`
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
`

export const SeparatorContent = styled.div`
  width: 100%;
  height: 10px;
  margin: 15px 0;
  display: flex;
  align-items: center;
`

const SeparatorLine = styled.hr`
  height: 1px;
  border: 1px solid #fff;
`

export const SeparatorLeftLine = styled(SeparatorLine)`
  width: 50px;
`

export const SeparatorText = styled.span`
  color: #fff;
  font-size: 18px;
  margin: 0 10px;
`

export const SeparatorRightLine = styled(SeparatorLine)`
  width: 100%;
`

export const ItemContent = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`

export const ItemText = styled.span`
  color: #fff;
  font-size: 24px;
`

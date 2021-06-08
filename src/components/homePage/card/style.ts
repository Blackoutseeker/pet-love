import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  box-shadow: ${({ theme }) => theme.shadow};
`

export const ImageContent = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 4px;
  overflow: hidden;
`

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
  overflow: hidden;
`

export const ProductNameText = styled.span`
  color: ${({ theme }) => theme.colors.textCard};
  font-size: 16px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const ProductPriceText = styled.span`
  color: ${({ theme }) => theme.colors.priceCard};
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const BuyButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0066ff;
  border-radius: 4px;
  cursor: pointer;
`

export const BuyText = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

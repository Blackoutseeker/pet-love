import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 85%;
  display: flex;
  padding: 0 10px;
  margin: 15px;
  border: 1px solid #777;
  background-color: #fff;
  border-radius: 30px;
`

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  flex: 1;
  background-color: transparent;
  padding: 0 10px;
  margin: 2px 0;
  border-radius: 30px;
  color: #333;
  font-size: 18px;
  ::placeholder {
    color: #777;
  }
`

export const SearchButton = styled.button`
  outline: none;
  border: none;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`

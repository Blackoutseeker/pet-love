import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`

export const FormCardContainer = styled.div`
  min-width: 300px;
  width: 70%;
  max-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  box-shadow: ${({ theme }) => theme.shadow};
`

export const TitleText = styled.span`
  color: ${({ theme }) => theme.colors.formText};
  font-size: 26px;
  margin: 20px 0;
`

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #777;
  margin: 10px 0;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.searchBarColor};
  font-size: 20px;
  ::placeholder {
    color: #777;
  }
`

const SimpleText = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.colors.formText};
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
`

export const ForgotText = styled(SimpleText)`
  text-align: start;
`

export const ConditionalText = styled(SimpleText)`
  font-size: 18px;
  text-align: center;
`

export const Button = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;
`

export const LoginButton = styled(Button)`
  background-color: #0066ff;
`

export const SignUpButton = styled(Button)`
  background-color: #0ec426;
  margin-bottom: 20px;
`

export const ButtonText = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

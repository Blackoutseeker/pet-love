import { FC, memo } from 'react'
import {
  FormWrapper,
  FormCardContainer,
  TitleText,
  Input,
  ForgotText,
  ConditionalText,
  LoginButton,
  SignUpButton,
  ButtonText
} from './style'

const Form: FC = () => {
  return (
    <FormWrapper>
      <FormCardContainer>
        <TitleText>Faça seu login!</TitleText>
        <Input type={'email'} placeholder={'Digite seu e-mail'} />
        <Input type={'password'} placeholder={'Digite sua senha'} />
        <ForgotText>Equeceu sua senha?</ForgotText>
        <LoginButton>
          <ButtonText>Logar</ButtonText>
        </LoginButton>
        <ConditionalText>Ou</ConditionalText>
        <SignUpButton>
          <ButtonText>Criar uma conta</ButtonText>
        </SignUpButton>
      </FormCardContainer>
    </FormWrapper>
  )
}

export default memo(Form)

import React from "react";
import LoginForm from "./LoginForm";
import { LoginBox, Message, StyledLink, StyledRoot, Title } from "./style";

function Login() {
  return (
    <StyledRoot>
      <LoginBox>
        <Title>투두리스트 로그인</Title>
        <LoginForm />
        <Message>아직 회원이 아니신가요?</Message>
        <StyledLink to="/auth/sign_up">회원가입 하러가기</StyledLink>
      </LoginBox>
    </StyledRoot>
  );
}

export default Login;

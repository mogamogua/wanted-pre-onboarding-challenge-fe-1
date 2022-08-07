import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { LoginBox, Message, StyledLink, StyledRoot, Title } from "./style";

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) navigate("/");

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

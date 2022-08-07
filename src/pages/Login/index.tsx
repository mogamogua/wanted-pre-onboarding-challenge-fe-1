import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { LoginBox, Message, StyledLink, StyledRoot, Title } from "./style";
import { ReactComponent as TodoListIcon } from "../../assets/icons/todoListIcon.svg";

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) navigate("/");
  const location = useLocation();
  const isLoginPage = location.pathname === "/auth/login" ? true : false;

  return (
    <StyledRoot>
      <LoginBox>
        <StyledLink to="/">메인으로</StyledLink>
        <Title>{isLoginPage ? "투두리스트 로그인" : "투두리스트 회원가입"}</Title>
        <LoginForm isLoginPage={isLoginPage} />
        <Message>{isLoginPage ? "아직 회원이 아니신가요?" : "이미 회원이신가요?"}</Message>
        {isLoginPage ? (
          <StyledLink to="/auth/sign_up">회원가입 하러가기</StyledLink>
        ) : (
          <StyledLink to="/auth/login">로그인 하러가기</StyledLink>
        )}
      </LoginBox>
    </StyledRoot>
  );
}

export default Login;

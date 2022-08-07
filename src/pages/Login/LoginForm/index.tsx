import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../apis/login.api";
import { signUp } from "../../../apis/signup.api";
import Input from "../../../components/common/Input";
import { Alert, Button } from "./style";

function LoginForm({ isLoginPage }: { isLoginPage: boolean }) {
  const navigate = useNavigate();
  //이메일, 패스워드 인풋관리
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  //유효성 검증 메시지 관리
  const [alert, setAlert] = useState("");
  const [isValid, setIsValid] = useState(false);

  //인풋 value 관리
  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, type } = e.target;
    switch (type) {
      case type:
        setInputs({
          ...inputs,
          [type]: value,
        });
        break;
    }
  };
  //로그인 폼 제출시 호출됨
  const handleSubmitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login(inputs.email, inputs.password);
      if (res === 200) {
        navigate("/");
        setInputs({ email: "", password: "" });
        setAlert("");
        setIsValid(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 400) {
          setAlert("이메일 혹은 비밀번호가 틀렸습니다. 다시 입력해주세요");
        } else if (error?.response?.status === 500) {
          setAlert("서버 측의 오류로 로그인에 실패했습니다.");
        } else if (error?.message === "Network Error") {
          setAlert("네트워크 오류로 로그인에 실패했습니다.");
        } else {
          setAlert(error?.message);
        }
        console.log(error);
      } else {
        setAlert("예기치 못한 오류로 로그인에 실패했습니다.");
        console.log(error);
      }
      setTimeout(() => {
        setAlert("");
      }, 3000);
    }
  };

  //회원가입 폼 제출시 호출됨
  const handleSubmitSignUpForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signUp(inputs.email, inputs.password);
      if (res?.status === 200) {
        setAlert("회원가입 되었습니다.");
        setTimeout(() => {
          mounted.current = false;
          setAlert("");
          setInputs({
            email: "",
            password: "",
          });
          setIsValid(false);
          navigate("/auth/login");
        }, 800);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 400) {
          setAlert(error.message);
        } else if (status === 409) {
          setAlert("이미 존재하는 회원입니다.");
        } else if (status === 500) {
          setAlert("서버측의 오류로 가입에 실패했습니다.");
        } else if (error?.message === "Network Error") {
          setAlert("네트워크 오류로 로그인에 실패했습니다.");
        } else setAlert(error.message);
      } else {
        setAlert("예기치 못한 오류로 가입에 실패했습니다.");
      }
      setTimeout(() => {
        setAlert("");
      }, 3000);
    }
  };

  //입력값에 대한 유효성 검사 함수
  const checkValidation = useCallback(() => {
    const emailCheck = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (inputs.password.length > 8 && emailCheck.test(inputs.email)) {
      setAlert("");
      setIsValid(true);
    } else if (!emailCheck.test(inputs.email)) {
      setAlert("이메일 형식이 틀립니다.");
      setIsValid(false);
    } else if (inputs.password.length < 8) {
      setAlert("비밀번호는 8자 이상입니다.");
      setIsValid(false);
    }
  }, [inputs.email, inputs.password.length]);

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) mounted.current = true;
    else {
      checkValidation();
    }
  }, [checkValidation, inputs]);

  return (
    <form
      onSubmit={isLoginPage ? (e) => handleSubmitLoginForm(e) : (e) => handleSubmitSignUpForm(e)}
    >
      <Input
        type="email"
        placeholder="이메일"
        value={inputs.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)}
      />
      <Input
        type="password"
        placeholder="비밀번호를 8자 이상 입력하세요"
        value={inputs.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)}
      />
      {isValid && <Button>{isLoginPage ? "로그인" : "회원가입"}</Button>}
      <Alert>{alert}</Alert>
    </form>
  );
}

export default LoginForm;

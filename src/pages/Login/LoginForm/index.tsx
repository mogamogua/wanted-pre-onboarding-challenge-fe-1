import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../apis/login.api";
import Input from "../../../components/common/Input";
import { Alert, Button } from "./style";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState("");
  const [isValid, setIsValid] = useState(false);

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

  const navigate = useNavigate();
  const handleSubmitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //api함수 login(inputs.email, inputs,password);
    try {
      const res = await login(inputs.email, inputs.password);
      if (res === 200) {
        navigate("/");
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
    <form onSubmit={(e) => handleSubmitLoginForm(e)}>
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
      {isValid && <Button>로그인</Button>}
      <Alert>{alert}</Alert>
    </form>
  );
}

export default LoginForm;

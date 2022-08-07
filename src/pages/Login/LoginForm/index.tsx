import React, { useState } from "react";
import Input from "../../../components/common/Input";
import { Button } from "./style";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState("");

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

  const handleSubmitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputs.password.length < 8) {
      setAlert("비밀번호는 8자 이상입니다.");
      return;
    }
    //api함수 login(inputs.email, inputs,password);
  };

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
      <Button>로그인</Button>
      <p>{alert}</p>
    </form>
  );
}

export default LoginForm;

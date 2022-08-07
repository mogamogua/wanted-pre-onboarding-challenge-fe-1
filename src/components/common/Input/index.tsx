import React from "react";
import { StyledRoot } from "./style";

interface inputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ placeholder, type, value, onChange }: inputProps) {
  return <StyledRoot type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}

export default Input;

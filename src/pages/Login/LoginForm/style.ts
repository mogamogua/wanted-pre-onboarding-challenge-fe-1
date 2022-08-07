import styled from "styled-components";
import colors from "../../../styles/colors";

export const Button = styled.button`
width: 100%;
padding: 1rem 2rem;
font-family: Pretendard;
font-size: 1.6rem;
font-weight: 400;

background: ${colors.mainPurple};
color: ${colors.white};

border: none;
border-radius: 1rem;
transition: 300ms;

&:hover{
  background: #423e93;
}

&:active{
  background: #413e8a;
}
`;


export const Alert = styled.p`
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${colors.subPurple};
  margin-top: 1rem;
`;

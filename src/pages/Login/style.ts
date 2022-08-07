import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledRoot = styled.div`
  margin-top:1rem;
  height: 100vh;
`;

export const LoginBox = styled.main`
  background: ${colors.white};
  width: 34rem;
  height: 40rem;
  padding: 5rem 3.4rem;
  margin: auto;

  border-radius: 2rem;
  box-shadow: 0 1px 4px rgb(0 0 0 / 3%), 0 3px 19px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: Pretendard;
  font-weight: 800;
  font-size: 2.2rem;
  margin-bottom: 6rem;
  color: ${colors.mainBlack};
`;

export const Message = styled.p`
  font-family: Pretendard;
  font-size: 1.4rem;
  color: ${colors.textGray1};
  margin-top: 3rem;
`;

export const StyledLink = styled(Link)`
  font-family: Pretendard;
  font-size: 1.2rem;
  color: ${colors.textGray2};
  line-height: 2.6rem;

  &:hover {
    text-decoration: underline;
  }
`;
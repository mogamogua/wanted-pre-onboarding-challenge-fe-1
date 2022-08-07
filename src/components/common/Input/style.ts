import styled from "styled-components";
import colors from "../../../styles/colors";

export const StyledRoot = styled.input`
  width: 100%;
  padding: 1rem 1.4rem;
  margin-bottom: 1.6rem;
  font-family: Pretendard;
  font-size: 1.4rem;

  border-radius: 1rem;
  border: 2px solid ${colors.mainBlack};
  outline: none;

  &:focus {
    border: 2px solid ${colors.mainPurple};
  }
`;

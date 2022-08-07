import React from "react";
import { Box } from "../Login/style";
import { StyledRoot } from "./style";

function Main() {
  return (
    <StyledRoot>
      <Box>
        <h1>TODO LIST 목록</h1>
        <ul>
          <li>숨쉬기</li>
        </ul>
      </Box>
      <Box>
        <h1>TODO 상세보기</h1>
        <span>업데이트 날짜 : </span>
        <span>작성 날짜 : </span>
        <h2>제목</h2>
        <p>내용</p>
      </Box>
    </StyledRoot>
  );
}

export default Main;

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodos } from "../../apis/todo.api";
import { todoItemType } from "../../types/todo";
import { Box } from "../Login/style";
import { StyledRoot } from "./style";

function Main() {
  const [todoList, setTodoList] = useState<todoItemType[]>([]);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const getTodoListRender = useCallback(async () => {
    if (token) {
      try {
        const { data } = await getTodos(token);
        setTodoList(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setMessage(error.message);
        } else {
          console.log(error);
          setMessage("예기치 않은 오류로 목록을 불러올 수 없습니다.");
        }
        setTodoList([]);
      }
    } else {
      setMessage("로그인하고 목록을 조회하세요");

      setTimeout(() => {
        navigate("/auth/login");
      }, 1200);
    }
  }, [navigate, token]);

  useEffect(() => {
    getTodoListRender();
  }, [getTodoListRender, token]);

  return (
    <StyledRoot>
      <Box>
        <h1>TODO LIST 목록</h1>
        {!todoList.length && message}
        <ul>
          {todoList.map((item: todoItemType) => (
            <li key={item.id}>{item.title}</li>
          ))}
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

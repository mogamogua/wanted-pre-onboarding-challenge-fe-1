import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import SignUp from "./SignUp";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/sign_up" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;

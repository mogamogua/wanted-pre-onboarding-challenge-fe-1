import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/sign_up" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

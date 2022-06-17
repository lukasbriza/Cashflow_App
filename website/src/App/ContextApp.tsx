import App from "./App";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Routes/Home";
import { Login } from "../Routes/Login";
import { Statistics } from "../Routes/Statistics";
import { LoginContextProvider } from "../Context/LoginContext";

const ContextApp = () => {
  return (
    <LoginContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="home" element={<Statistics />} />
        </Route>
      </Routes>
    </LoginContextProvider>
  );
};

export { ContextApp };

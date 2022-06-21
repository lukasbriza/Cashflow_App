import { Layout } from "./Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../Routes/Home";
import { Login } from "../Routes/Login";
import { Statistics } from "../Routes/Statistics";
import { LoginContextProvider } from "../Context/LoginContext";

const ContextApp = () => {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="statistics" element={<Statistics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
};

export { ContextApp };

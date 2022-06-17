import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const Login = () => {
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginContext?.loged === true) {
      navigate("home");
    }
  }, [loginContext?.loged]);
  return <div>Login</div>;
};

export { Login };

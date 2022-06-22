import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const Login = () => {
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginContext?.loged === true) {
      console.log("logged: ", loginContext?.loged);
      navigate("app/home");
    }
  }, [loginContext?.loged, navigate]);

  return <div>Login route</div>;
};

export { Login };

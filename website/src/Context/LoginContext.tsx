import React, { createContext, SetStateAction, useState } from "react";

interface loginContext {
  loged: boolean;
  fn: {
    setLoged: React.Dispatch<SetStateAction<boolean>>;
  };
}

const LoginContext = createContext<loginContext | null>(null);

const LoginContextProvider = (props: any) => {
  const [loged, setLoged] = useState(true);

  const state: loginContext = {
    loged: loged,
    fn: {
      setLoged: setLoged
    }
  };
  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, LoginContext };

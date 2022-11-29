import { useState } from "react";

import LogInComp from "./LogInComp";
import store from "../store";
import { action } from "../regist/regist";

const LogInContainer = () => {
  const userInfo = store.getState();
  const [_, render] = useState(false);
  console.log(userInfo);

  const login = (id, pw) => {
    store.dispatch(action.login(id, pw));
    render((state) => !state);
  };

  return <LogInComp login={login} userInfo={userInfo} />;
};

export default LogInContainer;

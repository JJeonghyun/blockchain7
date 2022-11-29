import { useState } from "react";
import store from "../store";
import { action } from "../regist/regist";
import RegistComp from "./RegistComp";

const RegistContainer = () => {
  const userInfo = store.getState();
  const [_, render] = useState(false);
  const regist = (id, pw, name) => {
    store.dispatch(action.regist(id, pw, name));
    render((state) => !state);
  };
  return <RegistComp regist={regist} userInfo={userInfo} />;
};

export default RegistContainer;

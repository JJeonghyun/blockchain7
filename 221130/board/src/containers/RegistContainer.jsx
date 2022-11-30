import store from "../store";

import RegistComp from "../components/RegistComp";
import { action } from "../modules/userDB";
import { useState } from "react";

const RegistContainer = () => {
  const [_, render] = useState(false);
  const userId = store.getState();
  console.log(userId);
  const onClick = (userId, userPw, userName) => {
    store.dispatch(action.regist(userId, userPw, userName));
    render((state) => !state);
  };
  return <RegistComp onClick={onClick} />;
};

export default RegistContainer;

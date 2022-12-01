import store from "../store";

import RegistComp from "../components/RegistComp";
import { action } from "../modules/userDB";

const RegistContainer = () => {
  const userId = store.getState();
  console.log(userId);
  const onClick = (userId, userPw, userName) => {
    store.dispatch(action.regist(userId, userPw, userName));
  };
  return <RegistComp onClick={onClick} />;
};

export default RegistContainer;

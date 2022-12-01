import { useState } from "react";
import LogInComp from "../components/LogInComp";
import store from "../store";
import { action } from "../modules/userInfo";
import { useSelector } from "react-redux";

const LogInContainer = () => {
  const [_, render] = useState(false);
  const item = useSelector((state) => state.userInfo);
  console.log(item);
  const onClick = (userId, userPw) => {
    store.dispatch(action.logIn(userId, userPw, store.getState().userDB));
    render((state) => !state);
  };
  return <LogInComp onClick={onClick} item={item} />;
};

export default LogInContainer;

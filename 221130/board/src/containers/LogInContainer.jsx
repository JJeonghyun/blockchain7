import LogInComp from "../components/LogInComp";
import store from "../store";

const LogInContainer = () => {
  const onClick = () => {
    store.dispatch(action.logIn());
  };
  return <LogInComp onClick={onClick} />;
};

export default LogInContainer;

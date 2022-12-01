import { connect } from "react-redux";
import axios from "axios";

import InfoComponent from "./Component";
import store from "../../../modules/store";
import { action } from "../../../modules/userInfo";

const InfoContainer = ({ userId, userName }) => {
  const onClick = () => {
    store.dispatch(action.logOut());
    axios.post("http://localhost:8080/api/user/logout", { userId });
  };
  return <InfoComponent userName={userName} onClick={onClick} />;
};

const mapStateToProps = (state, props) => {
  return {
    userId: state.userInfo.userId,
    userName: state.userInfo.userName,
  };
};
export default connect(mapStateToProps)(InfoContainer);

import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/board";

import AddComponent from "./Component";

const AddContainer = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userInfo.userName);
  // connect가 필요가 없다. 우린 뭐했지?
  const onClick = (title, text) => {
    dispatch(action.add(title, text, userName));
  };
  // userName,
  // 재혁이가 어려워 하길래 내일 배우는걸로 써.. 그게 오늘이다
  return !userName || <AddComponent onClick={onClick} />;
};

export default AddContainer;

import { useDispatch, useSelector } from "react-redux";

import BoardComp from "../components/BoardComp";
import { action } from "../modules/board";

const BoardContainer = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userInfo.userName);
  const board = useSelector((state) => state.board);
  console.log(board);
  const onClick = (title, text) => {
    dispatch(action.add(title, text, userName));
  };
  return <BoardComp onClick={onClick} board={board} />;
};

export default BoardContainer;

import { useDispatch, useSelector } from "react-redux";

import CommentComponent from "./Component";
import { action } from "../../../modules/comment";

const CommentContainer = ({ userName, boardId }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) =>
    state.comment.filter((item) => item.boardId == boardId)
  );
  const signed = useSelector((state) => state.userInfo.userName);
  // find메서드는 조건에 맞는 (콜백 함수의 결과가 true가 되는) 것을 순서대로 찾아보다가 일치하면 하나만 반환
  // filter는 find와 같으나 조건에 맞는 원소들을 배열로 가져온다
  const add = (text) => {
    dispatch(action.add(text, userName, boardId));
  };
  const edit = (id, text) => {
    dispatch(action.edit(id, text));
  };
  const remove = (id) => {
    dispatch(action.remove(id));
  };
  return (
    <CommentComponent
      add={add}
      list={list}
      edit={edit}
      remove={remove}
      signed={signed}
    />
  );
};
export default CommentContainer;

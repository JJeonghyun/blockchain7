import { useState } from "react";
import styled from "styled-components";
const CommentComponent = ({ add, list, edit, remove, signed }) => {
  const [addText, setAddText] = useState("");
  return (
    <CommentBox>
      <CommentAddBox>
        <input
          type={"text"}
          value={addText}
          onInput={(e) => {
            setAddText(e.target.value);
          }}
          placeholder={"comment"}
        />
        <button
          onClick={() => {
            add(addText);
          }}
        >
          Add Comment
        </button>
      </CommentAddBox>

      {list.map((item, index) => (
        <CommentItemComponent
          key={`comment-${index}`}
          item={item}
          edit={edit}
          remove={remove}
          signed={signed}
        />
      ))}
    </CommentBox>
  );
};
export default CommentComponent;

const CommentBox = styled.div``;

const CommentAddBox = styled.div``;

const CommentItemComponent = ({ item, edit, remove, signed }) => {
  const [isEdit, setIsEdit] = useState(false);
  // isEdit가 참이면 수정 가능 상태 / 거짓이면 수정 불가 상태
  const [editText, setEditText] = useState(item.text);
  const [isEqul, setIsEqul] = useState(false);
  console.log(item.userName);
  console.log(signed);
  return (
    <div>
      {isEdit ? (
        <input
          type="text"
          value={editText}
          onInput={(e) => {
            setEditText(e.target.value);
          }}
        />
      ) : (
        item.text
      )}
      - {item.userName}
      {item.userName == signed ? (
        <>
          [
          <button
            onClick={() => {
              if (isEdit) {
                edit(item.id, editText);
                setIsEdit(false);
              } else {
                setEditText(item.text);
                setIsEdit(true);
              }
            }}
          >
            EDIT
          </button>
          <button
            onClick={() => {
              isEdit ? setIsEdit(false) : remove(item.id);
            }}
          >
            {isEdit ? "Cancel" : "REMOVE"}
          </button>
          ]
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

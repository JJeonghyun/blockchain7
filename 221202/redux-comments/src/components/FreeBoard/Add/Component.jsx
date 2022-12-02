import { useState } from "react";
import styled from "styled-components";
const AddComponent = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // 제목 내용
  return (
    <AddBox>
      <input
        type={"text"}
        placeholder={"Title"}
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder={"Text"}
        value={text}
        onInput={(e) => {
          setText(e.target.value);
        }}
      />
      {/* 비밀번호 추가 */}
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        Add Board
      </button>
    </AddBox>
  );
};

export default AddComponent;

const AddBox = styled.div``;

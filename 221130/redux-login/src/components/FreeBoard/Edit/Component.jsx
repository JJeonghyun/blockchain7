import styled from "styled-components";
import { useState } from "react";

const EditComponent = ({ onClick, item }) => {
  const [title, setTitle] = useState(item.title);
  const [text, setText] = useState(item.text);

  return (
    <EditBox>
      <h1>
        <input
          type={"text"}
          placeholder={"Title"}
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
      </h1>
      <h3>
        userName : {item.userName} - {item.createdAt}
      </h3>
      <p>
        <textarea
          type={"text"}
          placeholder={"Text"}
          value={text}
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
      </p>
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        Edit
      </button>
    </EditBox>
  );
};

export default EditComponent;

const EditBox = styled.div``;

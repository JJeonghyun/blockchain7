import { useState } from "react";

const BoardComp = ({ onClick, board }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <input
          type={"text"}
          placeholder={"Title"}
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type={"text"}
          placeholder={"Text"}
          value={text}
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            onClick(title, text);
          }}
        >
          업로드
        </button>
      </div>
      <div>
        {board.map((item, index) => (
          <div key={`board-${index}`}>{item.title}</div>
        ))}
      </div>
    </>
  );
};

export default BoardComp;

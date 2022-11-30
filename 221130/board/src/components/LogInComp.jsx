import { useState } from "react";

const LogInComp = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  return (
    <div>
      <input
        type={"text"}
        placeholder={"ID"}
        value={userId}
        onInput={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type={"text"}
        placeholder={"PW"}
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick();
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default LogInComp;

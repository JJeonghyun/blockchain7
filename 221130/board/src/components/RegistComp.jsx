import { useState } from "react";

const RegistComp = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");

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
      <input
        type={"text"}
        placeholder={"NAME"}
        value={userName}
        onInput={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(userId, userPw, userName);
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default RegistComp;

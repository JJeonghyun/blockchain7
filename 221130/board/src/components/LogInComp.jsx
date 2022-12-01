import { useState } from "react";

const LogInComp = ({ onClick, item }) => {
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
        type={"password"}
        placeholder={"PW"}
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(userId, userPw);
        }}
      >
        로그인
      </button>
      {/* {item.map((item, index) => (
        <div key={`item-${index}`}>{item.userId}</div>
      ))} */}
      <div>{item.userId} 님 어서오세요. </div>
    </div>
  );
};

export default LogInComp;

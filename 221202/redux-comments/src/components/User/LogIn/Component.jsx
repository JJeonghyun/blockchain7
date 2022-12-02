import { useState } from "react";
import styled from "styled-components";

const LogInComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");

  return (
    <LoginBox>
      <input
        type={"text"}
        value={userId}
        placeholder={"ID"}
        onInput={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type={"password"}
        value={userPw}
        placeholder={"PW"}
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
    </LoginBox>
  );
};
export default LogInComponent;

const LoginBox = styled.div`
  input {
    padding: 5px;
  }
`;

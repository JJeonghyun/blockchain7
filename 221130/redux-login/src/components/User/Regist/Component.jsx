import { useState } from "react";
import styled from "styled-components";

// 3. onClick을 상위 컴포넌트로 부터 받는다
const RegistComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");

  console.log("RegistComponent", onClick);

  return (
    <RegistBox>
      <input
        type={"text"}
        value={userId}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder={"ID"}
      />
      <input
        type={"password"}
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder={"PW"}
      />
      <input
        type={"text"}
        value={userName}
        onInput={(e) => {
          setName(e.target.value);
        }}
        placeholder={"NAME"}
      />
      <button
        onClick={() => {
          console.log("button onClick");
          // 4. 사용자가 버튼을 클릭 했을 때, onClick함수를 호출 한다
          // 호출 시 매개변수로 userId, userPw, userName을 전달한다
          onClick(userId, userPw, userName);
        }}
      >
        Regist
      </button>
    </RegistBox>
  );
};
export default RegistComponent;

const RegistBox = styled.div`
  input {
    padding: 5px;
  }
`;

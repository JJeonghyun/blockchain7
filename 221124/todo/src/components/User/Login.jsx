import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn({ id, setId, list, setList }) {
  const [ans, setAns] = useState([]);
  const isUser = () => {
    if (list.id === id) setAns(`${id}님 어서오쇼`);
    else setAns(`${id}님 어서오쇼`);
  };
  console.log(ans);
  return (
    <div>
      <UserInfo>
        <div>
          <input
            type="text"
            placeholder="ID"
            value={id}
            onInput={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div>
          <input type="password" placeholder="PW" />
        </div>
        <div>
          {/* <Link to={"/"}> */}
          <button onClick={isUser}>로그인</button>
          <div>{ans}</div>
          {/* </Link> */}
        </div>
        <div>
          <Link to={"/"}>
            <button>Cancel</button>
          </Link>
        </div>
      </UserInfo>
    </div>
  );
}

export default LogIn;

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  & > div {
    width: 150px;
    padding: 0 5px;
    &:nth-child(n + 3) {
      width: fit-content;
      padding: 0;
    }
    &:nth-child(n + 3) > a > button {
      width: 100%;
      padding: 5.5px 10px;
    }
    & > input {
      width: 100%;
      padding: 5.5px 10px;
    }
  }
`;

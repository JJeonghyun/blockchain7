import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

function User({ list, setList }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
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
          <input
            type="password"
            placeholder="PW"
            value={pw}
            onInput={(e) => {
              setPw(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onInput={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <Link to={"/"}>
            <button
              onClick={() => {
                setList((list) => [...list, { id, pw, name }]);
              }}
            >
              Regist
            </button>
          </Link>
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

export default User;

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  & > div {
    width: 150px;
    padding: 0 5px;
    &:nth-child(n + 4) {
      width: fit-content;
      padding: 0;
    }
    &:nth-child(n + 4) > a > button {
      width: 100%;
      padding: 5.5px 10px;
    }
    & > input {
      width: 100%;
      padding: 5.5px 10px;
    }
  }
`;

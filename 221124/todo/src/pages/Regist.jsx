import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import User from "../components/User";
import LogIn from "../components/User/Login";

function Regist({ id, setId, list, setList }) {
  return (
    <>
      <RegistBtnBox>
        <Link to={"regist"}>
          <div>회원가입</div>
        </Link>
        <Link to={"login"}>
          <div>로그인</div>
        </Link>
      </RegistBtnBox>
      <Routes>
        <Route
          path={"regist"}
          element={<User list={list} setList={setList} />}
        />
        <Route
          path={"login"}
          element={
            <LogIn id={id} setId={setId} list={list} setList={setList} />
          }
        />
      </Routes>
    </>
  );
}

export default Regist;

const RegistBtnBox = styled.div`
  display: inline-flex;
  cursor: pointer;
  width: fit-content;
  border-radius: 5px;
  color: red;
  margin: 5px 10px;
  width: 30%;
  & > a {
    text-decoration: none;
    color: red;
    background-color: gold;
    margin: 5px 10px;
  }
  & > a > div {
    width: 100%;
  }
`;

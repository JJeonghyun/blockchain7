import styled from "styled-components";
import Todo from "./components/Todo/index.jsx";
import Regist from "./pages/Regist.jsx";
import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  // const [pw, setPw] = useState("");
  // const [name, setName] = useState("");
  // const [ans, setAns] = useState([]);
  const [list, setList] = useState([
    {
      id: "",
      pw: "",
      name: "",
    },
  ]);
  return (
    <AppBox>
      <Regist id={id} setId={setId} list={list} setList={setList} />
      <Todo />
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  max-width: 1300px;
  margin: auto;

  &.test {
    background-color: lightgray;
    height: 100px;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 300px;
  }
`;

import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

function App() {
  let num = 0;
  const [color, setColor] = useState(0);

  const increase = () => {
    num += 1;
    console.log(num);
  };
  return (
    <div className="App" onClick={increase}>
      <ChildComp text="string" num={num} color={color} />
      <ChildFunc text="string" num={num} color={color} setColor={setColor} />
    </div>
  );
}

export default App;

class ChildComp extends React.Component {
  constructor(props) {
    // props란 부모가 전달한 데이터, 부모 컴포넌트가 전달한 데이터
    // 보통은 읽기 전용으로 쓴다 < 재정의를 하지 않는다
    super(props);
    // class형 컴포넌트에서는 constructor에서 매개변수로 받아 상속 부모클래스(React.component)의 constructor(super)를 호출한다
    // 이후 this.props를 사용하여 호출할(가져올) 수 있다.
    console.log(this.props);
  }
  render() {
    return (
      <div style={{ color: "#" + this.props.color.toString(16) }}>
        {/* toString(여기숫자) 해당 진수로 바꿔준다. 
        toString(16) < 16진수로 바꿔준다
        CSS에서 색상을 설정할 때 rgb(255,255,255), rgba(255,255,255,1) 투명도
        #00ff00 < green
        #000000 < 2자리수씩? 읽으면 된다 (00(r), 00(g), 00(b))
        */}
        {this.props.num}
      </div>
    );
  }
}

function ChildFunc(props) {
  // 함수형 컴포넌트에서는 매개변수로 바로 받는다.
  // {}를 사용하여 구조분해할당을 할 수 있다
  // const {} = props << 와 같다
  console.log(props);

  const changeColor = () => {
    props.setColor(props.color + 100);
    // props의 setColor 메서드를 호출한다
    // state ????
    // setState(변경할 값)
    // setState((state)=> {여기서의 state는 기존의 값 return 변경할 값})
    // setState((state)=>newState)
  };
  return <div onClick={changeColor}>{props.num}</div>;
}

// const AppDiv = styled.div`
//   width: 200px;
//   background-color: black;
//   color: white;
//   margin: 0 auto;
//   text-align: center;
//   padding: 50px 0;
//   & > div:first-child {
//     margin: 5px 0;
//   }
//   & > div:last-child {
//     margin: 5px 0;
//   }
// `;

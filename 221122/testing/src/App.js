// React의 구조
// Component란? < 기능적으로 최소 단위
// - 기능을 포함ㄴ하는 HTML 구조 단위
//  - 컴포넌트는 항상 HTML 구조를 return 해야 한다.
//  - 함수형에서는 함수 자체가 return 한다
//  - 클래스형에서는 render 메서드에서 return 한다

// 컴포넌트(root)
// - App컴포넌트
//  - UserBox
//   - Regist
//   - LogIn
//   - LogOut
//  - BoardBox

import React from "react";
import "./App.css";

function App() {
  let test = "테스팅";
  let num = 1;
  let bool = true;
  let str = "문자열";
  let arr = [1, 2, 3, 4];
  let obj = { name: "객체" };
  let nul = null;
  let und = undefined;

  let arrDiv = [
    <div key="0">1</div>,
    <div key="1">2</div>,
    <div key="2">3</div>,
    <div key="3">4</div>,
  ];

  function arrFunc(arr) {
    const tempArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //   tempArr.push(<div key={i}>{arr[i]}</div>);
    // }
    arr.forEach((item, index) => {
      tempArr.push(<div key={index}>{item}</div>);
    });
    return tempArr;
  }

  function testing() {
    return "함수닷!";
  }
  function increase() {
    num = num + 1;
    console.log(num);
  }
  // '값을 내보낸다. 가져온다' 이야기할 수 있는 것들과 if, for, while의 차이가 무엇인가?
  // '값을 보낸다. 가져온다' < 변수, 함수 <
  // if 조건문 / for, while 반복문 < 문장일 뿐

  return (
    <div className="App">
      {test}
      <App1 />
      <div onClick={increase}>{num}</div>
      <div>{bool}</div>
      <div>{str}</div>
      <div>{arr}</div>
      <div>{obj.toString()}</div>
      <div>{nul}</div>
      <div>{und}</div>
      {/* {}는 값을 가져야만 출력할 수 있다.
      단, 객체일 경우에는 출력방법이 모호하기 떄문에 출력하지 못한다.
      */}

      <div>{bool ? "true" : "false"}</div>
      <div>{testing()}</div>
      <div>
        {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div> */}
        {/* {arrDiv} */}
        {arrFunc(arr)}
        {arr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
  // HTML 태그 내에서 {}를 사용하여 변수를 출력할 수 있다
}

export default App;

class App1 extends React.Component {
  // 우리가 컴포넌트를 만들 때 컴포넌트의 모든 코드를 알고 있지 않기에 상속을 받도록 한다.

  // 여기서 초기화 한 것은 this 프로퍼티로 정의된다.
  constructor(props) {
    // 클래스를 생성할 때 실행되는 코드
    super(props);
    // 상속을 받았을 때 부모의 해당 메서드를 실행한다. < 부모의 constructor
    // this.num = 0;
    this.state = { name: "상태값", num: 0, classNames: ["app3"] };
  }

  divRef = React.createRef(); // useRef

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  increaseFunc() {
    console.log(this);

    // 여기서 this는 increaseFunc 메서디이다.
    // 호출하는 곳에서 bind 메서드로 this를 App1로 전달해야한다.
  }
  increase = () => {
    // this.state.num = this.state.num + 1;
    // console.log(this.state.num);
    // 여기서 this는 App1이 된다.
    // 호출하는 곳에서 bind 메서드를 적지 않아도 된다.
    this.setState({ num: this.state.num + 1 });
  };

  changeClass = () => {
    if (this.state.classNames.indexOf("app4") === -1)
      this.setState({ classNames: [...this.state.classNames, "app4"] });
    else this.setState({ classNames: [...this.state.classNames.slice(0, 1)] });
  };

  changeName = () => {
    // this.state.name = this.state.name + "1";
    this.setState({ name: this.state.name + "1" });
    console.log(this.state.name);
    console.log(this.divRef);
    console.log(this.divRef.current);
  };
  render() {
    return (
      <>
        <div onClick={this.increase}>{this.state.num}</div>
        <div ref={this.divRef} onClick={this.changeName}>
          {this.state.name}
        </div>
        <div
          className={this.state.classNames.join(" ")}
          onClick={this.changeClass}
        >
          asd
        </div>
      </>
    );
  }
}

// const app1 = new App1(props);

// export default App1;

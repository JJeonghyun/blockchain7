// import logo from "./logo.svg";
// import "./App.css";
// import ClassComp from "./components/ClassComp";
// import { useState } from "react";

// function App() {
//   const [isMount, setMount] = useState(true);
//   function changeMount() {
//     setMount(!isMount);
//   }
//   const [count, setCount] = useState(0);

//   return (
//     <div
//       className="App"
//       onClick={() => {
//         changeMount();
//       }}
//     >
//       클릭 ! {isMount ? <ClassComp count={count} setCount={setCount} /> : <></>}
//     </div>
//   );
// }

import React from "react";
import BtnComp from "./components/BtnComp";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: undefined,
      secondNum: undefined,
      op: "",
      result: undefined,
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  selNum(num) {
    if (this.state.firstNum == undefined) {
      this.setState({ ...this.state, firstNum: num });
    } else if (this.state.secondNum == undefined) {
      this.setState({ ...this.state, secondNum: num });
    }
  }
  calc(op) {}
  render() {
    // 클래스 컴포넌트의 필수이다 (Virual DOM에 그려지는 HTML 구조)
    // 클래스 컴포넌트에서만 사용 render(){return (***)}
    // 함수형 컴포넌트에서는 return(***) 으로 사용
    return (
      <>
        <div className="calculator">
          <div className="row">
            <BtnComp item="7" onClick={this.selNum.bind(this)} />
            <BtnComp item="8" onClick={this.selNum.bind(this)} />
            <BtnComp item="9" onClick={this.selNum.bind(this)} />
            <BtnComp
              item="*"
              onClick={function (e) {
                this.setState({
                  firstNum: undefined,
                  secondNum: undefined,
                  op: "*",
                  result: this.state.firstNum * this.state.secondNum,
                });
              }.bind(this)}
            />
          </div>
          <div className="row">
            <BtnComp item="4" onClick={this.selNum.bind(this)} />
            <BtnComp item="5" onClick={this.selNum.bind(this)} />
            <BtnComp item="6" onClick={this.selNum.bind(this)} />
            <BtnComp
              item="/"
              onClick={function () {
                if (
                  this.state.firstNum != undefined &&
                  this.state.secondNum != undefined
                ) {
                  this.setState({
                    firstNum: undefined,
                    secondNum: undefined,
                    result: this.state.firstNum / this.state.secondNum,
                  });
                }
              }.bind(this)}
            />
          </div>
          <div className="row">
            <BtnComp item="1" onClick={this.selNum.bind(this)} />
            <BtnComp item="2" onClick={this.selNum.bind(this)} />
            <BtnComp item="3" onClick={this.selNum.bind(this)} />
            <BtnComp
              item="%"
              onClick={function () {
                if (
                  this.state.firstNum != undefined &&
                  this.state.secondNum != undefined
                ) {
                  this.setState({
                    firstNum: undefined,
                    secondNum: undefined,
                    result: this.state.firstNum % this.state.secondNum,
                  });
                }
              }.bind(this)}
            />
          </div>
          <div className="row">
            <BtnComp
              item="+"
              onClick={function () {
                if (
                  this.state.firstNum != undefined &&
                  this.state.secondNum != undefined
                ) {
                  this.setState({
                    firstNum: undefined,
                    secondNum: undefined,
                    result: this.state.firstNum + this.state.secondNum,
                  });
                }
              }.bind(this)}
            />
            <BtnComp item="0" onClick={this.selNum.bind(this)} />
            <BtnComp
              item="-"
              onClick={function () {
                if (
                  this.state.firstNum != undefined &&
                  this.state.secondNum != undefined
                ) {
                  this.setState({
                    firstNum: undefined,
                    secondNum: undefined,
                    result: this.state.firstNum - this.state.secondNum,
                  });
                }
              }.bind(this)}
            />
            <BtnComp item="=" />
          </div>
        </div>
        <div className="result-box">
          <BtnComp item={this.state.firstNum} />
          <BtnComp item={this.state.secondNum} />
          <BtnComp item={this.state.result} />
        </div>
      </>
    );
  }
}

export default App;

// onClick={function (e) {
//   if (this.state.firstNum == undefined) {
//     this.setState({ ...this.state, firstNum: 0 });
//   } else if (this.state.secondNum == undefined) {
//     this.setState({ ...this.state, secondNum: 0 });
//   }
// }.bind(this)}

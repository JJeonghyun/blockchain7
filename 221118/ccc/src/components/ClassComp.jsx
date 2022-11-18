import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    //Virtual DOM에 추가 될때 실행되는 함수
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    //state가 변경된 후에 실행되는 함수
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    //Virtual DOM에 삭제 될때 실행되는 함수
    console.log("componentWillUnmount");
  }

  //   increaseCount(e) {
  //     e.stopPropagation();
  //     this.setState({ count: this.state.count + 1 });
  //   }
  render() {
    return (
      <>
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.setState({ count: this.state.count + 1 });
          }.bind(this)}
        >
          {this.state.count}
        </div>
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.props.setCount(this.props.count + 1);
          }.bind(this)}
        >
          {this.props.count}
        </div>
      </>
    );
  }
}

// yarn이란
// - React가 Facebook에서 만든거다
// - Yarn은 React에 최적화 하기 위해서 Facebook에서 만든 패키지 매니저이다
// - npm이랑 약간은 다르다 -> node 18버전 들어오면서 아예 달려졌다

// - 설치법 : npm i -g corepack
// yarn create react-app yarntest

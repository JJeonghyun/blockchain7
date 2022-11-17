import React from "react";

export default class ClassComp extends React.Component {
  // 클래스형 컴포넌트

  constructor(props) {
    super(props);
    // props란 상위 컴포넌트에서 전달하는 데이터이다.
    // <ClassComp style={{width:"10px"}} > </ClassComp>
    // style은 속성인가? props인가
    // 속성은 HTML 태그에 적는 것
    // ClassComp는 컴포넌트 이고 이에 props 이다
    // 예제와 같이 style읋 전달 했다면 <div style={this.props.style}></div>
    // 와 같이 써야한다

    this.state = { count: 0 };
    // const [count, setCount] = useState(0);

    // this.state = { count: 0, name:"정현" };
    // const [count, setCount] = useState(0);=
    // const [name, setName] = useState("정현");
  }

  render() {
    return (
      <div
        onClick={function () {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        {" "}
        {count}
      </div>
    );
    // return <div style={this.props.style}></div>;
  }
}

// 함수형
// export default function ClassComp ({}){
//     return <div></div>
// }

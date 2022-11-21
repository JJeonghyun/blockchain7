import { useState, useEffect } from "react";

// export default function FuncComp(props) {
//   props.func();
//   return <div>FuncComp {props.text}</div>;
// }

// const { text, func } = props
export default function FuncComp({ text, func }) {
  // 함수형 컴포넌트에서 클래스형 컴포넌트의 기능들을 사용하기 위해
  // 사용하는 것을 Hook이라고 한다
  // Hook은 use로 시작한다
  // useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer 등등이 있다.
  // Hook은 사용자가 구현할 수 도 있다.(커스텀 가능)
  // - Custom Hook과 Component의 차이 => HTML 문법으로 return하는가 ? 안하는가 ?
  // useState, useEffect는 뺼 수 없는 Hook이다. 단, 나머지는 사용하지 않아도 큰 상관이 없다

  const [test, setState] = useState("state test");
  // state 선언 및 정의 (초기화)
  // state : 상태값, React에서의 리랜더링(다시 그리기)의 기준이 된다.
  // state가 변경(재정의)되면 컴포넌트를 다시 불러온다
  // 단, 다시 불러올 때 Hook으로 된 변수, 함수들은 다시 부르지 않는다(useState 등등)
  // useState는 함수형 컴포넌트의 투톱 중 하나다.

  const [study1] = useState("state study1");

  func();

  useEffect(() => {
    // useEffect는 랜더링 후에 실행되는 콜백 함수 이다
    console.log("useEffect");
    // 아래가 componentWillUnmount와 같다.
    return () => {
      console.log("componentWillUnmount");
    };
    // 빈배열의 useEffect에서 함수를 return하면 componentWillUnmount와 같은 작동을 한다
  }, []);
  // useEffect의 두번째 매개변수는 state값의 배열을 넣는다.
  // 빈배열일 경우 componentDidMount와 같은 역할을 한다

  useEffect(() => {
    console.log("state change");
    // state값이 변화했을 때 실행되는 메서드
  });

  useEffect(() => {
    console.log("test change");
    // state 중 test값이 변화했을 때 실행되는 메서드
  }, [test]);

  useEffect(() => {
    console.log("study1 change");
  }, [study1]);
  // 두번째 매개변수 배열의 아이템으로 프로그래머가 감지하고 싶은 state(상태값)를 넣는다
  // study1이 변경(재정의) 됐을 때만 실행된다.

  useEffect(() => {
    console.log("test || study1 change");
    // state 중 test 또는 study1 값이 변화 했을 때 실행되는 메서드
  }, [test, study1]);
  return (
    <div
      onClick={function () {
        setState(test + "1");
        // state 재정의
      }}
    >
      FuncComp {text}
      {test} {study1}
    </div>
  );
}

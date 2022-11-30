// import {useDispatch} from "react-redux"
import store from "../../../modules/store";

import RegistComponent from "./Component";
import { action } from "../../../modules/usersDB";

const RegistContainer = () => {
  // const dispatch = useDispatch();

  // 1. onClick을 선언한다.
  const onClick = (userId, userPw, userName) => {
    // 5. onClick가 매개변수 3개를 포함하여 호출 받았다
    console.log("RegistContainer onclick => dispatch");
    // 6. store의 dispatch를 호출, 매개변수 action의 regist를 호출해서 return값을 전달
    // dispatch 보다 action의 regist호출이 먼저 실행 된다.
    // 6-1. action의 regist를 호출, 매개변수 3개 전달
    // 7. dispatch를 호출, action.regist의 return 값을 매개변수로 전달했다

    // 10. dispatch를 호출 해서 action.regist의 return값을 매개변수로 전달
    // 11. dispatch는 reducer를 호출 하며 액션을 전달
    store.dispatch(action.regist(userId, userPw, userName));
  };
  console.log("RegistContainer", onClick);

  // 2. 선언된 onClick을 Comp로 props로 전달한다
  return <RegistComponent onClick={onClick} />;
};
export default RegistContainer;

// 화살표 함수
// ()=>({}) : 왼쪽 괄호는 매개변수가 들어갈 수 있다. 오른쪽  return 값 (현재 {}, 즉 객체를 반환한다.)
// ()=>[] : 함수의 return 값은 배열이다
// ()=>{} : 오른쪽 중괄호{}는 함수의 내용
// ()=>{return {}} : 오른쪽 중괄호{}는 함수의 내용, return 다음{}, 즉 객체를 반환
// () => { {a:1} } == ()=>{ return { a:1 } } == function() { return { a:1 } }
// () => [] == () => { return [];}
// (a) => { return a+1} == function(a){ return a+1;}

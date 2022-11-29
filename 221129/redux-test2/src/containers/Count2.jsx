import { connect } from "react-redux";

import Count2Comp from "../components/Count2";
import { action } from "../modules/count2";

const Count2Container = ({ count2, plus, minus, input }) => {
  return <Count2Comp count2={count2} plus={plus} minus={minus} input={input} />;
};

const mapStateToProps = (state, props) => {
  // App.js에서 보낸 props를 여기서 매개변수(props)로 받을 수 있다
  return { count2: state.count2, ...props };
  // 객체 내의 값이 그래돌 props로 전달된다
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => {
      dispatch(action.plus);
    },
    minus: () => {
      dispatch(action.minus);
    },
    input: (input) => {
      dispatch(action.input(input));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count2Container);
// connect는 매개변수로 mapStateToProps 콜백함수 또는
// mapStateToProps, mapDispatchToProps 콜백함수들을 받는다
// 두 개의 콜백함수는 return 값으로 객체를 내보낸다
// mapStateToProps 콜백함수의 매개변수로는 state와 props를 받는다
//  - state는 store(redux)의 state이다
//  - props는 상위 컴포넌트에서 전달한 props이다

// mapDispatchToProps 콜백함수의 매개변수로는 dispatch로 받는다
//  - dispatch는 store의 dispatch 메서드 이다
// connect의 매개변수인 두 콜백함수의 return 값인 객체는 객체 내의 각각의 프로퍼티가 합쳐져서
// 다음 컴포넌트(Count2Container) props로 전달한다

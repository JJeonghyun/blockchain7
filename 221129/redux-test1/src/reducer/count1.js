import { COUNT1 } from "../action/count1";

const reducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNT1.PLUS:
      return state + payload.input;
    case COUNT1.MINUS:
      // "count1/minus" 형식처럼 /로 나누면
      // 앞에 count1이 store 내의 state 자체를 의미하게 된다.
      // reducer가 가져오는 state는 store 내의 count1이 된다
      return state - payload.input;
    default:
      return state;
  }
};

export default reducer;

// Container VS Components
// JavaScript 등의 로직 VS HTML 구조
// 나누는 이유 : 가독성, 유지보수
// 나누는 기준 > 컴포넌트와 컨테이너로 나누냐, 변수끼리 나누고 해당 컴포넌트와 컨테이너를 담냐
import { useState } from "react";

import Count1Comp from "../components/Count1";
import store from "../store";
import { action } from "../modules/count1";

const Count1Container = () => {
  const count1 = store.getState().count1;
  const [_, render] = useState(false);
  const plus = () => {
    store.dispatch(action.plus);
    render((state) => !state);
  };
  const minus = () => {
    store.dispatch(action.minus);
    render((state) => !state);
  };
  const input = (input) => {
    store.dispatch(action.input(input));
    render((state) => !state);
  };

  return <Count1Comp count1={count1} plus={plus} minus={minus} input={input} />;
};

export default Count1Container;

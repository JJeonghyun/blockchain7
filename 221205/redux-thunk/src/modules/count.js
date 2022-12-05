import promiseTime from "./promiseTime";
const TYPE = {
  INCREMENT: "count/increment",
  DECREMENT: "count/decrement",
};

const increment = () => {
  return {
    type: TYPE.INCREMENT,
  };
};
const decrement = () => {
  return {
    type: TYPE.DECREMENT,
  };
};

// 기존의 redux 실행 순서
// 1. dispatch(action)을 호출. 해당 action은 reducer에 전달 < action은 객체
// 2. dispatch가 호출되면 reducer를 자동으로 호출
// 3. reducer는 state, action 매개변수를 받아 처리
// 4. reducer의 return 값은 그대로 state에 정의
//  - useSelector를 사용하면 state 변화 시 랜더링을 다시 해준다.(reRendering)
// 순서 총괄 : action -> dispatch -> reducer -> state

// thunk 사용시 실행 순서
// 1. dispatch(action)을 호출
// 2. action이 함수 인지 확인하여 함수라면 reducer에 전달하는 것이 아닌 action 함수 자체를 호출 < 확인은 thunk가 해줌
// 2-1. 전달하는 action 함수는 async, await가 가능하다
// 3. action이 객체인 경우 기존의 redux 실행 순서와 마찬가지로 작동
// 순서 총괄 : action -> dispatch -> action -> dispatch -> reducer

const asyncIncrement = () => {
  return async (dispatch, getState) => {
    // thunk 사용 시 action으로 함수를 dispatch에 전달할 수 있게 된다
    try {
      const result = await promiseTime(TYPE.INCREMENT, 1000);
      dispatch({ type: result });
    } catch (err) {
      dispatch({ type: "err", payload: err });
    }
  };
};

const asyncDecrement = () => {
  return async (dispatch, getState) => {
    // thunk 사용 시 action으로 함수를 dispatch에 전달할 수 있게 된다
    try {
      const result = await promiseTime(TYPE.DECREMENT, 1000);
      dispatch({ type: result });
    } catch (err) {
      dispatch({ type: "err", payload: err });
    }
  };
};

export const action = { increment, decrement, asyncIncrement, asyncDecrement };

export const initialize = 0;

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.INCREMENT:
      return state + 1;

    case TYPE.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

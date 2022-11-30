// 회원가입한 유저들의 정보

const TYPE = {
  REGIST: "user/regist",
};

// action
const regist = (userId, userPw, userName) => {
  // 8. regist를 호출 받았다. 3개의 매개변수를 받았다
  console.log("Action regist");
  // 9. type과 payload를 반환, 즉 action을 반환
  return {
    type: TYPE.REGIST,
    payload: { userId, userPw, userName },
  };
};

// const regist = (userId, userPw, userName) => ({
//     type: TYPE.REGIST,
//     payload: { userId, userPw, userName },
//   });

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  // 12. dispatch가 액션(action)을 매개변수로 보내며 호출 state는 기존 상태값이다
  //  - state는 combineReducer의 사용 여부에 따라서 달라진닾
  console.log(action);
  const { type, payload } = action;
  // 13. type에 따라서 state를 재정의한다 제정의하고 싶은 정보를 return 한다
  console.log(state); // < 배열이다
  switch (type) {
    case TYPE.REGIST:
      if (state.find((item) => item.userId === payload.userId)) return state;
      else return [...state, payload];
    // return state.find((item) => item.userId === payload.userId) ? state : [...state, payload]
    default:
      return state;
  }
};

// 삼항연산자 => 조건 ? 참 : 거짓
// const temp = isBool ? "true" : "false"
// 위를 if 써서 사용하려면
// function check(isBool){
//     if(isBool) return "true";
//     else return "false";
// }
// const temp = check(isBool);

const TYPE = {
  REGIST: "user/regist",
};

const regist = (userId, userPw, userName) => ({
  type: TYPE.REGIST,
  payload: { userId, userPw, userName },
});

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    case TYPE.REGIST:
      if (state.find((item) => item.userId === payload.userId)) return state;
      else return [...state, payload];
    default:
      return state;
  }
};

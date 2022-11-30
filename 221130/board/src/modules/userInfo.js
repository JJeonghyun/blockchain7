const TYPE = {
  LOGIN: "user/login",
  LOGOUT: "user/logout",
};

const logIn = (userId, userPw) => ({
  type: TYPE.LOGIN,
  payload: { userId, userPw },
});
const logOut = () => ({
  type: TYPE.LOGOUT,
});

const action = { logIn, logOut };

const initialize = { userId: "", userName: "" };

const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGIN:
      return state;
    case TYPE.LOGOUT:
      return state;
    default:
      return state;
  }
};

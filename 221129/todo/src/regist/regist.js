const TYPE = {
  REGIST: "regist",
  LOGIN: "login",
  LOGOUT: "logout",
};

const regist = (id, pw, name) => ({
  type: TYPE.REGIST,
  payload: { id, pw, name },
});

const login = (id, pw) => ({
  type: TYPE.LOGIN,
  payload: { id, pw, check: false },
});

const logout = (id, pw) => ({
  type: TYPE.LOGIN,
  payload: { id, pw, check: false },
});

export const action = { regist, login, logout };

export const initialize = [
  {
    id: "",
    pw: "",
    name: "",
  },
];

export const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.REGIST:
      return [...state, { id: payload.id, pw: payload.pw, name: payload.name }];
    case TYPE.LOGIN:
      [...state].find((item) =>
        item.id === payload.id ? (item.check = true) : (item.check = false)
      );
      return [...state];
    case TYPE.LOGOUT:
      return [...state, { id: payload.id, pw: payload.pw, name: payload.name }];
    default:
      return state;
  }
};

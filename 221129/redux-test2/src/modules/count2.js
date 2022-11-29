const TYPE = {
  PLUS: "count2/plus",
  MINUS: "count2/minus",
  INPUT: "count2/input",
};

const plus = {
  type: TYPE.PLUS,
};
const minus = {
  type: TYPE.MINUS,
};

const input = (input) => ({
  type: TYPE.INPUT,
  payload: { input },
});

export const action = { plus, minus, input };

export const initialize = { count2: 0 };

export const reducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.PLUS:
      return state + 2;
    case TYPE.MINUS:
      return state - 2;
    case TYPE.INPUT:
      return payload.input;
    default:
      return state;
  }
};

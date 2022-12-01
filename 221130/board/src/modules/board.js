const TYPE = {
  ADD: "board/add",
  REMOVE: "board/remove",
  EDIT: "board/edit",
};

const add = (title, text) => ({
  type: TYPE.ADD,
  payload: { title, text },
});

const remove = () => ({
  type: TYPE.REMOVE,
});
const edit = () => ({
  type: TYPE.EDIT,
});

export const action = { add, remove, edit };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD:
      const { title, text, userName } = payload;
      return [
        { title, text, userName, createdAt: new Date().toLocaleString() },
        ...state,
      ];
    case TYPE.REMOVE:
      return state;
    case TYPE.EDIT:
      return state;
    default:
      return state;
  }
};

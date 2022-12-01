const TYPE = {
  ADD: "board/add",
  REMOVE: "board/remove",
  EDIT: "board/edit",
};
// type은 정했다. action을 만들자

const add = (title, text, userName) => ({
  type: TYPE.ADD,
  payload: {
    title,
    text,
    userName,
  },
});
const remove = (id) => ({
  type: TYPE.REMOVE,
  payload: { id }, // 몇번째 놈을 지울껀지 id(index)를 통해 지운다
});
const edit = (id, title, text) => ({
  type: TYPE.EDIT,
  payload: { id, title, text },
});

export const action = { add, remove, edit };

export const initialize = [];

let id = 0;
export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD:
      const { title, text, userName } = payload;
      //   const { title, text, userName } = payload;
      id++;
      return [
        { id, title, text, userName, createdAt: new Date().toLocaleString() },
        // id가 있는 이유 : 수정과 삭제를 하기 위해서
        //{...payload,createdAt: new Date().toLocaleString() }
        ...state,
        // state가 아래에 있는 이유 : 최신 입력된 값을 위로 올리기 위해서
      ];
    case TYPE.REMOVE: {
      const index = state.findIndex((item) => item.id == payload.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case TYPE.EDIT: {
      const index = state.findIndex((item) => item.id == payload.id);

      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
};

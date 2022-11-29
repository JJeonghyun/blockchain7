const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "arr/push":
      return [...state, payload.input];
    case "arr/pop":
      let tempArr = [...state];
      tempArr.pop();
      return tempArr;
    case "arr/edit":
      return [...state].map((item) =>
        item === payload.input ? payload.edit : item
      );
    case "arr/delete":
      let tempElem = 0;
      [...state].map((item, index) =>
        item === payload.input ? (tempElem = index) : item
      );
      return [...state.slice(0, tempElem), ...state.slice(tempElem + 1)];
    default:
      return state;
  }
};

export default reducer;

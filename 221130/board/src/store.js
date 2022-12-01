import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  reducer as userInfoReducer,
  initialize as userInfoIni,
} from "./modules/userInfo";
import {
  reducer as userDBReducer,
  initialize as userDBIni,
} from "./modules/userDB";

import {
  initialize as boardIni,
  reducer as boardReducer,
} from "./modules/board";

const store = createStore(
  combineReducers({
    userInfo: userInfoReducer,
    userDB: userDBReducer,
    board: boardReducer,
  }),
  { userInfo: userInfoIni, userDB: userDBIni, board: boardIni },
  composeWithDevTools()
);

export default store;

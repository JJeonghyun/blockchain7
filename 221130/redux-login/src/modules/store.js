import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";
import { initialize as userDBIni, reducer as userDBReducer } from "./usersDB";
import { initialize as boardIni, reducer as boardReducer } from "./board";

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

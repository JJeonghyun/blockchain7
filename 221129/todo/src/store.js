import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialize } from "./regist/regist";
import { reducer } from "./regist/regist";

const store = createStore(reducer, initialize, composeWithDevTools());

export default store;

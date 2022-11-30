import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./modules/userDB";
import { initialize } from "./modules/userDB";

const store = createStore(reducer, initialize, composeWithDevTools());

export default store;

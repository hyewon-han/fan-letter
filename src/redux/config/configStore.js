import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import comment from "../modules/comment";

const rootReducer = combineReducers({
  comment,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;

const onChange = () => {
  console.log(store.getState());
};

store.subscribe(onChange);

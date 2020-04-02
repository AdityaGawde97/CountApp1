import { createStore } from "redux";
import reducerFun from "./Reducer";

const store = createStore(reducerFun);

export default store;


import { combineReducers } from "redux";
import { reducer as app } from "./App";
export let reducers = null;
export const createReducers = () => {
  if (reducers) return reducers;
  reducers = combineReducers({ app });
  return reducers;
};

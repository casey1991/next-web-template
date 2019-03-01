import { createStore as reduxCreateStore } from "redux";
import getConfig from "next/config";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createReducers } from "./reduers";
const { serverRuntimeConfig } = getConfig();
export let store = null;
export const createStore = () => {
  if (store) return store;
  if (serverRuntimeConfig.DEV)
    store = reduxCreateStore(createReducers(), devToolsEnhancer());
  else {
    store = reduxCreateStore(createReducers());
  }
  return store;
};

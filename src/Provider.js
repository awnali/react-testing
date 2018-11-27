import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./reducers";

import React from "react";

export const MyProvider = ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return <Provider store={store}>{children}</Provider>;
};
export default MyProvider;

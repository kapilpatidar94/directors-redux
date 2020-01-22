import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { reducer } from "./reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from './saga'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
applyMiddleware(sagaMiddleware)
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
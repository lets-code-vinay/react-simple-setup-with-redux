import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer.js";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(Store);
// const Store = createStore(rootReducer, (applyMiddleware(thunkMiddleware)));

Store.subscribe(() => {});

// export { Store, persistor };

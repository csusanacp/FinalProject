import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { PersistConfig } from "redux-persist/es/types";
import { rootReducer } from "./reducer";
import { rootSaga } from "./saga";
import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist";

const sagaMiddleware = createSagaMiddleware();


const persistConfig ={
  key: "root",
  storage,
  whitelist: ["user"],
  blacklist: ["ui"],
};

export const configStore = () => {
  const persistedReducer= persistReducer(persistConfig, rootReducer);
  
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga)  ; 

  return {store, persistor};
};

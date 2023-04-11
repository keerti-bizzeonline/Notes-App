import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";

export const reduxStorage = {
  setItem: async (key, value) => {
    await localStorage.setItem(key, value);
    return Promise.resolve(true);
  },
  getItem: async (key) => {
    const value = await localStorage.getItem(key);
    return Promise.resolve(value);
  },
  removeItem: async (key) => {
    await localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  storage: reduxStorage,
  whitelist: ["notesReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistedStore = persistStore(store);
export const persistor = persistStore(store);

export default store;

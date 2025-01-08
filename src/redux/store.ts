import { createStore } from "redux";
import rootReducer from './rootReducer';
import { persistStore } from "redux-persist";

export type Action = {
    type: String,
    data?: Object,
    err?: Object
}

export const store = createStore(rootReducer);

export const getStoreData = () => {
    return store.getState();
}

const persistor = persistStore(store);

export { persistor };
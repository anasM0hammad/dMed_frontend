import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./auth/reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'user'],
    blacklist: []
};

const rootReducer: any = combineReducers({
    auth: AuthReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
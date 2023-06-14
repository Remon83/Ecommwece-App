import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categories from './categorySlice'
import items from './itemSlice'
import cart from './CartSlice'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
key: 'ecom',
version: 1,
storage,
whitelist: ['cart']
}

const rootReducer = combineReducers({categories, items, cart})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

let persistor = persistStore(store)

export {store, persistor};

import {applyMiddleware, createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './reducers/pokemonReducer'
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
}

const middleware = [thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer)
export let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export let persistor = persistStore(store)


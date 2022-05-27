import { combineReducers } from "redux";
import cartReducer from "./reducers/reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}


export const rootReducer =  combineReducers({
    cart: cartReducer
})

export default persistReducer(persistConfig, cartReducer)
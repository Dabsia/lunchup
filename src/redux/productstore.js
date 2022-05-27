import { createStore, applyMiddleware } from "redux";
import cartReducer from "./reducers/reducer";
import logger from 'redux-logger'

const middlewares = [logger];

const store = createStore(cartReducer, applyMiddleware(...middlewares))

export default store
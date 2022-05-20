import { combineReducers } from "redux";

import { vendorReducer } from "./vendorReducer";

const reducers = combineReducers({
    allVendors : vendorReducer
})

export default reducers
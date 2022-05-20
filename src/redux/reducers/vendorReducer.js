import { ActionTypes } from "../constants/action-types"

const initialState = {
    vendors: []
}

export const vendorReducer = (state = initialState, action) => {
    switch (action.type){
        case ActionTypes.SET_VENDORS:
            return {...state, vendors : action.payload}
        default:
            return state
    }
}
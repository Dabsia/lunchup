import { ActionTypes } from "../constants/action-types"

export const setVendor = (vendors) => {
    return {
        type: ActionTypes.SET_VENDORS,
        payload: vendors
    }
}

export const selectedVendor = (vendor) => {
    return {
        type: ActionTypes.SELECTED_VENDORS,
        payload: vendor
    }
}
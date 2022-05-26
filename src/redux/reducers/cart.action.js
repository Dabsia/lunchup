import CartActionTypes from "./cart.types";

export const addItem = food => ({
    type: CartActionTypes.ADD_ITEM,
    payload: food
})
import CartActionTypes from "./cart.types";

export const addItem = food => ({
    type: CartActionTypes.ADD_ITEM,
    payload: food
})

export const clearItemFromCart = food => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: food
})

export const removeItem = food => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: food
})
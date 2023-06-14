import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {items: {}}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const id = action.payload
            if (state.items[id]) {
                state.items[id]++
            } else {
                state.items[id] = 1
            }
        }
    }
})

// optimization to prevent re-rendering of this function (memoization)
export const totalQuantities = createSelector(
    state => state.cart.items,
    (items) => {
        console.log('fired')
        let totalQuantity = 0
        for (const id in items) {
            totalQuantity += items[id]
        }
        return totalQuantity
    } 
    )



export default CartSlice.reducer
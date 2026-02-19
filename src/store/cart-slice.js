import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload

      // check if item exists

      const itemExists = state.itemList.find((item) => {
        return (
          item.id === newItem.id
        )
      })

      if (itemExists) {
        itemExists.quantity++
        itemExists.totalPrice += newItem.price
      }
      else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        })
      }
    },

 
  }

})

export const cartActions = cartSlice.actions
export default cartSlice
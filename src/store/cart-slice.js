import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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

        state.totalQuantity++
      }

      

    },
    setShowCart(state, action) {
      state.showCart = !state.showCart
    }, 
    incrementCartItem(state, action) {
      state.totalQuantity += 1
    },
    decrementCartItem(state, action) {
      if (state.totalQuantity <= 0) {
        state.totalQuantity = 0
      } else {
        state.totalQuantity -= 1
      }
    },
    removeFromCart(action, state) {
      const id = action.payload

      const existingItem = state.itemList.find((item) => {
        return (
          item.id === id
        )
      })

      if (existingItem.quantity === 1 ) {
        state.itemList = state.itemList.filter((item) => {
          return (
            item.id !== id
          )
        })
      } else {
        existingItem,quantity--
        existingItem.totalPrice -= existingItem.price
      }
    }

 
  }

})

export const cartActions = cartSlice.actions
export default cartSlice
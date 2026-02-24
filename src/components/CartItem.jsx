import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'

const CartItem = (props) => {

  const dispatch = useDispatch()

  const incrementCartItem = () => {
   dispatch(cartActions.addToCart({
    name: props.item.name,
    id: props.item.id,
    price: props.item.price
   }))
  }

  const decrementCartItem = () => {

  }

  return (
      <div className='border shadow-lg border-gray-200 w-1/2 min-w-75'>
        <div className='flex justify-between p-5'>
          <h1 className='text-amber-500 text-lg font-semibold'>{props.item.name}</h1>
          <p className='text-lg font-semibold'>
            ${props.item.price}
          </p>
          <p className='text-lg font-semibold'>
            Quantity: {props.item.quantity}
          </p>
          <p className='text-lg font-semibold'>
            Total: ${props.item.totalPrice}
          </p>
           <button onClick={decrementCartItem} className='font-semibold text-lg bg-blue-950 px-5 py-2 text-white rounded-sm cursor-pointer hover:opacity-75'>-</button>
           <button onClick={incrementCartItem} className='font-semibold text-lg bg-blue-950 px-5 py-2 text-white rounded-sm cursor-pointer hover:opacity-75'>+</button>

        </div>
      </div>
  
  )
}

export default CartItem
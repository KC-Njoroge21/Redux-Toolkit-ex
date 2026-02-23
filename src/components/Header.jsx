import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart-slice'

const Header = () => {

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch()

  const showCart = () => {
    dispatch(cartActions.setShowCart())
  }

 

  return (
   <header className='flex justify-between p-3 shadow-lg items-center'>
    <h1 className='lg:text-3xl text-lg font-semibold'>Kevin Tech shop</h1>
    <button onClick={showCart}  className='lg:text-2xl border text-lg rounded-lg cursor-pointer border-red-800 p-2'>
      Cart: {cartQuantity}
    </button>
   </header>
  )
}

export default Header
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const Cart = () => {

  const itemsArray = useSelector(state => state.cart.itemList)

  const produts = itemsArray.map((item, index) => {
    return (
      <CartItem key={item.id} item={item} id={item.id} />
    )
  })

  return (
    <div className='flex flex-col gap-3 p-3 items-center'>
      <h2 className='text-2xl font-semibold'>Your Cart</h2>
      {produts}
      </div>
  )
}

export default Cart
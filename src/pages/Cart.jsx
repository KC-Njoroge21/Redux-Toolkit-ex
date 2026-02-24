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
    <div className=''>
      <h2 className='text-2xl text-center font-semibold'>Your Cart</h2>
      <div className='flex flex-col items-center gap-3 p-3'>
        {produts}
      </div>
        <h2 className='text-center text-2xl font-semibold mb-4'>Total: 200</h2>
        <div className=' flex justify-center '>
        <button className='border cursor-pointer p-2 text-lg bg-sky-300 font-semibold text-white rounded-lg '>Place Order</button>
      </div>
      </div>
  )
}

export default Cart
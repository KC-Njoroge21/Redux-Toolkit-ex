import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'

const Product = (props) => {

  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(cartActions.addToCart())
  }

  return (
    <div className='shadow-lg p-4 w-fit'>
      <img className='w-50 h-40 object-cover' src={props.items.imgURL} alt="" />
      <div>
        <h1 className='text-lg font-semibold'>{props.items.name}</h1>
        <p className='text-3xl font-semibold text-center text-gray-600'>${props.items.price}</p>
      </div>
      <div className='flex justify-center'>
        <button onClick={addItemToCart} className='bg-amber-500 p-2 text-white font-semibold rounded-sm'>Add to Favorites</button>
      </div>
    </div>
  )
}

export default Product
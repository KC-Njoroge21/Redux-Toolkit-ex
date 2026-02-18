import React from 'react'

const Product = (props) => {
  return (
    <div className='shadow-lg p-4 w-fit'>
      <img className='w-50 h-40 object-cover' src={props.items.imgURL} alt="" />
      <div>
        <h1 className='text-lg font-semibold'>{props.items.name}</h1>
        <p className='text-3xl font-semibold text-center text-gray-600'>${props.items.price}</p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-amber-500 p-2 text-white font-semibold rounded-sm'>Add to Favorites</button>
      </div>
    </div>
  )
}

export default Product
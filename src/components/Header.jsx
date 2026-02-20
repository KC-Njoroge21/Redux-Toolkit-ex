import React from 'react'

const Header = () => {
  return (
   <header className='flex justify-between p-3 shadow-lg'>
    <h1 className='text-3xl font-semibold'>Kevin Tech shop</h1>
    <button className='text-2xl border rounded-lg cursor-pointer border-red-800 p-2'>
      Cart: 0
    </button>
   </header>
  )
}

export default Header
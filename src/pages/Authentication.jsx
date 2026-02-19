import React from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Authentication = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
 e.preventDefault();

 dispatch(authActions.login())


  }

  return (
    <div>
      <form className='w-1/3 min-w-75 mx-auto shadow-lg p-3 border flex flex-col gap-6 border-gray-200' onSubmit={handleSubmit} action="">
      <h1 className='text-center font-semibold text-lg'>Authentication Page</h1>
        <div className='flex flex-col'>
          <label className='text-lg font-semibold' htmlFor="id">Id:</label>
          <input className='border outline-0 p-2 border-gray-200 rounded-lg' placeholder='Enter ID No' type="text" name='id' id='id' />
        </div>

        <div className='flex flex-col'>
          <label className='text-lg font-semibold' htmlFor="password">Password:</label>
          <input className='border p-2 outline-0 border-gray-200 rounded-lg' type="password" name='password' placeholder='Input password' id='password' />
        </div>

        <div className='flex justify-center'>
          <button className='bg-sky-500 text-white p-2 rounded-lg text-lg uppercase w-1/3'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Authentication
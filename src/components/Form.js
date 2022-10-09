import React from 'react'

const Form = () => {
  return (
    <div className='flex w-fit mx-auto my-32'>
      <div className='bg-purple-400 p-4 rounded-2xl'>
        <h1 className='font-bold text-xl text-center font-mono'>Sign In</h1>
        <form className='flex flex-col p-4 gap-4'>
          <div className='flex flex-col'>
            <label className='mb-2 font-mono' htmlFor="email">Email</label>
            <input name='email' className='bg-gray-200 px-2 py-1 rounded' type="text" />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 font-mono' htmlFor="password">Password</label>
            <input name='password' className='bg-gray-200 px-2 py-1 rounded' type="password" />
          </div>
          <button type='submit' className='bg-purple-700 text-white p-1 rounded'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Form
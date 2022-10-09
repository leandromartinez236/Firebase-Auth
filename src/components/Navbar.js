import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-purple-400 h-20 py-4 px-12'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl' >FirebaseAuth</h1>
        <div>
          <ul className='flex gap-4'>
            <li className='font-bold'>Sign In</li>
            <li className='font-bold'>Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-purple-400 h-20 py-4 px-12'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <h1 className='font-bold text-3xl'>FirebaseAuth</h1>
        </Link>
        <div>
          <ul className='flex gap-4'>
            <Link to='/register'>
              <li className='font-bold'>Register</li>
            </Link>
            <Link to='/login'>
              <li className='font-bold'>Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
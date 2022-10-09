import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-purple-400 h-20 py-4 px-12'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl' >FirebaseAuth</h1>
        <div>
          <ul className='flex gap-4'>
            <Link to='/sigin'>
              <li className='font-bold'>Sign In</li>
            </Link>
            <Link to='/signup'>
              <li className='font-bold'>Sign Up</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
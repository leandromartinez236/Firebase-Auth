import React from 'react'
import Form from '../components/Form'
import { registerFields } from '../data/data'
const RegisterScreen = () => {
  return (
    <div className='flex flex-col w-full mx-auto my-16 gap-4'>
      <h1 className='font-bold text-xl text-center font-mono'>Register</h1>
      <Form buttonName='Sig In' fields={registerFields} />
    </div>
  )
}

export default RegisterScreen
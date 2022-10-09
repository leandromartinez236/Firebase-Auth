import React from 'react'
import Form from '../components/Form'
import { sigInFields } from '../data/data'
const SigIn = () => {
  return (
    <div className='flex flex-col w-full mx-auto my-16 gap-4'>
      <h1 className='font-bold text-xl text-center font-mono'>Sign In</h1>
      <Form buttonName='Sig In' fields={sigInFields} />
    </div>
  )
}

export default SigIn
import React, { useState } from 'react'
import Form from '../components/Form'
import { registerFields } from '../data/data'
const RegisterScreen = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(data);
  }
  return (
    <div className='flex flex-col w-full mx-auto my-16 gap-4'>
      <h1 className='font-bold text-xl text-center font-mono'>Register</h1>
      <Form onChange={onChange} onSubmit={onSubmit} buttonName='Register' fields={registerFields} />
    </div>
  )
}

export default RegisterScreen
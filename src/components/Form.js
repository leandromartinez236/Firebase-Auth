import React from 'react'

const Form = ({ buttonName, fields, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className='flex flex-col p-6 gap-4 bg-purple-400 p-4 rounded-2xl w-2/4 sm:w-2/4 md:w2/4 lg:w-1/4 mx-auto'>
      {fields?.map((field) => (
        <div key={field.name} className='flex flex-col'>
          <label className='mb-2 font-mono' htmlFor={field.name}>{field.name}</label>
          <input onChange={onChange} placeholder={field.placeholder} name={field.name} className='bg-gray-200 px-2 py-1 rounded' type={field.type} />
        </div>
      ))}
      <button type='submit' className='bg-purple-700 text-white p-1 rounded'>{buttonName}</button>
    </form>
  )
}

export default Form
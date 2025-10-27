import React from 'react'

const FormInput = ({ label, id, ...props }) => {
  return (
    <div>
      <label 
        htmlFor={id}
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        {label}
      </label>
      <input 
        id={id} 
        {...props}
        className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50'
      />
    </div>
  )
}

export default FormInput

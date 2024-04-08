import React from 'react'
import { TextField } from '@mui/material';


const InputField = ({ id, type, placeholder, onChange, value, label, width }) => {
  const fieldWidth = width || '100%'
  return (
    <>
      <div className="mb-4">
        <label 
          htmlFor={type}
          className="block mb-1 text-sm font-medium text-gray-200"
        >
          {label}
        </label>

        <TextField
          value={value}
          // label={label}
          onChange={onChange}
          placeholder={placeholder}
          sx={{
            color: '#111827',
            backgroundColor: '#F9FAFB',
            borderRadius: '10px',
            width: fieldWidth
          }}            
        />
      </div> 
    </>
  )
}

export default InputField

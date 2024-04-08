import React from 'react'
import { TextField, MenuItem } from '@mui/material';


const InputField = ({ id, type, options, onChange, value, label, width }) => {
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
          onChange={onChange}
          select
          sx={{
            color: '#111827',
            backgroundColor: '#F9FAFB',
            borderRadius: '10px',
            width: fieldWidth
          }}            
        >

          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div> 
    </>
  )
}

export default InputField






// <TextField
// id="outlined-select-currency"
// select
// label="Select"
// defaultValue="EUR"
// helperText="Please select your currency"
// >
// {currencies.map((option) => (
// <MenuItem key={option.value} value={option.value}>
//   {option.label}
// </MenuItem>
// ))}
// </TextField>


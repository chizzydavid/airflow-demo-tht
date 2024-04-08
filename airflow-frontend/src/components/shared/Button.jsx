import React from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const ButtonComp = ({ type, onClick, label, isLoading }) => {
  return (
    <div className='w-full button_wrapper'>
      <Button
        variant="contained"
        onClick={onClick}
        size='large'
        fullWidth={true}
      >
        { isLoading
          ? <Box> 
              <CircularProgress 
                size={20}
                color='inherit'
              /> 
            </Box>
          : label
        }
      </Button>
    </div>
  )
}

export default ButtonComp


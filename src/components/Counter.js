import { Button , Box} from '@mui/material';
import { useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
         setCount((prevcount) => prevcount + 1)
    }
    const handleDecrement = () => {
         setCount((prevcount) => prevcount > 0 ? prevcount - 1 : 0)
    }
    
  return (
    <Box sx={{ justifySelf:"center", mt: '20px'}}>
    
    
    <Button onClick={handleIncrement} textAlign="center" variant='contained'>
     INCREMENT
    </Button>
    <h2 style={{textAlign:"center"}}>Count: {count}</h2>
    <Button onClick={handleDecrement}textAlign="center" variant='contained'>
     DECREMENT
    </Button>
   </Box>
  )
}

export default Counter;
import { Button , Paper, TextField, Box } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import React from 'react'

const Login = () => {


  return (
    <div>
        <form>
            <Paper>
            <Box marginTop={5} padding={5} alignItems={'center'}>
            <TextField label='EmailId'  helperText='Please Enter a Email Id'/>
            <TextField label='password' helperText='Please Enter a password'/>
            <h3>
                <Button
                variant='outlined'
                color='primary'
                onClick={() => alert('Clicked')}
                startIcon=<LoginIcon />
                >
                 Login</Button></h3>
            </Box>
            </Paper>
        </form>
    </div>
  )
}

export default Login
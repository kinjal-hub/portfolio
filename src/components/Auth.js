import React from 'react'
import  { Box, Button, TextField, Typography } from '@mui/material'

const Auth = () => {
  return (
    <div>
        <form>
            <Box display='flex'
            flexDirection={"column"}
            maxWidth={400}
            alignItems='center'
            justifyContent='center'
            margin='auto'
            marginTop={5}
            padding={3}
            borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{
                    ":hover": {
                      boxShadow:'10px 10px 20px #ccc',
                    }
                }}
            >
            </Box>
            <Typography>Login</Typography>
            <TextField/>
            <TextField/>
            <TextField/>
            <h3><Button>Login</Button></h3>
           
        </form>

    </div>
  )
}

export default Auth

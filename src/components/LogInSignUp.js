import MailLockIcon from '@mui/icons-material/MailLock';
import {Container, Paper, Avatar, Typography, Box, TextField, Button, Grid, Link} from '@mui/material'
import { useState } from 'react';

const LogInSignUp = () => {
    const [ action, setAction ] = useState("Sign In")
  return (
    <div>
       <Container maxwidth='xs'>
         <Paper elevation={10} sx={{marginTop:10, padding:2}}>
            <Avatar
            sx={{
                mx:'auto',
                bgcolor:'primary.main',
                textAlign: 'center',
                mb: '1'
            }}>
            <MailLockIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
             {action}
            </Typography>
            <Box component='form' noValidate sx={{mt:1}}>
                {action === "Sign Up" && (
                   <TextField
                     placeholder='Enter Username'
                     required
                     fullWidth
                     sx={{mb:2}}/>
                )} 
                {action !== "Forgot Password" && (
                    <TextField
                      placeholder='Enter password'
                      type='password'
                      required
                      fullWidth
                      sx={{mb:2}}/>
                )}
              
             <TextField
              placeholder='Enter Email'
              type='email'
              required
              fullWidth
              sx={{mb:2}}/>
              
              <Button type='Submit' variant='contained' color='primary' fullWidth sx={{mt:1}}>{action}</Button>
            </Box>
            <Grid Container justifyContent="space-between" sx={{mt:1}}>
               <Grid item> 
                   <Link component='button' onClick={() => {setAction("Forgot Password")}}>Forgot Password</Link>
               </Grid>
               {action === "Sign In" ? (
                <Grid item> 
                   <Link component='button' onClick={() => {setAction("Sign Up")}}>Sign Up</Link>
               </Grid>
               ) : (
                <Grid item> 
                   <Link component='button' onClick={() => {setAction("Sign In")}}>Already have an account? SignIn</Link>
               </Grid>
               )}
               
               
            </Grid>
        </Paper>
       </Container>
    </div>
  )
}

export default LogInSignUp


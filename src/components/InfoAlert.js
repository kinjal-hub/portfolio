import {  Typography, Container, useMediaQuery, useTheme } from '@mui/material'


const InfoAlert = () => {
  
  const theme = useTheme();
   
  const ShowName = useMediaQuery(theme.breakpoints.up('md'));
  const name = 'ERICA';
  const name1 = 'EVA';

 return (
    <div>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          
          <Typography sx={{ fontSize:{ xs:'1rem', sm:'1.5rem', md:'2rem' }}}>
            {ShowName ? name : name1}
          </Typography>
           
         </Container>
    </div>
  )
}

export default InfoAlert;
import { Container, Box  } from '@mui/material'
import ResponsiveCard from './ResponsiveCard'
import Profile from './Profile'

const ResponsiveSection = ({ backgroundColor, border, borderRadius, height, width, title, content, data }) => {
 console.log(typeof(content));
  return (
   
    <Box marginTop={5} mx={5} justifySelf='center'
         sx={{
          backgroundColor: backgroundColor || 'white' ,
          border: border || '3px solid black',
          display: 'flex',
          borderRadius: borderRadius || '5%',
          height: height || '650px',
          width: width || '100%',
         
        // Mobile (<600px)
        padding: '16px', // Small padding
        maxWidth: '100%', // Full-width
        backgroundColor: 'lightgreen',
        
        // Tablet (600px-960px)
        '@media (min-width: 600px) and (max-width: 960px)': {
          padding: '24px', // Medium padding
          maxWidth: '90%',
          backgroundColor: 'lightblue',
        },
        // Desktop (>960px)
        '@media (min-width: 960px)': {
          padding: '32px', // Standard padding
          maxWidth: '1200px',
          backgroundColor: 'lightpink',
        },
          justifyContent: 'center',
          justifyItems: 'center',
        }} >
      <Container> 
          
         {data && <ResponsiveCard data={data}/>}
         <Profile />
       {content}
       {title}
       
        </Container>
    </Box>
)}
export default ResponsiveSection

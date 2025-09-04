
import { Container, Box, Typography } from '@mui/material'
const ResponsiveSection = ({ Students, backgroundColor, border, borderRadius, height, width, title, content  }) => {
if(!Array.isArray(Students)) {
  <Typography>Student data is not an Array</Typography>
}
  return (
    <Box marginTop={5} mx={5} justifySelf='center'
         sx={{
          backgroundColor: 'secondary.light' || 'white' ,
          border: border || '3px solid black',
          borderRadius: borderRadius || '5%',
          height: height || 'auto',
          width: '600px' || '100%',
         
        // Mobile (<600px)
        padding: '16px', // Small padding
        maxWidth: '100%', // Full-width
        
        // Tablet (600px-960px)
        '@media (min-width: 600px) and (max-width: 960px)': {
          padding: '24px', // Medium padding
          maxWidth: '90%',
        },
        // Desktop (>960px)
        '@media (min-width: 960px)': {
          padding: '32px', // Standard padding
          maxWidth: '1200px',
        },
          justifyContent: 'center',
          justifyItems: 'center',
        }} >
      <Container>
          <h2>Student Information List</h2>
           {Students && Students.length > 0 ? ( // check if student array  has empty or not
             Students.map(student => (
          <Typography  key={student.id} >
            <h4>Name: {student.name}</h4>
            <h4>Age: {student.Grade}</h4>
          </Typography>
        ))
      ) : (
        <Typography>No student data available.</Typography> 
      )}
          {content}
          {title}
        </Container>
    </Box>
)}
export default ResponsiveSection


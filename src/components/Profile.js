import { Card, CardContent,Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
const profile = () => {
  return (
    <Card
    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, maxWidth:600, margin: 'auto', mt:5 }}>
     <CardContent>
       <Typography boxShadow={2}>
             <h1>Kinjal Parmar</h1>
       </Typography>
       <Typography textAlign='left' padding={3}>
        <h3>Goals</h3>
            •  To bring my strong dedication, responsibility, and motivation.<br />
            •  To utilize my computer engineering Qualifications. <br />
            •  To solve problems in effective/creative manner. <br />
            •  To keep up with the cutting edge of technologies in align with organization goal. <br />
          </Typography>
       <Divider />
       <Typography textAlign='left'>
         <h3>Technical skills</h3>
           • React  <br />
           • Javascript <br />
           • Node.js <br />
        </Typography>
       <Divider />
       <Typography textAlign='left'>
        <h4>Projects</h4>
        • MERN Project(node js)  <br />
        • Restuarant project(React)  <br />
        • NetflixGpt(React)  <br />
        </Typography>
       <Divider />
       <Typography textAlign='left'>
        <h4> Hobbies </h4>
          • Reading <br />
          • Travelling <br />
        </Typography>
     </CardContent>
    </Card>
  )
}

export default profile
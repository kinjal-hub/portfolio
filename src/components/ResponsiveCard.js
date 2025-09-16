import {Card, CardContent, CardMedia, Typography, Box } from '@mui/material'

const ResponsiveCard = ({data}) => {
  
  return (
    <Box sx={{ display: 'flex', flexWrap:'wrap', flexDirection: { xs: 'column', sm: 'row' } }}>
    {data?.map((item, index) => ( 
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, maxWidth:400, margin: 'auto', mt:5 }} key={index}>
      <CardMedia
        component="img"
        sx={{ width: { xs: '100%', sm: 150 }, height: { xs: 200, sm: 'auto' } }}
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'warning.main'}}>
          {item.title}
        </Typography>
        {item.info.map((infiItem, infoIndex) => (
        <Typography variant="body2" sx={{ color: 'text.primary' }} key={infoIndex}>
          • {infiItem}
        </Typography>
        ))}
      </CardContent>
    </Card>
    ))}
    </Box>
  )
}

export default ResponsiveCard
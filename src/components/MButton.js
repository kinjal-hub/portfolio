import { Button, Stack, IconButton, ButtonGroup } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';




const MButton = () => {
  
    
  return (
    <Stack spacing={4}>
    <Stack spacing={2} padding ={5} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>outlined</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
         <Button variant='contained' color='primary'>
          primary
         </Button>
         <Button variant='contained' color='secondary'>
          secondary
         </Button>
         <Button variant='contained' color='error'>
          Error
         </Button>
         <Button variant='contained' color='info'>
          info
         </Button>
         {/* <Button variant='contained' color='warning'>
          warning
         </Button>
         <Button variant='contained' color='success'>
          success
         </Button> */}
    </Stack>
    <Stack spacing={2} direction='row'>
       <Button variant='contained' color='secondary' size='small'>
        small
       </Button>
       <Button variant='contained' color='success' size='medium'>
        medium
       </Button>
       <Button variant='contained' color='warning' size='large'>
        large
       </Button>
    </Stack>
     <Stack spacing={2} direction='row'>
       <Button variant='contained' color='primary' startIcon={<DeleteIcon/>} disableElevation >
        Delete
        </Button>
        <Button variant='contained' color='primary' endIcon={<SendIcon />} disableRipple onClick={() => alert("Clicked")} >
        Send
        </Button>
        <IconButton aria-label='send' color='success' size='small'>
           <SendIcon />
        </IconButton>
     </Stack>
     <Stack direction='row'>
      <ButtonGroup
      variant="contained"
      orientation="horizontal"
      size='small'
      color="secondary"
      area-label="alingment button group">
      <Button>Left</Button>
      <Button>center</Button>
      <Button>right</Button>
      </ButtonGroup>
     </Stack>
     
    </Stack>
  )
}

export default MButton

import { InputAdornment, Stack, TextField } from "@mui/material"
import { useState } from "react"

const MuiForm = () => {
    const [value, setValue ] = useState('');
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant="outlined"> Name </TextField>
            <TextField label='Name' variant="filled"> Name </TextField>
            <TextField label='Name' variant="standard"> Name </TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='small secondary' size='small' color="secondary" />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form Input' required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={
                !value ? 'Requuired' : 'do not share  your  password  with anyone'
            }
            />
            <TextField 
            label='password'
            type='password'
            helperText='Do not share your password with anyone'
            disabled
            />
            <TextField label='Read only' InputProps={ {readOnly: true} } />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount'
            InputProps={{
               startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            />
            <TextField label='Weight'
            InputProps={{
               endAdornment: <InputAdornment position="end">kg</InputAdornment>
            }}
            />
        </Stack>
    </Stack>
  )
}

export default MuiForm
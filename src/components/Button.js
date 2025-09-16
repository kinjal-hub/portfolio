import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
// import ResponsiveCard from './components/ResponsiveCard'

export default function LoadingButtons() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Button>Submit</Button>
     </Stack>
    </Stack>
  );
}

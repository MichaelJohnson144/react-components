import { styled, TextField } from '@mui/material';

export const CustomTextField = styled(TextField)({
  input: {
    color: 'white',
  },
  label: {
    fontSize: 17,
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label.Mui-focused.Mui-error': {
    color: 'red',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      zIndex: -10,
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor: 'rgb(0 0 0 / 35%)',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiOutlinedInput-root.Mui-error': {
    '& fieldset': {
      zIndex: -10,
      borderWidth: 2,
      borderColor: 'red',
      backgroundColor: 'rgb(0 0 0 / 35%)',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'red',
    },
  },
});

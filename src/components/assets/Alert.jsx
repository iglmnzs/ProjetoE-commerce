import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState } from 'react';

export default function Alert(props) {

  const [open, setOpen] = useState(true);

  //warning, info, error, succes
  const type = props.type;
  const title = props.title;
  const msg = props.msg;

  return (
    <>
      { open && <MuiAlert
          severity={type}
          onClose={() => {setOpen(false)}}>
          <AlertTitle>{title}</AlertTitle>
          {msg}
      </MuiAlert>}
    </>
  )
}

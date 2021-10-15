import * as React from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

export default function TransitionAlerts(props) {

  return (
    <>
         <Alert
          severity={`${props.alert.type}`}
          color={`${props.alert.type}`}
          sx={{ 
            mb: 2,
            height: '4rem',
            backgroundColor: props.alert.type===''?'':props.alert.type==='error'?'#f29f4a':'#A7E074',
            color: props.alert.type==='success'?'#1EA82D':'#D32F2F'
            
          }}
        >
          <AlertTitle>
            {props.alert.type}
          </AlertTitle>
          {props.alert.msg}
        </Alert>
    </>
  );
}

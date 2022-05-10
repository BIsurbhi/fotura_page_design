import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';



export default function Earnings() {
  return (
    <React.Fragment>
      <Title >Earnings</Title>
      <Typography component="p" variant="h4">
        $300.40
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Today's Earning
      </Typography>

      <Typography component="p" variant="h4">
      This week  $300.40
      </Typography>

     
    </React.Fragment>
  );
}
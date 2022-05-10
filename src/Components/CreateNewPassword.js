import * as React from 'react';
import { Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

import { useNavigate} from 'react-router-dom'
 

const useStyle = makeStyles({
  center : {
    display:"flex",
    alignContent:"center",
    justifyContent:"center",
    padding:'50px'

  },
   space: {
     display:'column',
     alignItems:'center',
     justifyContent:'center',
     marginTop: 150
   }
})

export default function CreateNewPassword(){
 const classes = useStyle();
 var naviator = useNavigate()
 const signinpage=()=>{
    naviator("/signin")
 }


  return(
  <div>
    <Grid container spacing={2} className={classes.center} >
    <div className={classes.space}>
            <div style={{fontWeight:'bolder'}}>
              <h3>Create New Password</h3>
            </div>
            <div>
              password must be 8 character long.
            </div>
            <div style={{marginTop:10}}>
            <TextField id="outlined-basic" label="password" variant="outlined" type='password' />
            </div>
            <div style={{marginTop:10}}>
            <TextField id="outlined-basic" label="Confirm-password" variant="outlined" type='password' />
            </div>
            <Button style={{marginTop:10}} onClick={()=>signinpage()} variant="contained">Reset</Button>
             
             </div>
     </Grid>
     </div>
     

  )
}
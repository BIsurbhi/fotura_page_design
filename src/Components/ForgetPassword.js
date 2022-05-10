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

export default function ForgetPassword(){
 const classes = useStyle();
 var naviator = useNavigate()
 function CreatePassword() {
   naviator("/createnewpassword")
 }


  return(
  <div>
    <Grid container spacing={2} className={classes.center} >
    <div className={classes.space} >
            <div style={{fontWeight:'bolder'}}>
              <h3>Forget Password?</h3>
            </div>
            <div>
              please enter email to reset your password
            </div>
            <div style={{marginTop:10}}>
            <TextField id="outlined-basic" label="Email id" variant="outlined" />
            </div>
            
            <Button onClick={()=>CreatePassword()} style={{marginTop:10}} variant="contained">Send</Button>
             
             </div>
     </Grid>
     </div>
     

  )
}
import {React,useState} from 'react';
import { Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
 import { Link, Outlet } from "react-router-dom";
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

export default function SignIn(){
 const classes = useStyle();

 const [open,setOpen] = useState('')
 const [forgetpw,setForgetpw] =useState('')
 
 var naviator = useNavigate()


 function movetodashboard() {
   naviator("/dashboard")
 }


  return(
  <div>
    <Grid container spacing={2} >
     <Grid item xs={8} >
      
       <img src="./login.png" width='500px'  height='400px' className={classes.center} />
         
     </Grid>
     <Grid item xs={4} >
       <div className={classes.space}>
            <div style={{fontWeight:'bolder'}}>
              <h3>Welcome to Fotura</h3>
            </div>
            <div>
              please enter email and password to login
            </div>
            <div style={{marginTop:10}}>
            <TextField id="outlined-basic" label="Email id" variant="outlined" />
            </div>
            <div style={{marginTop:10}}>
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password' />
            </div>
            <div style={{marginTop:10}}>
              Password must be 8 character long
            </div>
            <Button style={{marginTop:10}} onClick={()=>movetodashboard()} variant="contained">Sign In</Button>
             <div style={{marginTop:10}}>
               <Link color='#000' to='/forgetpassword'>forget password?</Link>
             </div>
             </div>
     </Grid>
     </Grid>
     <Outlet />
     </div>
     

  )
  
}
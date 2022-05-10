import * as React from 'react';
import { Grid } from '@mui/material';
import { Mainlistitems, Secondarylistitems } from './ListItems';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Chart from './Chart';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Earnings from './Earnings';
import Users from './Users'


export default function DashBoard() {
    
    
    function dashboardheader(){
        return (
          <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{backgroundColor:'transparent', color: '#000'}}>
              <Toolbar>
                
                
                  <div style={{flexGrow:1, fontSize:18, fontWeight:'bold', flexDirection:'column'}}>
                    <div>
                      Dashboard
                    </div>
                    </div>
                   
                
  
                <div>
                  <div style={{ display:'flex', fontSize:14, flexDirection:'column'}}>
                    jonny singh
                  </div>
                  <div style={{ display:'flex', fontSize:10, flexDirection:'column'}}>
                    jonny@gmail.com
                  </div>
                </div>
                <Avatar style={{margin:5}}  src="jonny.jpg" />
              </Toolbar>
            </AppBar>
          </Box>
        );
       }

       return(
           <div>
               <Grid container spacing={2}>
                <Grid item xs={3} style={{marginTop:80, paddingLeft:40}}>
                {Mainlistitems}
            <Divider sx={{ my: 1 }} />
            {Secondarylistitems}
                </Grid>


                <Grid item xs={9}>
                {dashboardheader()}
               
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Earnings />
                </Paper>
              </Grid>
              {/* Users */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Users />
                </Paper>
              </Grid>
            </Grid>
            
          </Container>
        
          
                
              
                
                </Grid>
               
               </Grid>    
           </div>
       )

}
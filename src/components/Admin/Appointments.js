import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import HeaderPage from '../Admin/Header/HeaderPage'
import SearchPage from '../../pages/DataTable/index'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Appointments() {
    const classes = useStyles();
    
  return (
    
    <div className={classes.root}>
      <div>
         <HeaderPage/>
      </div>
      <br/>
        <div className='div-logo'>
          <img src='/img/logo.png' alt='kapiva-logo' width="15%" height="30%"  className='img-logo' />
        </div>
        <br/>

        <Grid container spacing={3}>
         <Grid item xs={12}>
           <Paper className={classes.paper}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <div className='div-left-contain'>
                  Doctors Consultation Dashboard
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='div-right-contain'>
                 <span className='span-pulldata'> <DataUsageIcon/></span>Pull Data
                </div>
              </Grid>
           </Grid>  
          </Paper>
        </Grid>
      </Grid>  
       <br/><br/>
      {/* doctor consulting cart start */}
      <Grid container spacing={3} id="container-id" >
          <Grid itemxs={12} lx={12} sm={12} md={12} lg={12}>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <div className='div-Total-Appointments'>
                  <Paper elevation={3} className={classes.paper}>
                    <span className='span-T-A'>Total Appointments</span>
                  </Paper>
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className='div-Pending'>
                  <Paper elevation={3} className={classes.paper}>
                    <span className='span-pending'>Pending</span>
                  </Paper>
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className='div-Completed'>
                  <Paper elevation={3} className={classes.paper}>
                    <span className='span-c'>Completed</span>
                  </Paper>
                </div>
              </Grid>
            </Grid> 
          </Grid>
        </Grid>  
        <br/><br/>
      {/* doctor consulting cart end */}
       
      <Grid container spacing={3}>
        <Grid item xs={12}>
         
            <span className='span-appoint'>Appointments</span>
            <br/>
         
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper >

           {/* start serarch page code */}
              <SearchPage/>
           {/* end search page code */}

          </Paper>
        </Grid>
      </Grid>  
    </div>
  )
}

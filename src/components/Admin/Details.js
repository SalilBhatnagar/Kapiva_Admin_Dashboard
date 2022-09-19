import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));
  

export default function Details() {
    const classes = useStyles();
  return (
    <div className='main-container-details'>
         <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                   <div className='div-detail-info'>
                        
                            <span className='span-pdf-detail'>
                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                                <ListItem button divider>
                                    <ListItemText primary="Name" /><span>Ram Sharma</span>
                                </ListItem>
                                <Divider />
                                <ListItem button divider>
                                    <ListItemText primary="Email" /><span>ram@gmail.com</span>
                                </ListItem>
                                <ListItem button divider>
                                    <ListItemText primary="Gender" /><span>Male</span>
                                </ListItem>
                                <Divider light />
                                <ListItem button divider>
                                    <ListItemText primary="age" /><span>30</span>
                                </ListItem>
                                <ListItem button divider>
                                    <ListItemText primary="Product 1" /><span>Aloe Garcinia</span>
                                </ListItem>
                                <ListItem button divider>
                                    <ListItemText primary="Product 2" /><span>Get Slim mix</span>
                                </ListItem>
                                <ListItem button divider>
                                    <ListItemText primary="Product 3" /><span>Just Lose It Combo</span>
                                </ListItem>
                                <ListItem button divider>
                                    <ListItemText primary="Product 4" /><span>Apple Cider Vineger</span>
                                </ListItem>
                                <ListItem button divider>
                                    <ListItemText primary="Doctor Alotted" /><span>Sushil Sharma</span>
                                </ListItem>
                                <ListItem button divider>
                                   <ListItemText primary="Cart Link" /><PictureAsPdfIcon/>
                                </ListItem>
                                <br/><br/>
                                    
                                </List>
                            </span> 
                        </div>  
                     </Paper>
                </Grid>
            </Grid>
          </div> 
    </div>
  )
}

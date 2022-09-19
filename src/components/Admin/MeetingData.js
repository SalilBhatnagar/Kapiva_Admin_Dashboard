import React,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CreatePrescription from '../Admin/CreatePrescription';
import Details from '../Admin/Details';
import AppBar from '@material-ui/core/AppBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import HeaderPage from '../Admin/Header/HeaderPage'

// create prescription start code

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
}));





// end the code



export default function MeetingData(props) {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    
    // create prescription useState data start
      const [age, setAge] = useState('');
      const [gender, setGender] = useState('');
      const [direction, setDirection] = useState('');
      const [therapy, setTherapy] = useState('');
      const [attended, setAttended] = useState('');
    
      const handleChangeAge = (event) => {
        setAge(event.target.value);
      };
    
      const handleChangeGender = (event) => {
        setGender(event.target.value);
      };
    
      const handleChangeDirection = (event) => {
        setDirection(event.target.value);
      };
    
      const  handleChangeTherapy = (event) => {
        setTherapy(event.target.value);
      };
    
      const  handleChangeAttended = (event) => {
        setAttended(event.target.value);
      };
  
    // useState data end

    // data is Appointment datalist start
    const [getCurrentdata, setCurrentdata] = useState([]);

    useEffect(()=>{
       currentData();
    },[])

    const currentData= async()=>{
        const dataId = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log("catId",dataId);
        const showDataId = await dataId.json();
        setCurrentdata(showDataId)
     }

    // datalist end

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }  



  return (
    <div div className={classes.root}>
       <div>
          <HeaderPage/>
       </div>
       <br/>
        <div className='div-logo'>
          <img src='/img/logo.png' alt='kapiva-logo' width="15%" height="30%"  className='img-logo' />
          <span className='span-back-link'>
            <Link to="/">
              <ArrowBackIcon/>
            </Link>
          </span>
        </div>
        <br/>
        <Grid container spacing={3}>
            <Grid item xs={12} lx={12} sm={12} md={12} lg={12}>
               <Paper className={classes.paper}>
                <Grid item xs={6} lx={6} sm={6} md={6} lg={6}>
                    <div className='div-meetin-left'>
                    <Grid item xs={6}>
                    <spna className="span-meeting">Meeting Data</spna>
                    </Grid>
                        
                    </div>
                    <div className='div-meetin-right'>
                    <Grid item xs={6} lx={6} sm={6} md={6} lg={6}>
                    <spna className="span-panding  ">PANDING</spna>
                    </Grid>
                    </div>
                </Grid>
               </Paper>
            </Grid>
       </Grid> 
       <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/* meeting data start code */}
            <div className={classes.root}>
                              <AppBar position="static">
                                <Tabs id="id-tabs" value={value} onChange={handleChange} aria-label="simple tabs example">
                                  <Tab label="Create Prescription" {...a11yProps(0)} />
                                  <Tab label="Details" {...a11yProps(1)} />
                                  {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                                </Tabs>
                              </AppBar>
                              <div className='div-itmeone-form'>
                                <TabPanel value={value} index={0}>
                                
                        <div className='div-main-container'>
                            <span className='span-UserId'>{props.match.params.id}</span><br/>

                            {/* <span className='span-UserName'>{props.match.params.name}</span> */}
                        </div>
                                 
                            {/* <CreatePrescription/> */}

                            {/* create prescription insert field is start code  */}
                            <div className='div-main-container-createpres'>
                                <Container>
                                  <CssBaseline />
                                  <div className={classes.paper}>
                                    <form  method='Post' >
                                      <Grid container spacing={2}>

                                   <Grid item xs={12} sm={12}>
                                      <FormControl variant="outlined" className={classes.formControl} fullWidth>  
                                  <TextField
                                    id="outlined-basic"
                                    label="Name" 
                                    variant="outlined"
                                    value={props.match.params.name}
                                   />
                                 </FormControl>
                                      </Grid>

                                      <Grid item xs={12} sm={6}>
                                  
                                    {/* Age start  */}
                                    {/* <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                                    <Select
                                      native
                                      value={age}
                                      onChange={handleChangeAge}
                                      label="Age"
                                      inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                      }}
                                    >
                                      <option aria-label="None" value="" />
                                      <option value="18">18</option>
                                      <option value="20">20</option>
                                      <option value="25">25</option>
                                      <option value="30">30</option>
                                      <option value="32">32</option>
                                      <option value="35">35</option>
                                    </Select>
                                  </FormControl> */}
                                  <FormControl variant="outlined" className={classes.formControl} fullWidth>  
                                  <TextField
                                    id="outlined-basic"
                                    label="Age" 
                                    variant="outlined"
                                    value={props.match.params.name}
                                   />
                                 </FormControl>
                                  {/* Age end */}
                                        </Grid>

                                <Grid item xs={12} sm={6}>
                                {/* Gender start  */}
                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                    <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                    <Select
                                      native
                                      value={gender}
                                      onChange={handleChangeGender}
                                      label="Gender"
                                      inputProps={{
                                        name: 'gender',
                                        id: 'outlined-age-native-simple',
                                      }}
                                    >
                                      <option aria-label="None" value="" />
                                      <option value="Male">Male</option>
                                      <option value="Female">Femal</option>
                                      <option value="Other">Other</option>
                                    </Select>
                                  </FormControl>
                                {/* Gender end */}
                                      </Grid>

                                        <Grid item xs={12} sm={6}>
                                {/* Direction start  */}
                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                    <InputLabel htmlFor="outlined-age-native-simple">Direction</InputLabel>
                                    <Select
                                      native
                                      value={direction}
                                      onChange={handleChangeDirection}
                                      label="Direction"
                                      inputProps={{
                                        name: 'irection',
                                        id: 'outlined-age-native-simple',
                                      }}
                                    >
                                      <option aria-label="None" value="" />
                                      <option value="Male">Male</option>
                                      <option value="Female">Femal</option>
                                      <option value="Other">Other</option>
                                      </Select>
                                      </FormControl>
                                    {/* Direction end */}
                                
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                {    /* Therapy start  */}
                                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                    <InputLabel htmlFor="outlined-age-native-simple">Therapy</InputLabel>
                                    <Select
                                      native
                                      value={therapy}
                                      onChange={handleChangeTherapy}
                                      label="Therapy"
                                      inputProps={{
                                        name: 'therapy',
                                        id: 'outlined-age-native-simple',
                                      }}
                                    >
                                      <option aria-label="None" value="" />
                                      <option value="Male">Male</option>
                                      <option value="Female">Femal</option>
                                      <option value="Other">Other</option>
                                    </Select>
                                    </FormControl>
                                  {/* Therapy end */}
                                  </Grid>

                                  <Grid item xs={12}>
                                  {/* Attended start  */}
                                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                    <InputLabel htmlFor="outlined-age-native-simple">Attended</InputLabel>
                                    <Select
                                      native
                                      value={attended}
                                      onChange={handleChangeAttended}
                                      label="Attended"
                                      inputProps={{
                                        name: 'therapy',
                                        id: 'outlined-age-native-simple',
                                      }}
                                    >
                                      <option aria-label="None" value="" />
                                      <option value="Male">Male</option>
                                      <option value="Female">Femal</option>
                                      <option value="Other">Other</option>
                                    </Select>
                                    </FormControl>
                                  {/* Attended end */}
                                    </Grid>
                              
                                      </Grid>
                                      <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        id="submit-btn"
                                      >
                                        Create Prescription
                                      </Button>
                                      <Grid container justifyContent="flex-end">
                                      </Grid>

                                    </form>
                                  </div>
                                </Container>
                                </div>   
                            {/* insert field end code*/}

                                </TabPanel>
                          
                              
                                <TabPanel value={value} index={1}>
                                  <Details/>
                                </TabPanel>
                              </div>

                            {/* <TabPanel value={value} index={2}>
                              Item Three
                            </TabPanel> */}
                      </div>
                    
                      {/* meeting data end code */}
          </Paper>
        </Grid>
       </Grid>  
         
    </div>
  )
}

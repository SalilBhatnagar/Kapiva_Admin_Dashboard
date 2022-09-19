import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

export default function CreatePrescription() {
  const classes = useStyles();

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

   

  return (
    // <Container component="main" maxWidth="xs">
   <div className='div-main-container-createpres'>
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <form  method='Post' >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

        {/* Age start  */}
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
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
  );
}
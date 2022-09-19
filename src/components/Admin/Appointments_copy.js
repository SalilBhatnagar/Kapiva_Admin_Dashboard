import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import PaginationNumberbaise from '../Admin/PaginationNumberbaise';
import SearchIcon from '@material-ui/icons/Search';
import Table from 'react-bootstrap/Table';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HeaderPage from '../Admin/Header/HeaderPage'



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
    
    const [getData,setData]=useState([]);

    const [searchApiData, setSearchApiData] = useState([]);

    const [filterVal, setFilterVal]=useState('');

    const [data, setList] = useState([]);

    const [value, setValue] = React.useState(0);

    // dilog form start code 
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
      setOpen(true);
      };

      const handleClose = () => {
      setOpen(false);
      };
    // dilog form end code


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // pagination useState start //
      const [posts, setPosts]=useState([])
      const [showPerPage, setShowPerPage]=useState(5)
      const [pagination, setPagination]=useState({
        start: 0,
        end: showPerPage,
      });

      const onPaginationChange =(start , end)=>{
        setPagination({ start:start, end:end })
      }
  // end 
  


    useEffect(()=>{
      const fetchData=()=>{
          fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
              result.json().then((resp)=>{
                console.warn("result",resp);
               setData(resp);
               setSearchApiData(resp);
              }) 
           })
      }
      fetchData()
  },[]);


  const handleFilter=(e)=>{
    if(e.target.value == ""){
       setData(searchApiData)
    }else{
      const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()))
  
      setData(filterResult);
    }
    setFilterVal(e.target.value);
  }

   const editDialog = () => {
    
     return(
          <div>
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open form dialog
          </Button> */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </div>

     )

  }
   
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
        {/* bootstrap table start code */}
            <div className='div-boostrap-table'>
                <div className='div-main-datapart'>
                    <span className='span-pagination-btn'>
                        <PaginationNumberbaise 
                        showPerPage={showPerPage}
                        onPaginationChange={onPaginationChange}
                        total={posts.length}
                        />
                    </span> 
                    <div className='div-searbar'>
                    {/* <span className='span-searchIcon'></span><input className='input-searchbar' value={filterVal} onInput={(e)=>handleFilter(e)}/> */}
                    <span className='span-searchIcon'><SearchIcon/></span>
                    <span className='searchBTN'>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Serch"
                        multiline
                        maxRows={4}
                        value={filterVal}
                        onInput={(e)=>handleFilter(e)}
                        variant="outlined"
                        fullWidth
                        className='text-search'
                    />
                    </span>
                    </div>

                <Table striped bordered hover>
                    <thead> 
                        <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>User Name </th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Zip-code</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        getData.slice(pagination.start,pagination.end).map((item)=>{
                        return(
                            <>
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.zipcode}</td>
                                <td>
                                 <Link to={`/MeetingData/`+item.id+"/"+item.name}>
                                 Consult
                                 </Link>    
                                </td>
                                </tr>
                            </>
                        )
                        })
                    }
                    </tbody>
                    </Table>
                </div>
            </div>  
            {/* end the code */}
          </Paper>
        </Grid>
      </Grid>  
      {editDialog()}
    </div>
  )
}

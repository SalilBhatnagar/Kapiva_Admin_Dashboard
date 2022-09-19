import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderPage from '../DoctorsConsultation/Header/HeaderPage';
import Footer from '../DoctorsConsultation/Footer/FooterPage'
import DataUsageIcon from '@material-ui/icons/DataUsage';
//import MaterialTable from 'material-table';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';
//import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
//import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import SearchIcon from '@material-ui/icons/Search';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

import PaginationNumberbaise from '../DoctorsConsultation/PaginationNumberbaise';
import CreatePrescription from './CreatePrescription';
import Details from './Details';




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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
}));




export default function Index() {

    const classes = useStyles();

    const [getData,setData]=useState([]);

    const [searchApiData, setSearchApiData] = useState([]);

    const [filterVal, setFilterVal]=useState('');

    const [data, setList] = useState([]);

    const [value, setValue] = React.useState(0);
  
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
          fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
              result.json().then((resp)=>{
               //    console.warn("result",resp);
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

  
  return (
    <>
    <div className='div-header'>
       <HeaderPage/>
    </div>
   
    <div className='div-logo'>
       <img src='/img/logo.png' alt='kapiva-logo' width="15%" height="30%"  className='img-logo' />
    </div>
    <div>
    <br/>
      <Grid container spacing={3}>
         
          <Grid itemxs={6} lx={6} sm={6} md={6} lg={6}>
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
          </Grid>
      </Grid>
    </div>
    <br/>
    <div className='div-dr-consul'>
      <Grid container spacing={3} id="container-id" >
          
            <Grid itemxs={6} lx={6} sm={6} md={6} lg={6}>
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
            
               <Grid itemxs={6} lx={6} sm={6} md={6} lg={6}>
                 <div className='div-meetin-left'>
                 <Grid item xs={6}>
                 <spna className="span-meeting">Meeting Data</spna>
                 </Grid>
                      
                 </div>
                 <div className='div-meetin-right'>
                 <Grid item xs={6}>
                 <spna className="span-panding  ">PANDING</spna>
                 </Grid>
                 </div>
               </Grid>
            
        </Grid>
    </div>
    <br/>
    <div>
    <br/>
      <Grid container spacing={3}>
          <Grid itemxs={6} lx={6} sm={6} md={6} lg={6}>
          <span className='span-appoint'>Appointments</span>
          </Grid>
      </Grid>
    </div>
    <br/>
    <div className={classes.root}>
        <Grid container spacing={1}>
            
                <Grid item xs={6} lx={6} sm={6} md={6} lg={6}>
                {/* <h1>search table</h1> */}
                <div className='div-left-class'>
                
                <Paper className={classes.paper}>
                
                {/* bootstrap table start code */}
                {/* <div className='div-boostrap-table'> 
                    <div  style={{ marginTop:0}}>  
                    <BootstrapTable
                    bootstrap4
                      keyField='id'
                      data={data}
                      columns={columns}
                      striped
                      hover
                      condensed
                      // pagination={paginationFactory()}
                      pagination={paginationFactory({ sizePerPage: 5 })}
                      filter={filterFactory()}

                      />
                    </div>
                    </div>     */}
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
                          <span className='span-searchIcon'><SearchIcon/></span><input className='input-searchbar' value={filterVal} onInput={(e)=>handleFilter(e)}/>
                          </div>

                        <Table striped bordered hover>
                            <thead> 
                                <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Zip Code</th>
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
                                        <td>{item.email}</td>
                                        <td>{item.address.city}</td>
                                        <td>{item.address.zipcode}</td>
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
                </div>
                </Grid>
             
             
                <Grid item xs={6} lx={6} sm={6} md={6} lg={6}>
                <div className='div-right-class'>
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
                                   <div className='div-createPresription-form'>
                                      <CreatePrescription/> 
                                   </div>

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
                  </div>  
                </Grid>
           </Grid>

           <div>
            <br/>
           </div>
          <div className='div-footer'>
              <Footer/>    
        </div>
       </div>
  </>   
  )
}

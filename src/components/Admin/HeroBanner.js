import React, { useState ,useEffect} from 'react';
import MaterialTable from 'material-table';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {getData,postData,postDataAndImage,ServerURL} from '../../FetchNodeServices';
import {makeStyles} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Swal from 'sweetalert2'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);


const useStyles = makeStyles((theme)=>({
  mainTable:{
    padding:'35px 35px 35px 35px',
    backgroundColor: '#efeaea',
  },
  root:{
    padding:theme.spacing(3),
    textAlign:'center',
  },
  mainPaper:{
    color:'#ff8520',
    backgroundColor:'#63596396',
    height:'550px',
  },
  paperheading:{
    backgroundColor:'#7d7979',
    height:'10px',
    padding:'20px'
  },
  div1:{
    padding:'0px 0px 15px'
  },
  div2:{
    padding:'10px 30px',
    margin:'0px'
  },
  uploadbtn1:{
   margin:'0px 30px 0px 11px',
  },
  
  uploadbtn2:{
    margin:'6px 46px 0px 0px',
  },
  
  imgAvater:{
    margin: '5px 55px',
    padding: '4px 4px 4px 4px',
  },
  
  div3:{
    position:'relative',
    right:'10%',
    color:'black',
    margin:'30px 10px',
  },
  div4:{
    padding:'35px 20px'
  },
  div5:{
    margin:'40px 12px 0px 14px',
    position:'absolute',
    color:'black',
  },
  input:{
    display:'none'
  },
  topbrand:{
   position:'relative',
   top:'15px',
   right:'38px',
   color:'black',
  },
  showMes:{
   margin:'15px 190px 0px 0px',
  },
  valImg:{
    position: 'relative',
    right: '5%',
    top: '0%',
  },
  outletaddress:{
  margin: '5px 0px 5px 10px',
  width: '94%',
  },
  valImgbn:{
    position: 'relative',
    right: '2%',
    top: '0%',
  },
  valImgds:{
    position: 'relative',
    right: '2%',
    top: '8%',
  },
  valImgicon:{
    position: 'relative',
    right: '56%',
    top: '35%',
  },
  valImgAd:{
    position: 'relative',
    right: '9%',
    top: '5%',
  },
  valImgtop:{
  position: 'relative',
  right: '1%',
  top: '0%',
  },
  radio1:{
  margin:'10px 10px 10px 10px'
  },
  
  formControl: {
  //margin: theme.spacing(1),
  minWidth:180,
  },
  }));




export default function HeroBanner() {

    const classes = useStyles();
    const [getList, setList] = useState([]);
    const [Open, setOpen] = useState(false);

    const [getSId, setSId] = useState("");
    const [getTitle, setTitle]=useState("");
    const [getImg, setImg]=useState({icon:'',file:''});
    const [getDiscription, setDiscription]=useState("");
    const [getMessage, setMessage] =useState("") 

    const handleClickOpen=(rowData)=>{
      setSId(rowData.sid);
      setTitle(rowData.title);
      setImg({ icon: `${ServerURL}/images/${rowData.image}`, file: "" });
      setDiscription(rowData.discription);
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false);
    }


    const [getstate, setState] = useState({
      columns: [
        { title: "Title", field: "title" },
       
        { title: "Image", field: "image",
        render: (rowData) => (
            <div>
              <Avatar
                variant="rounded"
                src={`${ServerURL}/images/${rowData.image}`}
              />
            </div>
          ),
    },
    { title: "Discription", field: "discription" }
  ]
  });

    /* clear data*/
    function ClearData() {
      setTitle("");
      setImg({ icon: "", file: "" });
      setDiscription("");
      setMessage("");

    }

      // useEffect 
      useEffect(()=>{
        fetchData();
      },[])

      /* handle in icon*/
        const handleIcon=(event)=>{
          setImg({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})
     }

      /* fetch all modle data */  
        const fetchData =async()=>{
        let list= await getData('sport/displayspotData')
        setList(list)
      }

      /* delete single record */
        const handleDelete =async(oldData)=>{
        let body={sid:oldData.sid}
        await postData('sport/deleteSportData',body);
      }



        const handleSubmit = async()=> {
            
          var formData = new FormData()
              formData.append('sid',getSId)
              formData.append('title',getTitle)
              formData.append('image',getImg.file)
              formData.append('discription',getDiscription)

              var config={header:{'content-type':'multipart/form-data'}}
              var result = await postDataAndImage('sport/editSportData',
              formData,config);
              
              fetchData();
              console.log('result--',fetchData());
              handleClose();

              if(result)
              { //alert("Record Submitted")
              // setMessage('Record Updated')

              Swal.fire(
                'Fail to Update Record!',
                'You clicked the button!',
                'error'
              )
              }
              else{
              // alert('Fail to Submit Record')
              // setMessage('Fail to Update Record')
              Swal.fire(
                'Record Updated!',
                'You clicked the button!',
                'success'
              )
             
              }

        };

        // dilog box start code

        const showData=()=>{
        return(
          <>
                <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open alert dialog
                  </Button>
                <Dialog
                  open={Open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Update Categories"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className={classes.paper}>
                        <Paper className={classes.mainPaper}>
                          <Grid contianer spacing={2}>
                            {/* <div className={classes.div1}>
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Paper className={classes.paperheading}>
                                    <Typography><b>Add Category </b></Typography>
                                </Paper>
                              </Grid>
                            </div>  */}
                          </Grid>
                          <div className={classes.div2}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                {/* <img
                                  src={getErrorCn}
                                  width="12"
                                  height="12"
                                  className={classes.valImg}
                                /> */}
                                <TextField
                                  label="Title"
                                  className={classes.text1}
                                  value={getTitle}
                                  onChange={(event) => {
                                    setTitle(event.target.value);
                                  }}
                                />
                              </Grid>

                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                {/* <img
                                  src={getErrorDes}
                                  width="12"
                                  height="12"
                                  className={classes.valImg}
                                /> */}
                                <TextField
                                  label="Discription"
                                  className={classes.text2}
                                  value={getDiscription}
                                  onChange={(event) => {
                                    setDiscription(event.target.value);
                                  }}
                                />
                              </Grid>

                              <Grid item xs={6} sm={6} md={6} lg={6}>
                                <input
                                  accept="image/*"
                                  className={classes.input}
                                  id="contained-button-file"
                                  multiple
                                  type="file"
                                  onChange={(event) => handleIcon(event)}
                                />
                                <label htmlFor="contained-button-file">
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    component="span"
                                    className={classes.uploadbtn1}
                                    startIcon={<CloudUploadIcon />}
                                  >
                                    Upload Icon
                                  </Button>
                                </label>
                              </Grid>
                              <Grid item xs={6} className={classes.container}>
                                <Avatar
                                  alt="Remy Sharp"
                                  variant="rounded"
                                  className={classes.updateIcon}
                                  style={{ width: 70, height: 50 }}
                                  src={getImg.icon}
                                />
                              </Grid>

                              
                              {/* <Grid item xs={6} className={classes.container}>
                                <Avatar
                                  alt="Remy Sharp"
                                  variant="rounded"
                                  className={classes.updatead}
                                  style={{ width: 70, height: 55 }}
                                  src={getAd.icon}
                                />
                              </Grid> */}
                            </Grid>
                            <div className={classes.div3}>
                              <Grid container spacing={2}>
                              
                                <Grid item xs={6} sm={6} md={6} lg={6}></Grid>
                                <Grid item xs={12} className={classes.container}>
                                <span className='edit-btn'>
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      onClick={handleSubmit}>
                                      Edit Above Data
                                    </Button>
                                  </span>  
                                </Grid>
                                <Grid item xs={6}>
                                <span className='reset-btn'>
                                  <Button variant="contained" color="primary" onClick={(e)=>ClearData()}>Reset</Button></span>
                                </Grid>
                                <Grid item xs={12}>
                                  <p className='p-message'><b>Message:</b>&nbsp;&nbsp;{getMessage}</p>
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Paper>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    {/* <Button onClick={handleClose} color="primary">
                        Disagree
                      </Button> */}
                    <Button onClick={handleClose} color="primary" autoFocus>
                      close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              
          </>
        )
        }
     // end code

      return (
        <div className={classes.mainTable}>
      
        <MaterialTable
          id="editBtn"
          title="Brand List"
          columns={getstate.columns}
          data={getList}
          actions={[
              {
                icon: "edit",
                tooltip: "Edit",
                onClick: (event, rowData) => handleClickOpen(rowData),
              },
            ]}
        
      editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          
      
          onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();

                  
                    const data = [...getList];
                    data.splice(data.indexOf(oldData), 1);
                    setList(data)
                    handleDelete(oldData);
                }, 600);
              }),
      }}
    /> 
      {showData()} 
      
      </div>
      )
  }

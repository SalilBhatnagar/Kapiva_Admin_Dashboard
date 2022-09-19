import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import SearchIcon from '@material-ui/icons/Search';
// import Pagination from '../DoctorsConsultation/Pagination'
import PaginationNumberbaise from '../DoctorsConsultation/PaginationNumberbaise'
export default function SearchFilter() {
  const [getData,setData]=useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal]=useState('');
  

  // pagination useState start //
  const [posts, setPosts]=useState([])
  const [showPerPage, setShowPerPage]=useState(4)
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
    <div>
        <h3>Search Filter</h3>
        <hr/>

        <div className='div-main-datapart'>
           <div className='div-searbar'>
           <SearchIcon/><input className='input-searchbar' placeholder='Search' value={filterVal} onInput={(e)=>handleFilter(e)}/>
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
        <PaginationNumberbaise 
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
         />
    </div>
  )
}

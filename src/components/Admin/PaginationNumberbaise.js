import React,{useState, useEffect} from 'react'

 const Pagination = ({showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1)
  const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total/showPerPage))
  useEffect(()=>{

     const value =showPerPage * counter;
     onPaginationChange(value - showPerPage , value);

  },[counter]);

  const onButtonClick=(type)=>{
      
     if(type === "prev"){
         if(counter === 1){
            setCounter(1)
         }else{
            setCounter(counter - 1);
         }
     }else if(type === "next"){
        if(setNumberOfButtons === counter){
          setCounter(counter);
        }else{
          setCounter(counter + 1);
        }
     }
  }
  //console.log(showPerPage)
  return (
    <div className='d-flex justify-content-center'>
     <nav aria-label="Page navigation example">
        <ul className="pagination">
        <li className="page-item Previous-link"><a className="page-link" href="#" onClick={()=>onButtonClick('prev')}>Previous</a></li>

       

           {
             new Array(numberOfButtons).fill("").map((index, item)=>(
              <li className={`page-item ${index + 1 === counter ? "active" : null} `}>
                <a className="page-link" onClick={setCounter(index+1)}></a>
              </li>
            ))
            }
      
        <li className="page-item"><a className="page-link Next-link" href="#" onClick={()=>onButtonClick('next')}>Next</a></li>
      </ul>
    </nav>

        {/* <button className='btn btn-primary' onClick={()=>onButtonClick('prev')}>Previous</button> 

        <button className='btn btn-primary' onClick={()=>onButtonClick('next')}>Next</button>   */}
    </div>
  )
}

export default Pagination;
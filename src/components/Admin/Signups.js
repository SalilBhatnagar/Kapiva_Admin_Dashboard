import Table from 'react-bootstrap/Table';

function Signups() {
  return (
     <div>
     <span className='span-order'><u><b>Signup'S</b></u></span>
           <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Place</th>
                <th>Pincode</th>
                <th>Credit</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Neet Saini</td>
                <td>Sahibzada Ajit Singh Nagar, Punjab, IN</td>
                <td>140301</td>
                <td>Credit</td>
                <td>Date</td>
                
                </tr>
                <tr>
                <td>2</td>
                <td>Neet Saini</td>
                <td>Sahibzada Ajit Singh Nagar, Punjab, IN</td>
                <td>140301</td>
                <td>Credit</td>
                <td>Date</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Neet Saini</td>
                <td>Sahibzada Ajit Singh Nagar, Punjab, IN</td>
                <td>140301</td>
                <td>Credit</td>
                <td>Date</td>
                </tr>
            </tbody>
            </Table>
     </div>
  );
}

export default Signups;
import Table from 'react-bootstrap/Table';

function Orders() {
  return (
     <div>
     <span className='span-order'><u><b>ORDER'S</b></u></span>
           <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Order ID (Customer ID)</th>
                <th>Order Value</th>
                <th>Date</th>
                <th>Payment</th>
                <th>App Version</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>1007390 (400011)</td>
                <td>1160.0000</td>
                <td>2022-08-30 14:14:20</td>
                <td>Cash on Delivery</td>
                <td>1.2.1 v23</td>
                </tr>
                <tr>
                <td>2</td>
                <td>1007390 (400011)</td>
                <td>1160.0000</td>
                <td>2022-08-30 14:14:20</td>
                <td>Cash on Delivery</td>
                <td>1.2.1 v23</td>
                </tr>
                <tr>
                <td>2</td>
                <td>1007390 (400011)</td>
                <td>1160.0000</td>
                <td>2022-08-30 14:14:20</td>
                <td>Cash on Delivery</td>
                <td>1.2.1 v23</td>
                </tr>
            </tbody>
            </Table>
     </div>
  );
}

export default Orders;
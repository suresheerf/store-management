import {
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody
} from '@mui/material';

const data = [
  {
    _id: 1,
    name: 'onions',
    quantity: 0.5,
    uint: 1,
    type: 'kg',
    rate: 10,
    price: 5,
    date: new Date()
  },
  {
    _id: 2,
    name: 'milk',
    quantity: 3,
    uint: 1 / 2,
    type: 'liter', // ['liter','kg','item']
    rate: 20,
    price: 60,
    date: new Date()
  },
  {
    _id: 3,
    name: 'dosa batter',
    quantity: 2,
    unit: 1,
    type: 'item',
    rate: 100,
    price: 200,
    date: new Date()
  },
  {
    _id: 4,
    name: 'sugar',
    quantity: 2,
    unit: 1,
    type: 'kg',
    rate: 50,
    price: 100,
    date: new Date()
  }
];

function Paddu() {
  return (
    <>
      <div>
        <h1>paddu</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((product, i) => (
                <TableRow key={product._id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.rate}</TableCell>
                  <TableCell>{product.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Paddu;

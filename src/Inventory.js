import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Inventory = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const addProduct = () => {
    setItems([...items, { productname: productName, quantity: quantity }]);
  };
  return (
    <div>
      <Paper className='paper__body' elevation={3}>
        <TextField
          style={{ marginBottom: "1em" }}
          label='Product Name'
          variant='outlined'
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "1em" }}
          label='Quantity'
          variant='outlined'
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={addProduct}>
          Add
        </Button>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow>
                <TableCell>{item.productname}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Inventory;

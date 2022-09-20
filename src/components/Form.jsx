import React from "react";
import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableCell,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

const MyForm = () => {
  const [items, setItems] = useState([]);
  const [allNames, setAllNames] = useState([]);
  const [finalValues, setFinalValues] = useState({
    person1: "",
    person2: "",
    amount: "",
  });
  const { person1, person2, amount } = finalValues;
  const handleFinalChange = (name) => (event) => {
    setFinalValues({ ...finalValues, [name]: event.target.value });
  };

  function addValues() {
    if (
      finalValues["person1"] !== "" &&
      finalValues["person2"] !== "" &&
      finalValues["amount"] !== ""
    ) {
      setItems([...items, finalValues]);
    } else {
      alert("Enter all Fields");
    }
    setFinalValues({
      ...finalValues,
      person1: "",
      person2: "",
      amount: "",
    });
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table aria-label="input table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Payer</TableCell>
            <TableCell align="center">Payee</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Add</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.length > 0 &&
            items.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" align="center" scope="row">
                  {row.person1}
                </TableCell>
                <TableCell align="center">{row.person2}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
              </TableRow>
            ))}
          <TableRow>
            <TableCell align="center">
              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Payer</InputLabel>
                <Select value={person1} onChange={handleFinalChange("person1")}>
                  {allNames.map((item) => (
                    <MenuItem value={item.name}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>

            <TableCell align="center">
              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Payee</InputLabel>
                <Select value={person2} onChange={handleFinalChange("person2")}>
                  {allNames.map((item) =>
                    person1 !== item.name ? (
                      <MenuItem value={item.name}>{item.name}</MenuItem>
                    ) : (
                      <></>
                    )
                  )}
                </Select>
              </FormControl>
            </TableCell>

            <TableCell align="center">
              <FormControl>
                <TextField
                  id="standard-number"
                  label="Amount"
                  type="number"
                  value={amount}
                  placeholder="Enter Amount"
                  onChange={handleFinalChange("amount")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </TableCell>

            <TableCell align="center">
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={(e) => {
                  addValues();
                }}
              >
                + ADD
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyForm;

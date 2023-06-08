import React, { useState, useContext } from 'react'
import { FormControl, TextField, Button } from '@mui/material'
import { GlobalStateContext } from "../../context/GlobalState.js";


const AddNewTransactions = () => {
  const [ expenditure, setExpenditure ] = useState('')
  const [ amount, setAmount ] = useState('')

  const { addTransaction } = useContext(GlobalStateContext);

  function onSubmit(){
    const addNewTransaction =  {
      "id" :  Math.floor(Math.random() * 100000000),
      "expenditure": expenditure,
      "value": parseInt(amount) // + sign makes it into a number
    }
    addTransaction(addNewTransaction);
  }

  return (
    <>
      <h2>Add a new Transaction</h2>
      
      <FormControl sx={{ display:'flex', flexDirection:'row', }} >
        <TextField sx={{ m:'10px' }} label="Expenditure Type" variant="outlined" onChange={(e) => setExpenditure(e.target.value)}/>
        <TextField sx={{ m:'10px' }} label="Enter Cost" variant="outlined" onChange={(e) => setAmount(e.target.value)} />
      </FormControl>

      <Button sx={{ width:'90%', m:'20px' }} variant='contained' onClick={() => onSubmit()}> Add Transaction </Button>

      <p>Note : Negative - Expense & Positive - Income</p>
    </>
  )
}

export default AddNewTransactions
import React, { useContext, useRef } from 'react'
import { FormControl, TextField, Button } from '@mui/material'
import { GlobalStateContext } from "../../context/GlobalState.js";


const AddNewTransactions = () => {
  // const [ expenditure, setExpenditure ] = useState('')
  // const [ amount, setAmount ] = useState('')

  const expenditureTypeInputRef = useRef()
  const amountInputRef = useRef()


  const { addTransaction } = useContext(GlobalStateContext);

  const onSubmit = (event) => {
    event.preventDefault()
    // console.log(expenditureTypeInputRef.current.value)
   
    const addNewTransaction =  {
      "id" :  Math.floor(Math.random() * 100000000),
      "expenditure": expenditureTypeInputRef.current.value,
      "value": parseInt(amountInputRef.current.value) // + sign makes it into a number
    }
    addTransaction(addNewTransaction);
    
    // Manipulating DOM elements or you can work with state to reset
    expenditureTypeInputRef.current.value=''
    amountInputRef.current.value=''
  }

  return (
    <>
      <h2>Add a new Transaction</h2>
      
      <FormControl sx={{ display:'flex', flexDirection:'row', }} >
        <TextField sx={{ m:'10px' }} inputRef={expenditureTypeInputRef} label="Expenditure Type" variant="outlined" 
          // onChange={(e) => setExpenditure(e.target.value)}
        />
        <TextField sx={{ m:'10px' }} inputRef={amountInputRef} label="Enter Cost" variant="outlined" 
          // onChange={(e) => setAmount(e.target.value)} 
        />
    
      </FormControl>

      <Button sx={{ width:'90%', m:'20px' }} variant='contained' type="submit" onClick={(event) => onSubmit(event)} > Add Transaction </Button>


      <p>Note : Negative - Expense & Positive - Income</p>
    </>
  )
}

export default AddNewTransactions
import React, { useContext } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

import { GlobalStateContext } from "../../context/GlobalState";


const TransactionList = ({ id, expenditure, sign, cost }) => {
  const { deleteTransaction } = useContext(GlobalStateContext);

  return (
    <Box sx={{ width:'100%', m:'8px' }}>
        
        <Card sx={{ backgroundColor:'#C3D9F0' }}>
            <CardContent >
                <Typography sx={{ fontSize:'20px'}}>
                    {expenditure} : {sign} ${ Math.abs(cost)} <DeleteIcon onClick={() => deleteTransaction(id) } />
                </Typography>
            </CardContent>

        </Card>

    </Box>
  )
}

export default TransactionList
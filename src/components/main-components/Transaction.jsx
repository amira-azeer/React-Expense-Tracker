import React, { useContext } from "react";
import { Box } from "@mui/material";
import TransactionList from "../sub-components/TransactionList";

import { GlobalStateContext } from "../../context/GlobalState";

const Transaction = () => {
  const { transactions } = useContext(GlobalStateContext);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "75%",
      }}
    >
      <h2>Former Transactions</h2>

      {transactions.map(({ id, expenditure, value }, index) => {
        const sign = value < 0 ? "-" : "+";
        
        return (
          <TransactionList
            key={id}
            id={id}
            sign={sign}
            expenditure={expenditure}
            cost={value}
          />
        );
      })}
    </Box>
  );
};

export default Transaction;

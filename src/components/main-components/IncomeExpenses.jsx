import React, { useContext } from "react";
import { Box } from "@mui/material";
import CardComponent from "../sub-components/Card.jsx";
import { GlobalStateContext } from "../../context/GlobalState.js";
import { updateValues } from "../../shared-functions/SharedFunctions.js";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalStateContext);
  const { income, expense } = updateValues(transactions);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <CardComponent title={"Income"} cost={income} textColor={"green"} />

      <CardComponent title={"Expense"} cost={expense} textColor={"red"} />
    </Box>
  );
};

export default IncomeExpenses;

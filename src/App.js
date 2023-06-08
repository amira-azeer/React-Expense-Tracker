import { Box } from "@mui/material";

import Header from "./components/main-components/Header";
import Balance from "./components/main-components/Balance";
import IncomeExpenses from "./components/main-components/IncomeExpenses";
import Transaction from "./components/main-components/Transaction";
import AddNewTransactions from "./components/main-components/AddNewTransactions";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>

      <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", }}>
        <Box sx={{ width: "25%", display: "flex", flexDirection: "column", alignItems: "center", border: 1, }}>

          <Header title={"Expense Tracker"} />
          <Balance balance={"0.00"} />
          <IncomeExpenses />
          <Transaction />
          <AddNewTransactions />

        </Box>
      </Box>

    </GlobalProvider>
  );
}

export default App;

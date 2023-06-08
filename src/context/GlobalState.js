import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; 


export const transactionListValues = [
  {
    id: 0,
    expenditure: "Coffee",
    value: -75,
  },
  {
    id: 1,
    expenditure: "University",
    value: -1500,
  },
  {
    id: 2,
    expenditure: "Pocket Money",
    value: +6000,
  },
];

const initialState = {
  transactions: transactionListValues,
};

export const GlobalStateContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions 
  function deleteTransaction(id) {
    dispatch({
      type : "DELETE_TRANSACTION",
      payload: id,
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type : "ADD_TRANSACTION",
      payload: transaction,
    })
  }

  return (
    <GlobalStateContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children} 
    </GlobalStateContext.Provider>
  );
};

import React, { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalState";
import { updateValues } from "../../shared-functions/SharedFunctions";

const Balance = ({ balance }) => {
  const { transactions } = useContext(GlobalStateContext);
  const { total } = updateValues(transactions);

  return (
    <>
      <h2> Your Balance : ${total} </h2>
    </>
  );
};

export default Balance;

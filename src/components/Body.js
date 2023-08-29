import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExp from "./IncomeExp";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import { GlobalProvider } from "../context/GlobalContext";

export default function Body() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

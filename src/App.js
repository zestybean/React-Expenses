import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";

var today = new Date();

const DUMMY_DATA = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 293.48,
    date: today,
  },
  { id: 2, title: "Netflix", amount: 14.48, date: today },
  { id: 3, title: "Gas", amount: 100.59, date: today },
  { id: 4, title: "Rent", amount: 850.0, date: today },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  //Update expenses using previous state data
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

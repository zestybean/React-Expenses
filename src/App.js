import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const DUMMY_DATA = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 293.48,
    date: randomDate(new Date(2019, 0, 1), new Date()),
  },
  {
    id: 2,
    title: "Netflix",
    amount: 14.48,
    date: randomDate(new Date(2019, 0, 1), new Date()),
  },
  {
    id: 3,
    title: "Gas",
    amount: 100.59,
    date: randomDate(new Date(2019, 0, 1), new Date()),
  },
  {
    id: 4,
    title: "Rent",
    amount: 850.0,
    date: randomDate(new Date(2019, 0, 1), new Date()),
  },
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

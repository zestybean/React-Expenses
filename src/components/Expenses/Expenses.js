import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const addExpenseFilter = (expenseFilterYear) => {
    setFilteredYear(expenseFilterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <li>
        <Card className="expenseList">
          <ExpensesFilter
            selected={filteredYear}
            onExpenseFilter={addExpenseFilter}
          />
          <ExpensesList expenses={filteredExpenses} />
        </Card>
      </li>
    </>
  );
}

export default Expenses;

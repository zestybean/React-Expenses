import React, { useState } from "react";

import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const addExpenseFilter = (expenseFilterYear) => {
    setFilteredYear(expenseFilterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenseList">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilter={addExpenseFilter}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
}

export default ExpenseList;

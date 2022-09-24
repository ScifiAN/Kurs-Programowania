import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseIList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2022');

  let filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseIList items={filteredExpenses} />

        {/* {expensesContent} */}

        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem 
              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  )
}

export default Expenses;
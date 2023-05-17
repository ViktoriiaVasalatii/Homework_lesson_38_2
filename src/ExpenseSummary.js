import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const averageExpense = totalExpenses / expenses.length;

  return (
    <div>
      <h2>Expense Summary</h2>
      <p>Total Expenses: {totalExpenses.toFixed(2)}</p>
      <p>Average Expense: {averageExpense.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseSummary;

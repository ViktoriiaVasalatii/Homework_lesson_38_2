import React from 'react';

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date.toDateString()}</td>
            <td>
              <button onClick={() => editExpense(expense)}>Edit</button>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;

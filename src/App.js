import React from 'react';
import { connect } from 'react-redux';
import { addExpense, editExpense, deleteExpense} from './actions';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={this.props.addExpense} />
        <ExpenseList
          expenses={this.props.expenses}
          editExpense={this.props.editExpense}
          deleteExpense={this.props.deleteExpense}
        />
        <ExpenseSummary expenses={this.props.expenses} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const mapDispatchToProps = {
  addExpense,
  editExpense,
  deleteExpense,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


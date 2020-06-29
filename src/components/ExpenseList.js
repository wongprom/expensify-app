import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectores/expenses';
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {/* <p> {props.filters.text}</p> */}

    {/* mapping out data */}
    {props.expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};
export default connect(mapStateToProps)(ExpenseList);

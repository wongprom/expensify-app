import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectores/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log('visibleExpenses', visibleExpenses);
});

// addExpenses -> Water bill
store.dispatch(
  addExpense({
    description: 'Water bill',
  })
);
// addExpenses -> Gas bill
store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 1234,
    note: 'gas bill for our "summer house"',
  })
);
// setTextFilters -> bill (2 item) -> water (1 item)
store.dispatch(setTextFilter('wa'));
// getVisibleExpenses -> print visibles ones on screeen
// console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));

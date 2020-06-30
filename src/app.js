import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectores/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

//* Add Expense
// addExpenses -> Water bill
store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 4500,
  })
);
// addExpenses -> Gas bill
store.dispatch(
  addExpense({
    description: 'Gas bill',
    createdAt: 1000,
  })
);
// addExpenses -> Rent
store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 109500,
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

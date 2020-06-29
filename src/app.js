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
  console.log(state);
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log('visibleExpenses', visibleExpenses);
});

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

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
store.dispatch(setTextFilter('water'));
// getVisibleExpenses -> print visibles ones on screeen
// console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

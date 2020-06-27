import { createStore, combineReducers } from 'redux';

import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

//* Expenses Reducer
const expensesReduserDefaultState = [];
const expensesReducer = (state = expensesReduserDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expenses];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    default:
      return state;
  }
};

//* Fiter Reducer

const filterReducerDefaultState = {
  text: 'Some Text',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = new createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});
const expenseOne = store.dispatch(
  addExpense({
    amount: 4567,
    description: 'FOOD',
    note: 'last food shoppping this month',
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    amount: 9876,
    description: 'Car',
    note: 'My dream car Nissan GTR',
  })
);
// console.log('expenseOne', expenseOne);
store.dispatch(removeExpense({ id: expenseOne.expenses.id }));

const demoState = {
  expenses: [
    {
      id: 'njknklkl',
      decsription: 'January rent',
      note: 'Last payment for this address',
      amount: 34300,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date out amount
    startDate: undefined,
    endDate: undefined,
  },
};

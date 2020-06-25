import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
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
console.log(store.getState());
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

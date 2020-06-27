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
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});

//* Expenses Reducer
const expensesReduserDefaultState = [];
const expensesReducer = (state = expensesReduserDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expenses];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
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
// console.log('expenseTwo', expenseTwo);
// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 1234456 }));

// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

//!DEMO CODE
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

//! how to overwrite propertys in object with help of spread operator
const user = {
  name: 'Jimmy',
  age: 34,
};
// console.log({
//   ...user,
//   location: 'Gotland',
//   age: 38,
// });

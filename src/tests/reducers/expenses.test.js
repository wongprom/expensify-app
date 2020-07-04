import expensesReduser from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test('should  set default state', () => {
  const state = expensesReduser(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});
test('should  remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReduser(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
test('should not remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReduser(expenses, action);
  expect(state).toEqual(expenses);
});
test('should add an expense', () => {
  const expense = {
    id: '1109',
    description: 'mac',
    note: '',
    createdAt: 22233,
    amount: 34545,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReduser(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
test('should edit an expense', () => {
  const amount = 1234;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReduser(expenses, action);
  expect(state[1].amount).toBe(amount);
});
test('should not edit an expense if id not found', () => {
  const amount = 1234;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount,
    },
  };
  const state = expensesReduser(expenses, action);
  expect(state).toEqual(expenses);
});

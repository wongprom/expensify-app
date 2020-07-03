import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' });
});
test('Should setup edit expense action with (id, updates)', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value',
    },
  });
});
test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Description',
    note: 'note',
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: 'Description',
      note: 'note',
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});

test('Should setupt add expense action object with default values.', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});

import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with fixture data', () => {
  const wrapper = shallow(<ExpenseListItem expense={{ ...expenses[0] }} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

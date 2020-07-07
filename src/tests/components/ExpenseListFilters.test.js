import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import toJSON from 'enzyme-to-json';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  (setTextFilter = jest.fn()),
    (sortByDate = jest.fn()),
    (sortByAmount = jest.fn()),
    (setStartDate = jest.fn()),
    (setEndDate = jest.fn()),
    (wrapper = shallow(
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    ));
});

test('should render ExpenseListFilters correctley', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});
test('should render ExpenseListFilters with alt data correctley', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(toJSON(wrapper)).toMatchSnapshot();
});

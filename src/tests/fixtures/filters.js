import moment from 'moment';

const filters = {
  text: '',
  sortby: 'date',
  startDate: undefined,
  endDate: undefined,
};
const altFilters = {
  text: 'bills',
  sortby: 'amount',
  startDate: moment(0),
  endDate: moment(0),
};

export { filters, altFilters };

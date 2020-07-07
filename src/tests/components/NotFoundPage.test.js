import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should render NotFoundPage with fixture data', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

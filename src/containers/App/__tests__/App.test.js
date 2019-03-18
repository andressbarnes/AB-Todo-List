import React from 'react';
import { shallow } from 'enzyme';

//components
import App from '../App';
import SortableList from '../../../components/SortableList';

let component;

beforeEach(() => {
  //common setup logic
  component = shallow(<App />);
});

it('Rendered the sortableList', () => {
  expect(component.find(SortableList).length).toEqual(1);
});

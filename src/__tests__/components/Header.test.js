import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

describe('<Header/> component unit tests', () => {
  it('should render 1 <Header /> component', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });

  it('should render 1 <h1 > component', () => {
    const component = shallow(<Header />);
    expect(component.find('h1')).toHaveLength(1);
  });

  it('should have correct title', () => {
    const component = shallow(<Header />);
    expect(component.find('h1').text()).toEqual('Expense Tracker');
  });
});

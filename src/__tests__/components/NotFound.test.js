import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '../../components/NotFound';

describe('<NotFound/> component unit tests', () => {
  it('should render 1 <NotFound /> component', () => {
    const component = shallow(<NotFound />);
    expect(component).toHaveLength(1);
  });

  it('should render 1 <h1 > component', () => {
    const component = shallow(<NotFound />);
    expect(component.find('h1')).toHaveLength(1);
  });

  it("should have 'Not Found' wording", () => {
    const component = shallow(<NotFound />);
    expect(component.find('h1').text()).toEqual('Not Found');
  });
});

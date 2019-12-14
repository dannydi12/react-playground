import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Tab from './Tab';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Tab component', () => {

  const tabsProp = [
    {
      name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
    },
    {
      name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
    },
  ];

  it('mounts successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tab />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders according to snapshot', () => {
    expect(renderer.create(<Tab tabs={tabsProp}/>).toJSON()).toMatchSnapshot();
  });

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tab tabs={tabsProp}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Tab tabs={tabsProp} />);
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
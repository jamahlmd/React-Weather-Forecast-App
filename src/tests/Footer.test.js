import React from 'react';
import Footer from '../components/Footer';

const wrapper = shallow(<Footer text={"Test text"}/>);


test('Should render Footer correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});



test('Should render text correctly', () => {
    expect(wrapper.find('h5').text()).toBe('Test text');
});
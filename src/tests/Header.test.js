import React from 'react';
import Header from '../components/Header';

const wrapper = shallow(<Header title={"Test title"}/>);


test('Should render Header correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});


test('Should render title correctly', () => {
    expect(wrapper.find('h1').text()).toBe('Test title');
});
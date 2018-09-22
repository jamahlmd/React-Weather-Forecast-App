import React from 'react';
import Refresh from '../components/Refresh';

const wrapper = shallow(<Refresh refresh={true} lastSearch={'London'}/>);


test('Should render Refresh correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});


test('Should set state properly according to props', () => {
   expect(wrapper.state('running')).toBe(true);
});


test('Should update state properly on componentDidUpdate', () => {
    wrapper.setProps({refresh: false});
    expect(wrapper.state('running')).toBe(false);
});



test('Should refresh timer when city changes', () => {
    wrapper.setProps({lastSearch: 'Prague'});
    expect(wrapper.state('elapsedTime')).toBe(0);
});
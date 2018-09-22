import React from 'react';
import {Button} from 'antd';
import RecentSearches from '../components/RecentSearches';

const recent = ['London','Prague'];

const current = "London";

const wrapper = shallow(<RecentSearches recent={recent} current={current} onClick={()=>true} loading={false} />);


test('Should render correctly', () => {

    expect(toJson(wrapper)).toMatchSnapshot();
});

test('Should highlight current search', () => {

   expect(wrapper.find(Button).first().prop('type')).toEqual('primary');
});
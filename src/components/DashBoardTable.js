import React from 'react';
import {Table} from 'antd';
import propTypes from 'prop-types';
import moment from 'moment';

const columns = [{
    title: 'Weather',
    dataIndex: 'weather',
    key: 'weather',
}, {
    title: 'Windspeed',
    dataIndex: 'wind',
    key: 'wind',
}, {
    title: 'Humidity',
    dataIndex: 'humidity',
    key: 'humidity',
},{
    title: 'Sunrise',
    dataIndex: 'sunrise',
    key: 'sunrise',
},{
    title: 'Sunset',
    dataIndex: 'sunset',
    key: 'sunset',
}];


const DashBoardTable = ({currentWeatherData}) => {
    const data = [{
        key: '1',
        weather: currentWeatherData.weather[0].description,
        wind: `${currentWeatherData.wind.speed} mph`,
        humidity: `${currentWeatherData.main.humidity}%`,
        sunrise: moment.unix(currentWeatherData.sys.sunrise).format('LT'),
        sunset: moment.unix(currentWeatherData.sys.sunset).format('LT')
    }
    ];

    return (
        <Table
            pagination={{position: 'none'}}
            columns={columns}
            dataSource={data}
        />
    )
};

DashBoardTable.propTypes = {
    currentWeatherData: propTypes.object
};

export default DashBoardTable;
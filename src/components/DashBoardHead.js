import React from 'react';
import DashBoardTable from './DashBoardTable';
import propTypes from 'prop-types';


const DashBoardHead = ({currentWeatherData}) => (

    <div>
        <span>Current weather:</span>
        <h1>
            <div style={styles.containerStyles}>
                <span>{currentWeatherData.name}</span>
                <span>{currentWeatherData.main.temp} &deg;C</span>
                <img src={`https://openweathermap.org/img/w/${currentWeatherData.weather[0].icon}.png`}
                     alt="weatherIcon"/>
            </div>
        </h1>
        <DashBoardTable
            currentWeatherData={currentWeatherData}
        />
    </div>

);

DashBoardHead.propTypes = {
    currentWeatherData: propTypes.object
};

const styles = {
    containerStyles : {
        display: 'flex',
        justifyContent: 'space-around',
    }
};

export default DashBoardHead;
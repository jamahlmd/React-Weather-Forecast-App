import React from 'react';
import propTypes from 'prop-types';
import DashBoardHead from './DashBoardHead';
import DashBoardBody from './DashBoardBody';
import DashBoardSidebar from './DashBoardSidebar';
import { Col,Row } from 'antd';
import moment from "moment/moment";



//If currentWeatherData.message exists display only that message (currentWeatherData.message is an error message so that means that the search was unsuccessful)
//Else render the DashBoard components and pass currentWeatherData and forecastWeatherData
//Dashboards components are wrapped in an if statement to prevent errors during rerendering
const DashBoard = ({currentWeatherData, forecastWeatherData}) => (
        <div style={{flex: 1}}>
            {currentWeatherData.message
                ? <h1 style={{textAlign: 'center'}}>{currentWeatherData.message}</h1>
                : (
                    Object.keys(currentWeatherData).length > 0 && forecastWeatherData && (
                        <Row type="flex" gutter={{lg: 6, md: 0}}>
                            <Col lg={{span: 6, offset: 0, order: 0}} md={{span: 20, offset: 2,order: 1}} xs={{span: 20, offset: 2,order: 1}}>
                                <DashBoardSidebar
                                    data={forecastWeatherData.slice(0, 8)}
                                />
                            </Col>


                            <Col lg={{span: 12, offset: 0}} md={{span: 20, offset: 2}} xs={{span: 20, offset: 2}}>
                                <DashBoardHead
                                    currentWeatherData={currentWeatherData}
                                />

                                <DashBoardBody
                                    labels={forecastWeatherData
                                        .slice(0, 7)
                                        .map((dataset) => moment.unix(dataset.dt).format("MMM Do LT"))}
                                    data={forecastWeatherData
                                        .slice(0, 7)
                                        .map((dataset) => dataset.main.temp)}
                                />
                            </Col>


                            <Col lg={{span: 6, offset: 0, order: 0}} md={{span: 20, offset: 2, order: 2}} xs={{span: 20, offset: 2,order: 1}}>
                                <DashBoardSidebar
                                    data={forecastWeatherData.slice(8, 16)}
                                />
                            </Col>
                        </Row>
                    )
                )}
        </div>
    )
;

DashBoard.propTypes = {
    currentWeatherData: propTypes.object,
    forecastWeatherData: propTypes.array,
};


export default DashBoard;
import React from 'react';
import {List, Avatar} from 'antd';
import propTypes from 'prop-types';
import moment from "moment/moment";



const DashBoardSidebar = ({data}) => (

        <List
            size="small"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} />}
                        title={<div style={styles.titleStyles}><span>{moment.unix(item.dt).format("MMM Do LT")}</span><span>{item.main.temp}&deg;C</span></div>}
                        description={`${item.weather[0].description} with wind speed ${item.wind.speed} mph`}
                    />
                </List.Item>
            )}
            />

);

DashBoardSidebar.propTypes = {
  data: propTypes.array.isRequired
};

const styles = {
  titleStyles: {
      display: 'flex',
      justifyContent: 'space-around',
  }
};

export default DashBoardSidebar;
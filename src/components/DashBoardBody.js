import React from 'react';
import {Line} from 'react-chartjs-2';
import propTypes from 'prop-types';


const DashBoardBody = ({labels,data}) => (

    <div>
        <span>Forecast:</span>
                <Line data={{
                    labels: labels,
                    datasets: [{
                        label: 'Temperature',
                        borderColor: 'rgb(173, 214, 255)',
                        data: data,
                    }]
                }}
                      options={{
                          scales: {
                              yAxes: [{
                                  scaleLabel: {
                                      display: true,
                                      labelString: 'Degrees Celcius'
                                  }
                              }]
                          },
                      }}
                />
    </div>

);

DashBoardBody.propTypes = {
  labels: propTypes.array,
  data: propTypes.array,

};

export default DashBoardBody;
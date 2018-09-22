import React, {Component} from 'react';
import { Progress } from 'antd';
import propTypes from 'prop-types';


class Refresh extends Component {
    state = {
        running: this.props.refresh,
        elapsedTime: 0,
        previousTime: 0

    };



    //Start the ticking
    componentDidMount = () => {
        this.onStart();
        this.interval = setInterval(this.onTick, 100);
    };



    //If the refresh prop changed, save it to state so that this component know whether to tick or not
    //If the lastSearch prop changed (means the user entered a new city)
    //reset the timer to keep it in sync with the fetchdata interval
    componentDidUpdate = (prevProps, prevState) => {
        prevProps.refresh !== this.props.refresh && this.setState({running: this.props.refresh});

        prevProps.lastSearch !== this.props.lastSearch && this.onReset();
    };

    componentWillUnmount = () =>
        clearInterval(this.interval);

    //If the this.state.running is true, keep ticking until the timer hits 30 seconds and then reset it
    //Else reset the timer
    onTick = () => {
        if(this.state.running){
            const now = Date.now();

            if(Math.floor(this.state.elapsedTime / 1000) >= 30) {
                this.onReset();
            } else {
                this.setState({
                    previousTime: now,
                    //Added half a second because I found that the tickinginterval didn't sync really well with the fetchdatainterval
                    //To sync them better I think I had to keep this state in App.js
                    elapsedTime: this.state.elapsedTime + (now - this.state.previousTime) + 0.45
                })
            }
        } else {
            this.onReset();
        }
    };

    onStart = () => {
        this.setState({
            running: true,
            previousTime: Date.now(),
        })
    };

    onReset = () => {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now()
        })
    };


    render(){


        let seconds = 30 - Math.floor(this.state.elapsedTime / 1000);

        return(
            <div className="responsive_progressbar" style={{width: 270, paddingTop: '3px'}}>
                <span>Refresh in: {seconds}</span>
                <Progress
                    percent={100 - (seconds * 3.34)}
                    size="small"
                    format={ () => null}
                />
            </div>
        )
    }
}

Refresh.propTypes = {
  refresh: propTypes.bool.isRequired,
  lastSearch: propTypes.string.isRequired
};

export default Refresh;
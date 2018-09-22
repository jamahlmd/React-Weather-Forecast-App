import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import LoadingSpinner from './LoadingSpinner';
import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';
import DashBoard from './DashBoard';



class App extends Component {
  state = {
      city: 'prague',
      currentWeatherData: {},
      forecastWeatherData: [],
      loading: true,
      recentSearches: []
  };



    componentDidMount = () => {
        //Try to get recentSearches from localstorage and save it to the state
        try {
            const json = localStorage.getItem('recentSearches');
            const recentSearches = JSON.parse(json);

            recentSearches && this.setState({recentSearches});
        }
        catch (e){
            console.log(e);
        }

        //Fetch weather data and set interval
        this.fetchWeatherData();
        this.setInterval();
    };



    componentDidUpdate = (prevProps, prevState) => {
        //Fetch new weather data with the new city that the user entered
        //And reset interval so that it will run every 30 seconds from the time the user searched for a new city
        if(prevState.city !== this.state.city) {
            this.fetchWeatherData();
            this.removeInterval();
            this.setInterval();
        }

        //If the this.state.recentSearches array changed, save it to localstorage
        if(prevState.recentSearches !== this.state.recentSearches){
            const json = JSON.stringify(this.state.recentSearches);

            localStorage.setItem('recentSearches',json);
        }
    };



    //Remove interval to prevent memory leaks
    componentWillUnmount = () => this.removeInterval();



    //Set interval so that this.fetchWeatherData will run every 30 seconds
    //But only fetch data again when the previous search was successful
    //So that it only fetches when the user has entered a proper city
    setInterval = () =>
        this.fetchInterval = setInterval( () => !!this.state.forecastWeatherData && this.fetchWeatherData(), 30000);



    removeInterval = () => clearInterval(this.fetchInterval);



    //Set loading to true, fetch data from 2 endpoints and save data to state, set loading false
    //If search is successful, add the city name to the start of the this.state.recentSearches array
    fetchWeatherData = () => {
      this.setState({loading: true});
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=3e618778d6154498981e7b9a4aa3e7a6`)
          .then( (res) => res.json())
          .then( (data) => {
              this.setState({currentWeatherData: data});
              return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&APPID=3e618778d6154498981e7b9a4aa3e7a6`)
          })
          .then( (res) => res.json())
          .then( (data) => {
              this.setState({forecastWeatherData: data.list, loading: false});
              if (data.list) {
                  if (!this.state.recentSearches.includes(this.state.city)) {
                      this.setState((previousState) => ({recentSearches: [this.state.city,...previousState.recentSearches.slice(0,3)]}));
                  } else {
                      this.setState((previousState) => ({
                          recentSearches: [this.state.city,...previousState.recentSearches.filter((item) => item !== this.state.city)]
                      }));
                  }
              }
          })
          .catch( (err) => console.log(err));
  };



  handleSetCity = (newCity) => this.setState({city:newCity.toLowerCase()});



  render() {
      return (
      <div style={styles.bodyStyles}>
          <Header
            title="Weather Forecast App"
          />
          <SearchForm
              lastSearch={this.state.city}
              //If the last search was successful let the refresh component countdown otherwise not
              refresh={!!this.state.forecastWeatherData}
              loading={this.state.loading}
              current={this.state.city}
              recent={this.state.recentSearches}
              onSearch={this.handleSetCity}
          />
          {this.state.loading
              ? <LoadingSpinner/>
              : (

                  <DashBoard
                      currentWeatherData={this.state.currentWeatherData}
                      forecastWeatherData={this.state.forecastWeatherData}
                  />
          )}
          <Footer
            text="Open Weather Map Api"
          />
      </div>
    );
  }
}

const styles = {
    bodyStyles: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    }
};

export default App;

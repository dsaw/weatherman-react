import React, {Component, Fragment, useEffect} from 'react';
import {Row, Col, Container, CardGroup} from "react-bootstrap";
import WeatherCard from '../../components/weather_card/WeatherCard';
import CurrentInfo from '../../components/weather/CurrentInfo';
import CurrentInfoDetail from '../../components/weather/CurrentInfoDetail';
import WeatherWeek from '../weather_week/WeatherWeek';
import {AddressContext} from  '../../context/address/Address';
import {getDayFromDate} from '../../utils/DateHelper';
import FetchWeatherData from '../../utils/FetchWeatherHelper';
import API_URL from '../../utils/API';

import * as forecastData from '../../data/metaweather.fiveday.forecast.json';
// for example

class WeatherForecast extends Component {

  static contextType = AddressContext;
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      address: {},
      forecast: forecastData.default,
      weatherArray: forecastData.consolidated_weather
    };

    // can use forecast.timezone_name
  }

  fetchWeatherData = async (address) => {
    try {
      console.log(address);
      let weatherForecast = await FetchWeatherData(
        this.context.latLng, address
      );
      // set data in state here
      this.setState({
        address: address,
        forecast: weatherForecast,
        weatherArray: weatherForecast.consolidated_weather
      });

    } catch (error) {
      console.log(error);
    }
  }


  componentDidMount() {
    let woeid = this.context.woeid;

  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    let address = this.context.address;

    if (this.context.address.woeid !== prevState.address.woeid) {
      console.log(this.context.address.woeid, prevState.address.woeid);
      console.table(this.context);
      this.fetchWeatherData(address);
    }

  }

  render() {
    // refactor this later to not have side effects in render
    let address = this.context.address;

    return ( <Container>
      <Row className = "justify-content-md-space-between" >
      <div>
      <CurrentInfo forecast = {this.state.forecast} address = {this.state.address}>
       </CurrentInfo> </div>

      </Row> <Row className = "d-flex flex-row justify-content-between" >
      <CurrentInfoDetail currentWeather = {this.state.weatherArray[0]}> </CurrentInfoDetail> </Row>

      <div className = "d-flex flex-xs-column flex-sm-row" >
      <WeatherWeek forecast = {this.state.weatherArray}>
      </WeatherWeek> </div>

      </Container>
    );

  }
}

export default WeatherForecast;

import React, {Component, Fragment, useEffect} from 'react';
import {Row, Col, Container, CardGroup} from "react-bootstrap";
import WeatherCard from '../../components/weather_card/WeatherCard';
import CurrentInfo from '../../components/weather/CurrentInfo';
import WeatherWeek from '../weather_week/WeatherWeek';
import {AddressContext} from  '../../context/address/Address';
import {getDayFromDate} from '../../utils/DateHelper';
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
      weather_array: forecastData.consolidated_weather
    };

    // can use forecast.timezone_name
  }


  componentDidMount() {
    let woeid = this.context.woeid;

  }

  componentDidUpdate(prevProps) {
    let woeid = this.context.woeid;
  }

  render() {
    let address = this.context.address;

    return(
      <Container>
      <Row className="justify-content-md-space-between">
         <div>
           <p className="">{this.state.address.title}</p>
           <CurrentInfo forecast={this.state.forecast} address={address}></CurrentInfo>
         </div>

      </Row>
      <Row className="justify-content-md-space-between">
      </Row>

     <div className="d-flex flex-xs-column flex-sm-row">
        <WeatherWeek forecast={this.state.weather_array}>
        </WeatherWeek>
     </div>

     </Container>
    );

  }
}

export default WeatherForecast;

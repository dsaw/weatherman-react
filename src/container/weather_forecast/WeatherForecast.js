import React, {Component, Fragment} from 'react';
import {Row, Col, Container, CardGroup} from "react-bootstrap";
import WeatherCard from '../../components/weather_card/WeatherCard';
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
      forecast: forecastData.consolidated_weather
    };
  }


  componentDidMount() {
    let woeid = this.context.woeid;

  }

  componentDidUpdate(prevProps) {
    let woeid = this.context.woeid;
  }

  render() {

    return(
      <Container>
      <Row className="justify-content-md-space-between">
      </Row>
      <Row className="justify-content-md-space-between">
      </Row>

     <div class="d-flex flex-xs-column flex-sm-row">
        <WeatherWeek forecast={this.state.forecast}>
        </WeatherWeek>
     </div>

     </Container>
    );

  }
}

export default WeatherForecast;

import React, {Component, Fragment} from 'react';
import {Row, Col} from "react-bootstrap";
import WeatherCard from './components/weather_card/WeatherCard';


class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      address: {}
    };
  }

  render() {
    return <Row className="justify-content-md-space-between">
     <Col><WeatherCard day="Wednesday" highestTemp={35} lowestTemp={34} weatherType="cloudy" humidity={21} speed={2}> </WeatherCard></Col>
     <Col><WeatherCard day="Monday" highestTemp={25} lowestTemp={24} weatherType="sunny" humidity={1} speed={3}> </WeatherCard></Col>
    </Row>
  }
}

export default WeatherForecast;

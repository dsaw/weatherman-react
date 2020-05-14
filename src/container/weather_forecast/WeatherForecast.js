import React, {Component, Fragment} from 'react';
import {Row, Col} from "react-bootstrap";
import WeatherCard from '../../components/weather_card/WeatherCard';
import {AddressContext} from  '../../context/address/Address';
import {getDayFromDate} from '../../utils/DateHelper';


class WeatherForecast extends Component {

  static contextType = AddressContext;
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      address: {},
      forecast: [{"id":6597162760667136,"weather_state_name":"Heavy Cloud",
              "weather_state_abbr":"hc","wind_direction_compass":"NE",
              "created":"2020-05-14T15:16:02.498042Z","applicable_date":"2020-05-14",
              "min_temp":5.545,"max_temp":13.629999999999999,"the_temp":13.855,
              "wind_speed":5.570655122089664,"wind_direction":44.00101701768258,
              "air_pressure":1022.5,"humidity":48,"visibility":12.469987771414937,
              "predictability":71},
              {"id":5838608386752512,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"NNW","created":"2020-05-14T15:16:02.602924Z","applicable_date":"2020-05-15","min_temp":5.625,"max_temp":16.475,"the_temp":15.43,"wind_speed":3.069653748028845,"wind_direction":341.5,"air_pressure":1024.5,"humidity":48,"visibility":12.446375666109919,"predictability":71}
            ]
    };
  }


  componentDidMount() {
    let woeid = this.context.woeid;

  }

  componentDidUpdate(prevProps) {
    let woeid = this.context.woeid;
  }

  render() {

    return(<Row className="justify-content-md-space-between">
    {this.state.forecast.map((day, index) => (
      <Col key={day.id}>
        <WeatherCard day={getDayFromDate(day.applicable_date)} highestTemp={day.max_temp} lowestTemp={day.min_temp} weatherType="cloudy" humidity={day.humidity} speed={day.wind_speed}>
        </WeatherCard></Col>
    ))}
      </Row>);

  }
}

export default WeatherForecast;

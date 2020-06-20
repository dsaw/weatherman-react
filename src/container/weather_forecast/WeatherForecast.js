import React, {Component, Fragment, useEffect, useContext, useState} from 'react';
import {Row, Col, Container, CardGroup} from "react-bootstrap";
import Error from '../../components/error/Error';
import WeatherCard from '../../components/weather_card/WeatherCard';
import CurrentInfo from '../../components/weather/CurrentInfo';
import CurrentInfoDetail from '../../components/weather/CurrentInfoDetail';
import Loader from '../../components/loader/Loader';
import WeatherWeek from '../weather_week/WeatherWeek';
import {AddressContext} from  '../../context/address/Address';
import {getDayFromDate} from '../../utils/DateHelper';
import {isCityValid, isForecastValid} from '../../utils/validityHelper';
import FetchWeatherData from '../../utils/FetchWeatherHelper';
import API_URL from '../../utils/API';

import * as forecastData from '../../data/metaweather.fiveday.forecast.json';
// for example

const WeatherForecast = () =>  {

  const addressContext = useContext(AddressContext);
  const [forecast, setForecast] = useState(forecastData.default);
  const [weatherArray, setWeatherArray] = useState(forecastData.consolidated_weather);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);


  const fetchWeatherData = async () => {
    try {
      setIsLoading(true);
      let weatherForecast = await FetchWeatherData(
        addressContext
      );
      // set data in state here
      if (isForecastValid(weatherForecast)) {
        setForecast(weatherForecast);
        setWeatherArray(weatherForecast.consolidated_weather);
        setisError(false);
      }

    } catch (error) {
      setisError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    () => {
      // add some checks here later
      if (addressContext.latLng) {
        fetchWeatherData();
      }

    }
    , [addressContext.latLng]);
    // add loader component
    return (isLoading ? <Fragment> <Loader message={isCityValid(addressContext.cityName) ? `Loading weather forecast for ${addressContext.cityName}...` : `Loading weather forecast...` } /></Fragment> :
    (isError ? <Error errorMessage={"Something went wrong, weather can't be fetched right now"}/> :
      <Container>
      <Row className = "justify-content-md-space-between" >
      <div>
      <CurrentInfo forecast = {forecast} address = {addressContext.address}>
       </CurrentInfo> </div>

      </Row> <Row className = "d-flex flex-row justify-content-between" >
      <CurrentInfoDetail currentWeather = {weatherArray[selectedDay]}> </CurrentInfoDetail> </Row>

      <div className = "d-flex flex-xs-column flex-sm-row" >
      <WeatherWeek forecast = {weatherArray} clickCallback={(index) => {setSelectedDay(index)}}>
      </WeatherWeek> </div>

      </Container>)
    );


}

export default WeatherForecast;

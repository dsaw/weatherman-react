import React, {Component, Fragment, useEffect, useContext, useState} from 'react';
import Error from '../../components/error/Error';
import WeatherCard from '../../components/weather_card/WeatherCard';
import CurrentInfo from '../../components/weather/CurrentInfo';
import CurrentInfoDetail from '../../components/weather/CurrentInfoDetail';
import {WeatherIcon} from '../../components/weather/WeatherIcon';
import TimeOfDayCard from '../../components/weather_card/TimeOfDayCard';
import Loader from '../../components/loader/Loader';
import WeatherWeek from './WeatherWeek';
import WeatherTimeOfDay from './WeatherTimeOfDay';
import {AddressContext} from  '../../context/address/Address';
import {getDayFromDate, generateCustomDate} from '../../utils/DateHelper';
import {isCityValid, isForecastValid} from '../../utils/validityHelper';
import {fetchWeatherDailyForecast} from '../../utils/FetchWeatherHelper';

import './WeatherForecast.scss';

const WEATHER_SERVICE_URL = "https://openweathermap.org/";
const WEATHER_SERVICE_NAME = "OpenWeatherMap";

// Daily Weather Forecast
const WeatherForecast = () =>  {

  const addressContext = useContext(AddressContext);
  const [forecast, setForecast] = useState({});
  const [weatherArray, setWeatherArray] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');


  const fetchWeatherData = async () => {
    try {
      setIsLoading(true);
      setLoadingMessage(isCityValid(addressContext.cityName) ? `Loading weather forecast for ${addressContext.cityName}...` : `Loading weather forecast...` );
      let weatherForecast = await fetchWeatherDailyForecast(
        addressContext
      );
      // set data in state here
      if (isForecastValid(weatherForecast)) {
        setShowContainer(true);
        setForecast(weatherForecast);
        setWeatherArray(weatherForecast.daily);
        setSelectedDay(0);
        setisError(false);
      }

    } catch (error) {
      setisError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  }

  useEffect(
    () => {
      // AddressContext also fetches geolocation/ip address so the status is updated here.
      setIsLoading(addressContext.isLoading);
      setLoadingMessage(addressContext.message);

    }
    , [addressContext.isLoading, addressContext.message]);


  useEffect(
    () => {
      // add some checks here later
      if (addressContext.latLng) {
        fetchWeatherData();
      }

    }
    , [addressContext.latLng]);

    let selectedDayEntry = weatherArray[selectedDay];

    // add loader component
    return (isLoading ? <Fragment> <Loader message={loadingMessage} /></Fragment> :
    (isError ? <Error errorMessage={"Something went wrong, weather can't be fetched right now"}/> :
      (showContainer ?
        <Fragment>
      <div className="forecast-container p-3 mx-auto">
      <div className = "d-flex flex-row justify-content-md-space-between" >

      <CurrentInfo forecast={forecast} address={addressContext.address}>
       </CurrentInfo>


      </div>
      <div className = "d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-between" >
      <CurrentInfoDetail currentWeather={weatherArray[selectedDay]} currentDate={generateCustomDate(forecast.timezone, selectedDay)}> </CurrentInfoDetail>
      </div>

      <div className="d-sm-none d-md-flex flex-row m-3">
        <WeatherTimeOfDay selectedDay={weatherArray[selectedDay]} />
      </div>

      <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row">
      <WeatherWeek selectedIndex={selectedDay} forecast={weatherArray} timezone={forecast.timezone} clickCallback={(index) => {setSelectedDay(index)}}>
      </WeatherWeek>
      </div>
      </div>
      <div id="poweredBy" className="mx-auto text-center text-dark">
        Powered by&nbsp;<a href={WEATHER_SERVICE_URL} target="_blank" rel="noreferrer noopener">{WEATHER_SERVICE_NAME}</a>
      </div></Fragment>: null))
    );


}

export default WeatherForecast;

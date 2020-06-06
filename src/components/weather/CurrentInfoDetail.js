import React, {Component, Fragment, useEffect, useState, useRef} from 'react';
import moment from 'moment-timezone';
import getWeatherIcon from '../../utils/getWeatherIcon';
import WeatherIcon from './WeatherIcon';
import assetsSrc from '../../utils/assetsSrc';

function CurrentInfoDetail({currentWeather, address}) {

// currentWeather will be just the weather forecast item for one day
  return (
      <Fragment>
        <div className="d-flex flex-row">
        <div className="d-flex flex-row p-2 justify-content-start ">
          <div>
              <img src={`${assetsSrc}/${getWeatherIcon(currentWeather.weather_state_abbr)}`} alt={currentWeather.weather_state_name} className="img-fluid w-75 h-75" />
              <p className="text-capitalize font-medium">{currentWeather.weather_state_name}</p>
          </div>
          <div>
          <h2>{Math.round(currentWeather.the_temp)}</h2>
          </div>
        </div>

        <div className="d-flex flex-column p-2 mr-auto">
          {currentWeather.precipitation ? (<p>Precipitation: {} </p>) : null}
          {currentWeather.humidity ? (<p>Humidity: {currentWeather.humidity}</p>) : null}
          {currentWeather.wind_speed ? (<p>Wind speed: {Math.round(currentWeather.wind_speed)} <WeatherIcon iconName={currentWeather.wind_direction_compass}/> </p>) : null }
        </div>
       </div>

      </Fragment>

  );

}




export default CurrentInfoDetail;

import React, {Component, Fragment, useEffect, useState, useRef, useContext} from 'react';
import moment from 'moment-timezone';
import {isValid} from '../../utils/validityHelper';
import {convertToFahrenheit} from '../../utils/temperatureHelper';
import getWeatherIcon from '../../utils/getWeatherIcon';
import {UnitContext} from '../../context/unit/Unit';
import {WeatherIcon, WeatherDirectionIcon} from './WeatherIcon';
import assetsSrc from '../../utils/assetsSrc';

function CurrentInfoDetail({currentWeather, address}) {
  const {weatherUnit, setWeatherUnit} = useContext(UnitContext);

  const unitClick = (unit) => {
       setWeatherUnit(unit);
  }

  const convertToMetric = (mph) => {
      //  meters per second
      return 0.45 * mph;
  }


// currentWeather will be just the weather forecast item for one day
  return (
      (isValid(currentWeather)) ?
      <Fragment>
        <div className="detail-container d-flex flex-row p-2 justify-content-start">
          <div>
              <img src={`${assetsSrc}/${getWeatherIcon(currentWeather.weather_state_abbr)}`} alt={currentWeather.weather_state_name} className="img-fluid w-75 h-75" />
              <p className="text-capitalize font-medium">{currentWeather.weather_state_name || ''}</p>
          </div>
          <div>
          <p>
          <span className="h3">{Math.round(weatherUnit === "C" ? currentWeather.the_temp : convertToFahrenheit(currentWeather.the_temp))}</span> <WeatherIcon iconName="degrees"/>
          <span className="font-weight-light" style={{'font-size': '1.5rem'}}>
          <span className="cursor-pointer " onClick={() => unitClick("C")}>C</span>  |
          <span className="cursor-pointer" onClick={() => unitClick("F")}> F</span>
          </span>
          </p>
          <p>
          <span className="font-weight-normal">{moment(currentWeather.applicable_date,"YYYY-MM-DD").format('MMM Do') || ''}</span>
          </p>

          </div>
        </div>
        <div className="detail-container d-flex flex-column p-2">
          {currentWeather.precipitation ? (<p>Precipitation: {currentWeather.precipitation || ''} </p>) : null}
          {currentWeather.humidity ? (<p>Humidity: {currentWeather.humidity || ''} %</p>) : null}
          {currentWeather.wind_speed ? (<p>Wind speed: {(weatherUnit === "C" ? convertToMetric(currentWeather.wind_speed).toFixed(2) + ' mps'
                    : currentWeather.wind_speed.toFixed(2) + ' mph')}
                  <WeatherDirectionIcon iconName={currentWeather.wind_direction_compass}/> </p>) : null }
        </div>
      </Fragment> : null
  );

}




export default CurrentInfoDetail;

import React, {Component, Fragment, useEffect, useState, useRef} from 'react';
import moment from 'moment-timezone';
import getWeatherIcon from '../../utils/getWeatherIcon';
import assetsSrc from '../../utils/assetsSrc';

function CurrentInfoDetail({currentWeather, address}) {

// currentWeather will be just the weather forecast item for one day
  return (
      <Fragment>
        <div className="d-flex flex-row p-2 justify-content-start">
          <div><img src={`${assetsSrc}/${getWeatherIcon(currentWeather.weather_state_abbr)}`} alt={currentWeather.weather_state_name} className="w-25 h-50" /> </div>
          <div><h2>{Math.round(currentWeather.the_temp)}</h2> </div>
        </div>

        <div className="d-flex flex-row p-2 justify-content-end">
        </div>


      </Fragment>

  );

}




export default CurrentInfoDetail;

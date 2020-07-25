import {isEmpty, isNil} from 'lodash';
const isCityValid = (name) => {
  return (name ? true : false);
};

const isForecastValid = (forecast) => {
  // api specific - metaweather returns detail as not found
  return forecast && (forecast.lat && forecast.lon);
}

const isValid = (value) => {
  return !isEmpty(value) && !isNil(value);
}


export {isCityValid, isForecastValid, isValid};

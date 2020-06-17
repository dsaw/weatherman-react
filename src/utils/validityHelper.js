
const isCityValid = (name) => {
  return (name ? true : false);
};

const isForecastValid = (forecast) => {
  // api specific - metaweather returns detail as not found
  return !(forecast && forecast.detail);
}


export {isCityValid, isForecastValid};

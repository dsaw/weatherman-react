const isProduction = process.env.NODE_ENV === 'production';
// using cors-anywhere for the time being
// localhost for testing the proxy locally
const PREFIX = isProduction ? `https://cors-proxy-serv.herokuapp.com/` : `http://localhost:8080/`;
const WEATHER_API_SERVICE = "https://api.openweathermap.org/data/2.5/";
//MetaWeather -> https://www.metaweather.com/api/
const API_URL = `${PREFIX}${WEATHER_API_SERVICE}`;
export {
  PREFIX,
  API_URL
};

const isProduction = process.env.NODE_ENV === 'production'
// using cors-anywhere for the time being
// MetaWeather -> https://www.metaweather.com/api/

const WEATHER_API_SERVICE = "https://api.openweathermap.org/data/2.5/";
export default isProduction
  ? `https://cors-proxy-serv.herokuapp.com/${WEATHER_API_SERVICE}`
  : WEATHER_API_SERVICE;

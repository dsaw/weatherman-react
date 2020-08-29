// this URL points to the root directory of the app based on dev or prod environment
const isProduction = process.env.NODE_ENV === 'production';
const WEATHER_SERVICE_SRC = 'http://openweathermap.org/img/wn';
export default isProduction ? './assets' : WEATHER_SERVICE_SRC;

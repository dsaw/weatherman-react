const isProduction = process.env.NODE_ENV === 'production'
export default isProduction
  ? 'https://weather-react-api.now.sh'
  : 'https://www.metaweather.com/api/'

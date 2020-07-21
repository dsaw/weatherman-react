const isProduction = process.env.NODE_ENV === 'production'
// using cors-anywhere for the time being
export default isProduction
  ? 'https://cors-proxy-serv.herokuapp.com/https://www.metaweather.com/api/'
  : 'https://www.metaweather.com/api/'

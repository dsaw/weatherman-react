const isProduction = process.env.NODE_ENV === 'production'
export default isProduction
  ? 'https://www.metaweather.com/api/'
  : 'https://www.metaweather.com/api/'

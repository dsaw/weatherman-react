

# WeatherMan React
[![Build Status](https://travis-ci.org/dsaw/weatherman-react.svg?branch=master)](https://travis-ci.org/github/dsaw/weatherman-react)
[![Open Source Helpers](https://www.codetriage.com/dsaw/weatherman-react/badges/users.svg)](https://www.codetriage.com/dsaw/weatherman-react)

A minimalistic weather forecast app made in React.

Access it [here](https://dsaw.github.io/weatherman-react/). You can search by typing any location to get daily forecast & location map

# Features
- 7 day forecast plus 4 times a day feels like temperature.
- Map snippet - show location with cloud, wind, temperature layers.
- Uses [OpenWeatherMap](https://openweathermap.org/) to fetch the forecast/layers & [OpenStreetMap](https://www.openstreetmap.org/about) for the map tiles.

# Getting Started

## Basic Setup

Fork the repository & use the `master` branch

Install packages
```
yarn install
```
Start development
```
yarn start
```
Open [http://localhost:3000](http://localhost:3000).
After changes are done, run:
```
yarn lint
yarn prettify
```

## Proxy
Accessing 3rd party API requires a CORS proxy. Have used cors-anywhere running on [Heroku](https://cors-proxy-serv.herokuapp.com/)

To setup your own, clone [this](https://github.com/dsaw/cors-anywhere) repo & run:
```
git checkout weather-proxy
heroku create
```

## API key
You'll need to export on the proxy environ after obtaining the key from OWM.
```
OWM_API_KEY=*YOUR_KEY*
```

# Challenges
- All free API services don't have hourly forecasts. OpenWeatherMap has released a one call API with 7-day forecast but only 48 hour hourly forecast.
- Tried out MetaWeather in v0.1 which is good. There were issues though - one was time zones were incorrect.
- For search, [Algolia API](https://www.algolia.com/doc/rest-api/search/) had been used which fetches list of latitudes & longitude. The actual data came from MetaWeather, which returns locations based on 'where on earth ids' so another API call has to be made to search the possible list of locations closest to the location parameters. This was unreliable with results sometimes coming from neighbouring countries.

# Attribution
- [react-autosuggest](http://react-autosuggest.js.org/) - nice search bar
- [OpenWeatherMap]() - weather condition images
- [weather-icons](https://erikflowers.github.io/weather-icons/) - weather utility icons like wind direction, Celsius, Fahrenheit.
- [leaflet-openweathermap](https://github.com/buche/leaflet-openweathermap) - map binding to integrate with OWM layers + really good [Leaflet](https://leafletjs.com/).
- [cors-anywhere](https://github.com/Rob--W/cors-anywhere) - proxy setup
- [Header png](https://pnghut.com/png/kEWKsWGE3x/cartoon-cloud-meteorological-phenomenon-transparent-png) from pnghut.
- [Background photo](https://www.freepik.com/photos/background) created by Freepik. 
- Shout out to [iamsainikhil](https://github.com/iamsainikhil/weather-react) & his beautiful [weather-react app](https://github.com/iamsainikhil/weather-react) for guidance.

# Contact
Built by Devesh!

[![Support my work](https://cdn.buymeacoffee.com/buttons/default-blue.png)](https://www.buymeacoffee.com/dsawthewhat)

For feedback, questions or just anything email on: [devesh47cool@gmail.com](devesh47cool@gmail.com)

# License
- [GNU GPLv3](https://www.gnu.org/licenses/quick-guide-gplv3.html) Copyright (c) Devesh Sawant 2020.

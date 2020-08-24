# Table of Contents

- **[Getting Started](https://github.com/dsaw/weatherman-reactt#-getting-started)**

- **[Challenges](https://github.com/dsaw/weatherman-react#-challenges)**

- **[TODO](https://github.com/dsaw/weatherman-react#-todo)**

- **[Contribution](https://github.com/dsaw/weatherman-react#-contribution)**

- **[License](https://github.com/dsaw/weatherman-react#-license)**

- **[Contact](https://github.com/dsaw/weatherman-react#-contact)**

- **[Acknowledgements](https://github.com/dsaw/weatherman-react#-acknowledgements)**


# Getting Started

## Basic Setup

- Clone the repository & use the `master` branch
```
git clone https://github.com/dsaw/weatherman-react.git
```
- Install the packages using the command
```
npm install
```
- Run following to start development
```
yarn start
```
- Open [http://localhost:3000](http://localhost:3000).
- The template is of Create React App - you can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- Powered by [MetaWeather](https://www.metaweather.com/api) currently.

# Features
- 7 day forecast plus 4 times a day feels like temperature.
- Map Snippet - show location with cloud, wind, temperature layers (leaftlet-openweathermap)

# Challenges
- All free API services don't have hourly forecasts. OpenWeatherMap has released a one call API with 7-day forecast but only 48 hour hourly forecast.
- Tried out MetaWeather at first which is good. There were issues though - one was time zones were incorrect.
- For search, [Algolia API](https://www.algolia.com/doc/rest-api/search/) had been used which fetches list of latitudes & longitude. The actual data comes from MetaWeather, which returns locations based on 'where on earth ids' so another API call has to be made to search the possible list of locations closest to the location parameters. This was unreliable with results sometimes coming from neighbouring countries.
- Switched to OpenWeatherMap One Call API to display 7 day forecast with its own search list.

# TODO
- Refactor
    - SCSS in one place & component style files
    - API specific code & presentation can be separated
- Use a dedicated proxy server as an endpoint
- Include hourly forecasts

# License
- Licensed for open source use through [GNU GPLv3](https://www.gnu.org/licenses/quick-guide-gplv3.html).

# Contact
- Built by Devesh!
- Email: [devesh47cool@gmail.com](devesh47cool@gmail.com)

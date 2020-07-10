import React, {Component} from 'react';


import SearchInput from './components/search/Search';
import WeatherCard from './components/weather_card/WeatherCard';
import WeatherForecast from './container/weather_forecast/WeatherForecast';
import {AddressContextProvider} from './context/address/Address';
import {UnitContextProvider} from './context/unit/Unit';
import ErrorBoundary from './container/error_boundary/ErrorBoundary';

import './sass/app.scss';
import {Row, Container, Col} from "react-bootstrap";



class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
   <div className="App">
     <AddressContextProvider>



       <ErrorBoundary>
        <div className="mw-100 w-50 mx-auto d-flex flex-column align-items-center" style={{minWidth: '10rem'}}>
          <SearchInput />
        </div>
      </ErrorBoundary>




     <Row id="content">
         <UnitContextProvider>
         <ErrorBoundary>
         <WeatherForecast></WeatherForecast>
         </ErrorBoundary>
         </UnitContextProvider>
     </Row>
     </AddressContextProvider>
     <Row id="footer">

     </Row>
   </div>
  );
}
}

export default App;

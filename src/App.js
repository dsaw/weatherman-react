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
     <div className="mx-auto d-flex flex-column justify-content-center">


       <ErrorBoundary>
        <section className="">
          <SearchInput />
        </section>
      </ErrorBoundary>


     </div>

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

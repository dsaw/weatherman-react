import React, {Component} from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchInput from './components/search/Search';
import ForecastMap from './components/weather/ForecastMap';
import WeatherForecast from './container/weather_forecast/WeatherForecast';
import {AddressContextProvider} from './context/address/Address';
import {UnitContextProvider} from './context/unit/Unit';
import ErrorBoundary from './container/error_boundary/ErrorBoundary';

import './sass/app.scss';
import {Row} from "react-bootstrap";



class App extends Component {

  render() {
  return (
   <div className="App">
     <Row id="header">
        <Header />
     </Row>

     <AddressContextProvider>

       <ErrorBoundary>
        <div className="mw-100 w-50 mx-auto d-flex flex-column align-items-center" style={{minWidth: '10rem'}}>
          <SearchInput />
        </div>
      </ErrorBoundary>

     <Row id="content">
         <UnitContextProvider>
         <ErrorBoundary>
         <WeatherForecast/>
         </ErrorBoundary>
         </UnitContextProvider>
     </Row>

     <Row id="content" className="my-4">
     <ErrorBoundary>
      <ForecastMap/>
     </ErrorBoundary>
     </Row>
     </AddressContextProvider>
      <Row>
        <div className="my-4 p-2">
        </div>
      </Row>
     <Row id="footer">
        <Footer />
     </Row>
   </div>
  );
}
}

export default App;

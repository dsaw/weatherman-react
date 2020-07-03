import React, {Component} from 'react';


import SearchInput from './components/search/Search';
import WeatherCard from './components/weather_card/WeatherCard';
import WeatherForecast from './container/weather_forecast/WeatherForecast';
import {AddressContextProvider} from './context/address/Address';
import {UnitContextProvider} from './context/unit/Unit';
import ErrorBoundary from './container/error_boundary/ErrorBoundary';

import './app.scss';
import {Row, Container, Col} from "react-bootstrap";



class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
   <Container className="App">
     <AddressContextProvider>
     <Row className="header">

      <Col>
       <ErrorBoundary>
        <section className="d-flex flex-column justify-content-center">
          <SearchInput />
        </section>
      </ErrorBoundary>
      </Col>

     </Row>

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
   </Container>
  );
}
}

export default App;

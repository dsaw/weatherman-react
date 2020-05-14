import React, {Component} from 'react';


import SearchInput from './components/search/Search';
import WeatherCard from './components/weather_card/WeatherCard';
import WeatherForecast from './container/weather_forecast/WeatherForecast';
import {AddressContextProvider} from './context/address/Address';

import logo from './logo.svg';
import './App.scss';
import {Row, Container, Nav, Jumbotron, Card, ListGroup,ListGroupItem, Col} from "react-bootstrap";



class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
   <Container className="App">
     <AddressContextProvider>
     <Row className="header">
         <Col sm={true} md={8} lg={6}>
          <SearchInput />
         </Col>
     </Row>

     <Row id="content">
         <WeatherForecast></WeatherForecast>
     </Row>
     </AddressContextProvider>
   </Container>
  );
}
}

export default App;

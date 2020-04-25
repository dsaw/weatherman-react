import React, {Component} from 'react';


import SearchInput from './components/search/Search';
import WeatherCard from './components/weather_card/WeatherCard';

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
     <Row className="header">
         <Col sm={true} md={8} lg={6}>
           <SearchInput />
         </Col>


     </Row>
     <Row id="content">
         <Row className="justify-content-md-space-between">
          <Col><WeatherCard day="Wednesday" highestTemp={35} lowestTemp={34} weatherType="cloudy" humidity={21} speed={2}> </WeatherCard></Col>
          <Col><WeatherCard day="Monday" highestTemp={25} lowestTemp={24} weatherType="sunny" humidity={21} speed={2}> </WeatherCard></Col>
         </Row>


     </Row>
   </Container>
  );
}
}

export default App;

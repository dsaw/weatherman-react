import React, {Component} from 'react';


import SearchInput from './components/Search/Search';
import WeatherCard from './components/WeatherCard/WeatherCard';

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
         <Nav variant="pills" activekey="/home"
              onSelect={selectedKey => alert(`selected ${selectedKey}`)}
              >
             <Nav.Item>
                 <Nav.Link href="/about"> About </Nav.Link>
             </Nav.Item>
         </Nav>
         <Col>
           <SearchInput />
         </Col>


     </Row>
     <Row id="content">
         <Jumbotron style={{width: '90%'}} className="justify-content-md-center" fluid>
             <h1> Weather man forecast!</h1>

         </Jumbotron>
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

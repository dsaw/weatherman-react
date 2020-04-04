import React, {Component} from 'react';
import SearchInput from './Search';


import logo from './logo.svg';
import './App.scss';
import {Row, Container, Nav, Jumbotron, Card, ListGroup,ListGroupItem, Col} from "react-bootstrap";

// weather update for one day
class WeatherCard extends Component {

  constructor(props) {
    super(props);
  }

  getWeatherIcon(weathertype) {
    return "assets/icons/" + weathertype + ".svg";
  }

  render() {
    return <Card style={{width: '18rem'}}>
        <Card.Body>
         <Card.Title>{this.props.day}</Card.Title>
         <Card.Img style={{width: '30%'}} className="weather-icon" variant="top" src={this.getWeatherIcon(this.props.weatherType)}/>

         <ListGroup horizontal>
           <ListGroupItem>{this.props.highestTemp}</ListGroupItem>
           <ListGroupItem>{this.props.lowestTemp}</ListGroupItem>
           <ListGroup>
            <ListGroupItem>{this.props.humidity}</ListGroupItem>
            <ListGroupItem>{this.props.speed}</ListGroupItem>
           </ListGroup>
         </ListGroup>
        </Card.Body>
    </Card>
  }
}

class WeeklyForecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Row className="justify-content-md-space-between">
     <Col><WeatherCard day="Wednesday" highestTemp={35} lowestTemp={34} weatherType="cloudy" humidity={21} speed={2}> </WeatherCard></Col>
     <Col><WeatherCard day="Monday" highestTemp={25} lowestTemp={24} weatherType="sunny" humidity={1} speed={3}> </WeatherCard></Col>
    </Row>
  }
}


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
         <Col>
           <input id="autocomplete-example" />
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

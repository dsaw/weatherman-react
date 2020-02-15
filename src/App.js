import React, {Component} from 'react';


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
        <Card.Img variant="top" src={this.getWeatherIcon(this.props.weatherType)}/>
        <Card.Body>
         <Card.Title>{this.props.day}</Card.Title>
         <ListGroup className="list-group-flush">
           <ListGroupItem>{this.props.highestTemp}</ListGroupItem>
           <ListGroupItem>{this.props.lowestTemp}</ListGroupItem>
         </ListGroup>
        </Card.Body>
    </Card>
  }
}







class App extends Component {

  render() {
  return (
   <Container className="App">
     <Row className="header">
         <Nav activekey="/home"
              onSelect={selectedKey => alert(`selected ${selectedKey}`)}
              >
             <Nav.Item>
                 <Nav.Link href="/about"> About </Nav.Link>
             </Nav.Item>
         </Nav>

     </Row>
     <Row id="content">
         <Jumbotron style={{width: '90%'}} className="justify-content-md-center" fluid>
             <h1> Weather man forecast!</h1>

         </Jumbotron>
         <Row className="justify-content-md-space-between">
          <Col><WeatherCard day="Wednesday" highestTemp={35} lowestTemp={34} weatherType="cloudy"> </WeatherCard></Col>
          <Col><WeatherCard day="Monday" highestTemp={25} lowestTemp={24} weatherType="sunny"> </WeatherCard></Col>
         </Row>


     </Row>
   </Container>
  );
}
}

export default App;

import React, {Component} from 'react';


import logo from './logo.svg';
import './App.scss';
import {Row, Container, Nav, Jumbotron, Card, ListGroup,ListGroupItem} from "react-bootstrap";

// weather update for one day
class WeatherCard extends Component {
  render() {
    return <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src=""/>
        <Card.Body>
         <Card.Title>Wed</Card.Title>
         <ListGroup className="list-group-flush">
           <ListGroupItem>34 </ListGroupItem>
           <ListGroupItem>23 </ListGroupItem>
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
         <Container>
          <WeatherCard> </WeatherCard>
         </Container>


     </Row>
   </Container>
  );
}
}

export default App;

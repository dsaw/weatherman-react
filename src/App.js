import React from 'react';


import logo from './logo.svg';
import './App.css';
import {Row, Container, Nav, Jumbotron} from "react-bootstrap";

function App() {
  return (
   <Container>
     <Row className="header">
         <Nav activekey="/home"
              onSelect={selectedKey => alert(`selected ${selectedKey}`)}
              >
             <Nav.Item>
                 <Nav.Link href="/about"> About </Nav.Link>
             </Nav.Item>
         </Nav>

     </Row>
     <Row>
         <Jumbotron className="justify-content-md-center" fluid>
             <h1> Weather man forecast!</h1>
         </Jumbotron>


     </Row>
   </Container>
  );
}

export default App;

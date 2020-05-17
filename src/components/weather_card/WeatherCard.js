import React, {Component} from 'react';
import {Card, ListGroup,ListGroupItem} from "react-bootstrap";

const roundNumbers = (num) => {
  return Math.round(num);
}


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

         <ListGroup variant="flush" horizontal>
           <ListGroupItem>{roundNumbers(this.props.highestTemp)}</ListGroupItem>
           <ListGroupItem>{roundNumbers(this.props.lowestTemp)}</ListGroupItem>

         </ListGroup>
         <ListGroup variant="flush">
          <ListGroupItem>{roundNumbers(this.props.humidity)}</ListGroupItem>
          <ListGroupItem>{roundNumbers(this.props.speed)}</ListGroupItem>
         </ListGroup>
        </Card.Body>
    </Card>
  }
}


export default WeatherCard;

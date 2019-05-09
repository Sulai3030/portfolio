import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,CardHeader, CardFooter, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
    <Jumbotron fluid style={{backgroundColor: '#055F82', color:'#FFC517'}}>
        <Container fluid>
          <h1 className="display-3">Sulai Sivadel : Web Developer</h1>
          <p className="lead"><p>Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React. Samples can be found here: https://sulai3030.github.io/</p>
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs="auto">
            <Card body>
              <CardHeader>RuneSkype</CardHeader>
              <CardTitle></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG).
              Getting Started
              Playing RuneSkype is easy, just download a copy from our homepage or our repo:
              </CardText>
              <CardFooter className="text-muted">
              <Button>Read More Here</Button></CardFooter>
            </Card>
          </Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Row>
          <Col xs="auto">
            <Card body>
              <CardHeader>RuneSkype</CardHeader>
              <CardTitle></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG).
              Getting Started
              Playing RuneSkype is easy, just download a copy from our homepage or our repo:
              </CardText>
              <CardFooter className="text-muted">
              <Button>Read More Here</Button></CardFooter>
            </Card>
          </Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
        </Row>
        </Row>

      </Container>

    </div>
  );
}

export default App;

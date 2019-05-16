import React from 'react';
import './App.css';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,CardGroup,
  CardSubtitle, CardBody,CardHeader, CardFooter, Row, Col, StyleSheet, CardColumns, Table } from 'reactstrap';


function App() {
  return (
    <div className="App"><Jumbotron fluid style={{backgroundColor: '#055F82', color:'#FFC517', textAlign: 'left', textWidth:'80%', textPadding:'50px'}}>
        <Container fluid>
          <h1 className="display-3"><center>Sulai Sivadel : Web Developer</center></h1>
          <p className="lead"><p>Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React. Samples can be found here: https://sulai3030.github.io/</p>
          </p>
        </Container>
    </Jumbotron>
    <div class = "box"><CardGroup>
      <Container>
      <Row>
        <Col sm={4}>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
            <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF'}}>
              <CardTitle>RuneSkype</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG).
              Getting Started
              Playing RuneSkype is easy, just download a copy from our homepage or our repo:</CardText>
              <Button>Read More Here</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>    
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
            <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF'}}>
              <CardTitle>Beer Near Here</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>Beer Near Here is a project to successfully connect discerning beer drinkers in Manhattan with bars in the city that serve the beers that they like. We start with a brief survey that takes in their preferences and matches those answers with the Untappd database. Using this API we can populate a map using the Google Maps API that then lists the locations of bars and taverns that carry the user's beer preference.</CardText>
              <Button>Read More Here</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm={4}>  
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
              <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF'}}>
                <CardTitle>The G.O.A.T. Voter App!</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>My second group project was the GOAT Voter App. G.O.A.T. Voter is a project created with the intention to get the youth vote informed and participating. Focusing on a mobile platform, our team pulled in info using various APIs to gather helpful voter information such as polling location, voting dates, candidate info, and ballot questions into one place. Now, the average US voter can easily enter their zipcode and find their nearest polling location and its hours. Using various APIs and incumbent webpage info, we were able to bulild an app that aids voters in participating in their civic duty. G.O.A.T. Voter.</CardText>
                <Button>Read More Here</Button>
              </CardBody>
            </Card>      
        </Col>
      </Row>
      </Container>
      </CardGroup>
      </div>
    
      <Container>
</Container>
    </div>
  );
}

export default App;

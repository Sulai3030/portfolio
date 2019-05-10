import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,CardGroup,
  CardSubtitle, CardBody,CardHeader, CardFooter, Row, Col, StyleSheet } from 'reactstrap';


function App() {
  return (
    <div className="App">
    <Jumbotron fluid style={{backgroundColor: '#055F82', color:'#FFC517', textAlign: 'left', textWidth:'80%', textPadding:'20px'}}>
        <Container fluid>
          <h1 className="display-3"><center>Sulai Sivadel : Web Developer</center></h1>
          <p className="lead"><p>Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React. Samples can be found here: https://sulai3030.github.io/</p>
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs="auto">
          <CardGroup></CardGroup>
            <Card body>
              <CardHeader>RuneSkype</CardHeader>
              <CardTitle></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText style = {{textAlign: 'left', textWidth:'80%', textPadding:'20px', textPosition:'absolute'}}>RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG).
              Getting Started
              Playing RuneSkype is easy, just download a copy from our homepage or our repo:
              </CardText>
              <CardFooter className="text-muted">
              <Button>Read More Here</Button></CardFooter>
            </Card>
          </Col>
          <Col xs="auto">
            <Card body>
              <CardHeader>Beer Near Here</CardHeader>
              <CardTitle></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText style = {{textAlign: 'left', textWidth:'50%', textPadding:'60px', textPosition:'absolute'}}>Beer Near Here is a project to successfully connect discerning beer drinkers in Manhattan with bars in the city that serve the beers that they like. We start with a brief survey that takes in their preferences and matches those answers with the Untappd database. Using this API we can populate a map using the Google Maps API that then lists the locations of bars and taverns that carry the user's beer preference.
              </CardText>
              <CardFooter className="text-muted">
              <Button>Read More Here</Button></CardFooter>
            </Card>
          </Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
        </Row>
        <CardGroup>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>My second group project was the GOAT Voter App. G.O.A.T. Voter is a project created with the intention to get the youth vote informed and participating. Focusing on a mobile platform, our team pulled in info using various APIs to gather helpful voter information such as polling location, voting dates, candidate info, and ballot questions into one place. Now, the average US voter can easily enter their zipcode and find their nearest polling location and its hours. Using various APIs and incumbent webpage info, we were able to bulild an app that aids voters in participating in their civic duty. G.O.A.T. Voter.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
      </Container>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,CardGroup,
  CardSubtitle, CardBody,CardHeader, CardFooter, Row, StyleSheet, CardColumns, Table, Col, Form, FormGroup, Label, Input, FormText, Column } from 'reactstrap';


function App() {
  return (
    <div className="App"><Jumbotron fluid style={{backgroundColor: '#055F82', color:'#FFC517', textAlign: 'left', textWidth:'80%', textPadding:'50px', padding: '20px'}}>
        <Container fluid>
          <h1 className="display-3"><center>Sulai Sivadel : Web Developer</center></h1>
          <p className="lead"><p>Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React. Samples can be found here: https://sulai3030.github.io/</p>
          </p>
        </Container>
    </Jumbotron>
    <div class = "box clearfix"><CardGroup>
      <Container>
      <Row>
        <Col sm={4}>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
            <CardBody body inverse style ={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px' }}>
              <CardTitle body inverse style={{color:'#ff3f81'}}>RuneSkype</CardTitle>
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
              <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px'}}>
                <CardTitle body inverse style={{color:'#ff3f81'}}>The G.O.A.T. Voter App!</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>My second group project was the GOAT Voter App. G.O.A.T. Voter is a project created with the intention to get the youth vote informed and participating. Focusing on a mobile platform, our team pulled in info using various APIs to gather helpful voter information such as polling location, voting dates, candidate info, and ballot questions into one place. Now, the average US voter can easily enter their zipcode and find their nearest polling location and its hours. Using various APIs and incumbent webpage info, we were able to bulild an app that aids voters in participating in their civic duty. G.O.A.T. Voter.</CardText>
                <Button>Read More Here</Button>
              </CardBody>
            </Card>      
        </Col>
        
        <Col sm={4}>  
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
              <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px'}}>
                <CardTitle body inverse style={{color:'#ff3f81'}}>Mongo Scraper</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>The MongoScraper Assignment was an excercise that required us to employ Handlebars, MongoDB, NodeJs and a Heroku backend.</CardText>
                <Button>Read More Here</Button>
              </CardBody>
            </Card> 
        </Col>
        <Col sm={4}>  
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
              <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px'}}>
                <CardTitle body inverse style={{color:'#ff3f81'}}>LIRI Bot Excercise</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>The LIRI Bot excercise is an assignment where we employed LIRI or Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in paramares and returns data. In this case it takes in parameters from both the Twitter and Spotify apps and interpolates that data and returns data to the user.</CardText>
                <Button>Read More Here</Button>
              </CardBody>
            </Card>      
        </Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
              <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px'}}>
                <CardTitle body inverse style={{color:'#ff3f81'}}>My Old Blog</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>My old blog, Dante Calabria's Sox was dedicated to film review and dissection. It was named after Dante Calbia, a player on the University of North Carolina Tar Heels basketball team who was noted for not wearing socks while he played. I was a professional writer of sustainable food recipes, TV and Film Reviews, as well as educational and Technical Writing. Samples of which can be found HERE</CardText>
                <Button>Read More Here</Button>
              </CardBody>
            </Card>
            <Form>
        <FormGroup>
          <Label for="exampleEmail">Contact Us</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Leave Us a Message!</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Row>
      </Container>
      </CardGroup>
      <Col flexGrow={1}>
        <Row vertical="center">
          <Col flexGrow={1} horizontal="center">
            <span> <Col sm={4}>
          <Card>    
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
            <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px', fontfamily: 'Roboto'}}>
              <CardTitle body inverse style={{color:'#ff3f81'}}>Beer Near Here</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>Beer Near Here is a project to successfully connect discerning beer drinkers in Manhattan with bars in the city that serve the beers that they like. We start with a brief survey that takes in their preferences and matches those answers with the Untappd database. Using this API we can populate a map using the Google Maps API that then lists the locations of bars and taverns that carry the user's beer preference.</CardText>
              <Button>Read More Here</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm={4}>  
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
              <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px'}}>
                <CardTitle body inverse style={{color:'#ff3f81'}}>NYT React Excercise</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>The React Search was a project that required us to use ReactJs while creating an app that would scrape data from the New York Times using their API so that an end-user would be able to search for articles from any time period that the New york Times published, say a recipe from the food section and then be able to save that date to their own clipboard.</CardText>
                <Button>Read More Here</Button>
              </CardBody>
            </Card>      
        </Col></span>
          </Col>
          <Col sm={4}>  
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
              <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px'}}>
                <CardTitle body inverse style={{color:'#ff3f81'}}>Firebase Assignment</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>The Firebase Assignment is a culmination of the first half of our learning utilizing HTML, CSS, JavaScript and Firebase. Also know as the Train Scheduuler assignment we were tasked with using Google's Firebase platform. Firebase allows you to store and sync data across all clients in realtime, and remains available when your app goes offline. The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.
</CardText>
                <Button>Read More Here</Button>
              </CardBody>
            </Card> 
        </Col>
          <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
              <CardBody body inverse style={{ backgroundColor: '#6994B3', borderColor: '#800',color:'#FFF', padding: '20px'}}>
                <CardTitle body inverse style={{color:'#ff3f81'}}>Giphy API Assignment</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>Our goal for this assignment was to create a webpage and dynamically populate a grid with gifs when the user input a search parameter. Using an array as well as jQuery and event handlers I was able to allow a user via an Ajax call to populate the page with appropriate gifs by stipulatinig the rating in the if statement.</CardText>
                <Button>Read More Here</Button>
              </CardBody>
            </Card> 
        </Row>
      </Col>
      </div>
    
      <Container>
</Container>
    </div>
  );
}

export default App;

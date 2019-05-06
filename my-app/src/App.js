import React from 'react';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
 


function App() {
  return (
    <div className="App">
    <div>
      <Jumbotron fluid >
        <Container fluid >
          <h1 className="display-3">Sulai Sivadel : Web Developer</h1>
          <p className="lead">Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React. Samples can be found here: https://sulai3030.github.io/
          </p>
        </Container>
      </Jumbotron>
      <div>
        <Nav>
          <NavItem>
            <NavLink href="https://github.com/Sulai3030">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/sulai3030/">LinkedIn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/Sulai3030/portfolio">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="sulai3030@gmail.com">Contact</NavLink>
          </NavItem>
        </Nav>
        <hr />
      <CardDeck>
      <Card body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody>
          <CardTitle>RuneSkype</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG).
          Getting Started
          Playing RuneSkype is easy, just download a copy from our homepage or our repo:</CardText>
          <Button>Read More Here</Button>
        </CardBody>
      </Card>
      <Card>
        
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
          <CardTitle>Beer Near Here</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Beer Near Here is a project to successfully connect discerning beer drinkers in Manhattan with bars in the city that serve the beers that they like. We start with a brief survey that takes in their preferences and matches those answers with the Untappd database. Using this API we can populate a map using the Google Maps API that then lists the locations of bars and taverns that carry the user's beer preference.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
          <CardTitle>The G.O.A.T. Voter App!</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>My second group project was the GOAT Voter App. G.O.A.T. Voter is a project created with the intention to get the youth vote informed and participating. Focusing on a mobile platform, our team pulled in info using various APIs to gather helpful voter information such as polling location, voting dates, candidate info, and ballot questions into one place. Now, the average US voter can easily enter their zipcode and find their nearest polling location and its hours. Using various APIs and incumbent webpage info, we were able to bulild an app that aids voters in participating in their civic duty. G.O.A.T. Voter.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
          <CardTitle>NYTimes React Search</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG).
          Getting Started
          Playing RuneSkype is easy, just download a copy from our homepage or our repo:</CardText>
          <Button>Read More Here</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
          <CardTitle>Mongo Scraper</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>The MongoScraper Assignment was an excercise that required us to employ Handlebars, MongoDB, NodeJs and a Heroku backend.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
          <CardTitle>Firebase Assignment</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>The Firebase Assignment is a culmination of the first half of our learning utilizing HTML, CSS, JavaScript and Firebase. Also know as the Train Scheduuler assignment we were tasked with using Google's Firebase platform. Firebase allows you to store and sync data across all clients in realtime, and remains available when your app goes offline. The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
      </CardDeck>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
          <CardTitle>LIRI Bot Excercise</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>The LIRI Bot excercise is an assignment where we employed LIRI or Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and returns data. In this case it takes in parameters from both the Twitter and Spotify apps and interpolates that data and returns data to the user.</CardText>
          <Button>Read More Here</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
          <CardTitle>Giphy API Assignment</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Our goal for this assignment was to create a webpage and dynamically populate a grid with gifs when the user input a search parameter. Using an array as well as jQuery and event handlers I was able to allow a user via an Ajax call to populate the page with appropriate gifs by stipulatinig the rating in the if statement.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" />
        <CardBody body inverse style={{ backgroundColor: '#1ea8cc', borderColor: '##54a8d7' }}>
          <CardTitle>My Old Blog</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>My old blog, Dante Calabria's Sox was dedicated to film review and dissection. It was named after Dante Calbia, a player on the University of North Carolina Tar Heels basketball team who was noted for not wearing socks while he played. I was a professional writer of sustainable food recipes, TV and Film Reviews, as well as educational and Technical Writing. Samples of which can be found HERE</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
      </CardDeck>
      </div>
    </div>
  
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';



function App() {
  return (
    <div className="App">
      <div className="mui-container-fluid">
        <Panel style={{backgroundColor: '#44718e' }}>
          <div className="mui--text-white mui--text-display3" >Sulai Sivadel
            
          </div>
            <div className="mui--text-white   mui--text-display2">Web Developer  
            </div>
          <div className="mui--text-light mui--text-left mui--text-body2">
            Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding  Boot Camp with experience working in teams. Possesses project management experience and experience delegating  responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of  a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is   adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia  University Coding Bootcamp where he ceated projects in HTML5, CSS, JavaScript, and Ract.
          </div>
        </Panel>
        &emsp;
            <Button size= "large" color="primary" ><a href="https://github.com/Sulai3030">Github</a></Button> 
            <Button size= "large" color="primary"><a href="https://www.linkedin.com/in/sulai3030/">LinkedIn</a></Button>
            <Button size= "large" color="primary"><a href={`mailto:${'sulai3030@gmail.com'}`}> Contact Me</a></Button>{' '}
            <Container fluid={true}>
        <Row>
          <Col md={6}>
            <div className="mui--text-accent mui--text-headline">RuneSkype</div>
        <div className="mui--text-left">RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG).
              Getting Started
              Playing RuneSkype is easy, just download a copy from our homepage or our repo:
              <br />
              <a href="https://github.com/Sulai3030/RuneSkype">Read More</a></div>
          </Col>
          <Col md={6}><div className="mui--text-accent mui--text-headline">The G.O.A.T. Voter App</div>
          <div className="mui--text-left">The G.O.A.T. Voter App is a project created with the intention to get the youth vote informed and participating. Focusing on a mobile platform, our team pulled in info using various APIs to gather helpful voter information such as polling location, voting dates, candidate info, and ballot questions into one place. Now, the average US voter can easily enter their zipcode and find their nearest polling location and its hours. Using various APIs and incumbent webpage info, we were able to bulild an app that aids voters in participating in their civic duty. G.O.A.T. Voter.</div>
          <br />
              <a href="https://github.com/Sulai3030/GOAT-voter">Read More</a>
          </Col>
        </Row>
        <Row>
          <Col md={6}><div className="mui--text-accent mui--text-headline">Beer Near Here</div>
          <div className="mui--text-left">Beer Near Here is a project to successfully connect discerning beer drinkers in Manhattan with bars in the city that serve the beers that they like. We start with a brief survey that takes in their preferences and matches those answers with the Untappd database. Using this API we can populate a map using the Google Maps API that then lists the locations of bars and taverns that carry the user's beer preference.
          </div>
          <br />
              <a href="https://github.com/Sulai3030/beerNearHere-1">Read More</a>
          </Col>
          <Col md={6}><div className="mui--text-accent mui--text-headline">ReactJS Search Project</div>
          <div className="mui--text-left">The React Search was a project that required us to use ReactJs while creating an app that would scrape data from the New York Times using their API so that an end-user would be able to search for articles from any time period that the New york Times published, say a recipe from the food section and then be able to save that date to their own clipboard.
          <br />
              <a href="https://github.com/Sulai3030/react-nytimes">Read More</a></div>
              </Col>
          
        </Row>
        <Row>
          <Col md={6}><div className="mui--text-accent mui--text-headline">
            Mongo Web Scraper Project</div>
            <div className="mui--text-left">The MongoScraper Assignment was an excercise that required us to employ Handlebars, MongoDB, NodeJs and a Heroku backend.</div>
          <br />
              <a href="https://github.com/Sulai3030/mongoScraper">Read More</a>
          </Col>
          <Col md={6}><div className="mui--text-accent mui--text-headline">Firebase as a Backend Project</div>
          <div className="mui--text-left">The Firebase Assignment is a culmination of the first half of our learning utilizing HTML, CSS, JavaScript and Firebase. Also know as the Train Scheduuler assignment we were tasked with using Google's Firebase platform. Firebase allows you to store and sync data across all clients in realtime, and remains available when your app goes offline. The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.</div>
          <br />
              <a href="https://github.com/Sulai3030/firebaseAssignment">Read More</a>
          </Col>
        </Row>
        <Row>
          <Col md={6}><div className="mui--text-accent mui--text-headline">LIRI Bot Node Excercise</div>
          <div className="mui--text-left">The LIRI Bot excercise is an assignment where we employed LIRI or Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in paramares and returns data. In this case it takes in parameters from both the Twitter and Spotify apps and interpolates that data and returns data to the user.</div>
          <br />
              <a href="https://github.com/Sulai3030/liriNodeApp">Read More</a>
          </Col>
          <Col md={6}><div className="mui--text-accent mui--text-headline">Giphy API Project</div>
          <div className="mui--text-left">The Giphy API goal assignment was to create a webpage and dynamically populate a grid with gifs when the user input a search parameter. Using an array as well as jQuery and event handlers I was able to allow a user via an Ajax call to populate the page with appropriate gifs by stipulatinig the rating in the if statement.</div>
          <br />
              <a href="https://github.com/Sulai3030/giphyApi">Read More</a></Col>
        </Row>
        <Row>
          <Col md={6}><div className="mui--text-accent mui--text-headline">Old Recipes and Blog</div>
          <div className="mui--text-left">My old blog, Dante Calabria's Sox was dedicated to film review and dissection. It was named after Dante Calbia, a player on the University of North Carolina Tar Heels basketball team who was noted for not wearing socks while he played. I was a professional writer of sustainable food recipes, TV and Film Reviews, as well as educational and Technical Writing. Samples of which can be found HERE</div></Col>
        </Row>
      </Container>

    </div>
    </div>
  );
}

export default App;

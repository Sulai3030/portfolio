import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import{
  BrowserRouter as Router,
  Route,
  Link,
}from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'

ReactDOM.render(
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={About} />
        <Route path= "/projects" components={Projects} />
       <Route path="/contact" component={Contact} />
      </div>
    </Router>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

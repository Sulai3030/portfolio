import React, { Component } from 'react';
import './App.css';
import './index.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import TitleBar from './TitleBar/TitleBar';
import Navbar from './Navbar/Navbar';
import NavbarBrand from './Navbar/Navbar';
import NavbarToggler from './Navbar/Navbar';
import Collapse from './Navbar/Navbar';
import Nav from './Navbar/Navbar';
import NavItem from './Navbar/Navbar';
import UncontrolledDropdown from './Navbar/Navbar';
import DropdownToggle from './Navbar/Navbar';
import DropdownMenu from './Navbar/Navbar';
import DropdownItem from './Navbar/Navbar';
import NavLink from './Navbar/Navbar';
import { Linking } from 'react';
import Text from './Navbar/Navbar';
import LinkingIOS from './Navbar/Navbar'
class App extends Component {
  state = {
    username: 'supermax'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <ol>

        <TitleBar />
        Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React. 
        <Text style={{color: 'blue'}}
            onPress={() => LinkingIOS.openURL('http://https://sulai3030.github.io/')}> 
          GitHub
        </Text>
        </ol>
      <div></div>
        
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}

export default App;

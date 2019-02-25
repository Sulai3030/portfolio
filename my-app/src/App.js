import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/sulai3030/">LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Sulai3030">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/sulai3030/">Projects</NavLink>
              </NavItem>
            </Nav>
            <NavItem>
                <NavLink href={`mailto:${this.props.email}`}>Contact</NavLink>
              </NavItem>
          </Collapse>
        </Navbar>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Sulai Sivadel</h1>
            <p className="lead">Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React. Samples can be found here: <Link to="https://sulai3030.github.io/l"></Link></p>
          </Container>
      </Jumbotron>
    </div>
    );
  }
}
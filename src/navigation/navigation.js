import React, {Component} from 'react';
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends Component {
  render() {
    //Define Sections
    const sections = ['Home', 'Education', 'Work Experience', 'Projects', 'Contact']

    //Iterate and produce nav links
    const navLinks = sections.map((section) => {
      return (
        <Nav.Link href="#rand">{section}</Nav.Link>
      )
    });


    return(
      <Navbar style={{background:'black', height: '6vh', fontSize:'25px', color:'white'}} variant="dark">
        <Navbar class="title" href="#home">
          <img alt="" src="./img/logo.svg" class="App-logo" width="100" height="100"/>
          {this.props.logoTitle}
        </Navbar>
        <Nav>
          {navLinks}
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;

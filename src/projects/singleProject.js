import React, {Component} from 'react';
import './singleProject.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown'

class SingleProject extends Component {

  render() {
    var buttons = this.props.project.buttons.map((button) => {
      return (
        <Dropdown.Item href={button.url}>{button.title}</Dropdown.Item>
      )
    });

    var images = this.props.project.images.map((img) => {
      return (
        <a href={img}><img class="projectImages" alt="" src={img}/></a>
      )
    })

    var myStyle = {
      backgroundSize: 'cover',
      backgroundImage: `url("${this.props.project.background}")`,
      backgroundRepeat: 'repeat',
      marginTop: '0px',
    };

    return(
      <div style={myStyle}>

        <h2 class="hook">{this.props.project.hook}</h2>
        <img class="title" src={this.props.project.logo} alt="not available"/>
        <div class="textBox">
          <p class="description">{this.props.project.description}</p>
        </div>

        <div class="buttons">
          <Dropdown>
            <Dropdown.Toggle variant={this.props.project.dropdown.color} id="dropdown-basic" size="lg">
              {this.props.project.dropdown.title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {buttons}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div class="imageGroup">
          {images}
        </div>
      </div>
    );
  }
}

export default SingleProject;

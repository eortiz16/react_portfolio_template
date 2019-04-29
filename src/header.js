import React, {Component} from 'react';
import './header.css';
import './text-rotation.js'

class Header extends Component {
  render() {
    var options = '[" Software Developer;", "n Interdisciplinary Scholar.", "n Educator.", " Backend Software Engineer;"]';

    return(
      <header className="head">
        <h1 class="name">{this.props.title}</h1>
        <br/>

      <div>
  			<h1 class="cool_text">
          I am a
          <span class="txt-rotate" data-period="2000"
  				      data-rotate={options}>
          </span>
  			</h1>
  		</div>

      </header>
    );
  }
};

export default Header;

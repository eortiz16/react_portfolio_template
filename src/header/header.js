import React, {Component} from 'react';
import './header.css';
import './text-rotation.js'

class Header extends Component {
  render() {
    var options = '[" Software Developer;", "n Interdisciplinary Scholar.", "n Educator.", " Backend Software Engineer;"]';

    var myStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundImage: `url("${this.props.background}")`,
      marginTop: '0px',
    };

    return(
      <header className="head" style={myStyle}>
        <img class="title" src="img/headers/erick.png" alt="not available"/>
        <br/>

        <div>
          <img class="img-circle" src="img/about/erick.png" alt="Avatar" />
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

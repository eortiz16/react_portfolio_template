import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
  render() {
    var style = {
      backgroundColor: 'black',
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      left: "0",
      bottom: "0",
      height: "150px",
      width: "100%",
    }

    var iconStyle = {
      paddingTop: '10px',
      paddingLeft: '50px',
      paddingRight: '50px',
      paddingBottom: '10px',
      margin: 'auto',
      justifyContent: 'center'
    }

    var design = {
      margin: 'auto',
      justifyContent: 'center',
      paddingBottom: '20px',
      color: 'white'
    }

    return (
      <div style={style}>
          <p style={design}>Designed by Erick Ortiz</p>
          <SocialIcon style={iconStyle} url="https://www.facebook.com/erick.o.pineda" />
          <SocialIcon style={iconStyle} url="https://www.instagram.com/unkwnmartyr/" />
          <SocialIcon style={iconStyle} url="https://www.linkedin.com/in/erickortiz67/" />
          <SocialIcon style={iconStyle} url="https://github.com/eortiz16" />
      </div>
    );
  }
}

export default Footer;

import React from 'react';
import Button from 'react-bootstrap/Button'

class Resume extends React.Component {
  render() {
    var style = {
      paddingTop:'40px',
      paddingBottom:'40px',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'Center'
    }

    var button = {
      paddingTop:'10px',
      paddingBottom:'20px',
    }

    return (
      <div style={style}>
          <h4>Need Something Simple?</h4>
					<h1 style={button} className="header">Download My Resume</h1>
          <Button size="lg"  href="downloads/eortiz_resume.pdf" variant="primary">Download</Button>
				</div>
    );
  }
}

export default Resume;

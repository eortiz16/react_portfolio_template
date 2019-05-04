import React, {Component} from 'react';
import Data from '../data/work.json'
import Card from 'react-bootstrap/Card'

class Work extends Component {

  render() {

    var myStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundImage: `url("${Data.background}")`,
      marginTop: '0px',
    };

    var headerStyle = {
      maxWidth: '800px'
    }

    return(
      <div style={myStyle}>
        <img class="title" src={Data.logo} style={headerStyle} alt=""/>

        <div style={{ paddingLeft: '10vw', paddingRight: '10vw', paddingBottom: '40px' }}>
        {Data.exp.map((variable, index) => {
          return (
            <Card>
              <Card.Header as="h5" style={{paddingLeft: '40px', fontSize: '30px'}}>{variable.company}</Card.Header>
              <Card.Body >
                <Card.Subtitle className="mb-2 text-muted myFont" style={{fontSize: '20px', paddingLeft: '20px', paddingRight: '20px'}}>{variable.position} {variable.languages}</Card.Subtitle>
                <Card.Text className="desc myFont" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '20px' }}>
                <ul>
                { variable.description.map((inner, index) => {
                    return <li>{inner}</li>
                })}
                </ul>
                </Card.Text>

              </Card.Body>
            </Card>
          )
        })}

        </div>;

      </div>
    );
  }
}

export default Work;

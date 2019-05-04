import React, {Component} from 'react';
import './education.css';
import Data from '../data/education.json'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Education extends Component {

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

        <h2 className="quirk">{Data.hook}</h2>
        <img class="title" src={Data.logo} style={headerStyle} alt=""/>

        <div style={{ paddingLeft: '10vw', paddingRight: '10vw', justifyContent:'center', margin:'auto', display:'flex', maxWidth: "2440px"}}>
          <Card  style={{justifyContent:'center', margin:'auto'}}>
            <Card.Body>
              <Card.Text className="desc myFont" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }} >{Data.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <CardGroup style={{  paddingLeft: '10vw', paddingRight: '10vw', justifyContent:'center', margin:'auto', display:'flex', maxWidth: "2440px", paddingBottom: '40px' }}>
        {Data.schools.map((variable, index) => {
          return (
            <Card style={{ justifyContent:'center'}}>
            <Card.Img style={{ width: '150px', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }} variant="top" src={variable.logo} />
              <Card.Body >
                <Card.Title className="myFont" style={{fontSize: '30px', paddingLeft: '20px', paddingRight: '20px'}}>{variable.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted myFont" style={{fontSize: '20px', paddingLeft: '20px', paddingRight: '20px'}}>{variable.degree}</Card.Subtitle>

                <Card.Text className="desc myFont" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>{variable.description}</Card.Text>
                <Button href={variable.hyperlink} variant="primary" style={{ width: '100%', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }} >View Coursework</Button>
              </Card.Body>
            </Card>
          )
        })}

        </CardGroup>;

      </div>
    );
  }
}

export default Education;

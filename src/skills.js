import React from 'react';
import './header.css';
import './text-rotation.js'
import PostDataLan from './data/languages.json'
import PostDataTech from './data/technologies.json'
import PostDataOS from './data/os.json'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

class Skills extends React.Component {
  render() {
    var myStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundImage: `url("img/bg2.jpg")`,
      marginTop: '0px',
    };

    return(
      <div style={myStyle}>

        <img class="title" style={{paddingLeft:'125px', paddingRight:'125px'}} src="img/headers/lan.png"  alt="not available"/>

        <CardGroup style={{paddingLeft:'40px', paddingRight:'40px', paddingTop:'20px', paddingBottom:'40px'}}>
          {PostDataLan.map((variable, index) => {

            return <Card bg="light">
                    <Card.Header as="h5" style={{textAlign:'center'}}>{variable.title}</Card.Header>
                    <Card.Img variant="bottom" src={variable.image} style={{ justifyContent: 'center', alignItems: 'center', minWidth: '200px', height: 'undefined', paddingLeft:'40px', paddingRight:'40px', paddingTop:'40px', paddingBottom:'40px'}}/>
                  </Card>

          })}
        </CardGroup>;

        <img class="title" style={{paddingLeft:'125px', paddingRight:'125px'}} src="img/headers/tech.png" alt="not available"/>
          <CardGroup style={{paddingLeft:'40px', paddingRight:'40px', paddingTop:'20px', paddingBottom:'40px'}}>
            {PostDataTech.map((variable, index) => {
              return <Card bg="light">
                      <Card.Header as="h5" style={{textAlign:'center'}}>{variable.title}</Card.Header>
                      <Card.Img variant="bottom" src={variable.image} style={{ justifyContent: 'center', alignItems: 'center', minWidth: '200px', height: 'undefined', paddingLeft:'40px', paddingRight:'40px', paddingTop:'40px', paddingBottom:'40px'}}/>
                    </Card>
            })}
          </CardGroup>;

          <img class="title" style={{paddingLeft:'150px', paddingRight:'150px'}}  src="img/headers/os.png" alt="not available"/>
            <CardGroup style={{paddingLeft:'400px', paddingRight:'400px', paddingTop:'20px', paddingBottom:'40px'}}>
              {PostDataOS.map((variable, index) => {
                return <Card bg="light">
                        <Card.Header as="h5" style={{textAlign:'center'}}>{variable.title}</Card.Header>
                        <Card.Img variant="bottom" src={variable.image} style={{ justifyContent: 'center', alignItems: 'center', minWidth: '200px', height: 'undefined', paddingLeft:'40px', paddingRight:'40px', paddingTop:'40px', paddingBottom:'40px'}}/>
                      </Card>
              })}
            </CardGroup>;
      </div>
    );
  }
};

export default Skills;

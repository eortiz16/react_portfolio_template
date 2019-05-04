import React from 'react';
import PostDataLan from '../data/languages.json'
import PostDataTech from '../data/technologies.json'
import PostDataOS from '../data/os.json'
import PostDataIDE from '../data/ide.json'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

class Skills extends React.Component {
  render() {
    var myStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundImage: `url("img/background/skills.jpg")`,
      marginTop: '0px',
    };

    return(
      <div style={myStyle}>
        <img class="title" style={{ maxWidth: '800px'}} src="img/headers/lan.png"  alt="not available"/>

        <CardGroup style={{justifyContent:'center', margin:'auto',  maxWidth: '2440px', display:'flex', paddingLeft:'5vw', paddingRight:'5vw'}}>
          {PostDataLan.map((variable, index) => {
            return <Card bg="light" style={{display:'flex', maxWidth: '200px', justifyContent:'center', margin:'auto'}}>
                    <Card.Header as="h5" style={{textAlign:'center'}}>{variable.title}</Card.Header>
                    <Card.Img variant="bottom" src={variable.image} style={{ justifyContent: 'center', alignItems: 'center', minWidth: '200px', maxWidth: '200px', height: 'undefined', paddingLeft:'40px', paddingRight:'40px', paddingTop:'40px', paddingBottom:'40px'}}/>
                  </Card>
          })}
        </CardGroup>;

        <img class="title" style={{maxWidth: '800px'}} src="img/headers/tech.png" alt="not available"/>
          <CardGroup style={{justifyContent:'center', maxWidth: '2440px', margin:'auto', display:'flex', paddingLeft:'5vw', paddingRight:'5vw'}}>
            {PostDataTech.map((variable, index) => {
              return <Card bg="light" style={{display:'flex', maxWidth: '200px', justifyContent:'center', margin:'auto'}}>
                      <Card.Header as="h5" style={{textAlign:'center'}}>{variable.title}</Card.Header>
                      <Card.Img variant="bottom" src={variable.image} style={{ justifyContent: 'center', alignItems: 'center', minWidth: '200px',  maxWidth: '200px', height: 'undefined', paddingLeft:'40px', paddingRight:'40px', paddingTop:'40px', paddingBottom:'40px'}}/>
                    </Card>
            })}
          </CardGroup>;

            <CardGroup style={{justifyContent:'center', maxWidth: '2440px', margin:'auto', display:'flex', paddingLeft:'5vw', paddingRight:'5vw'}}>
              {PostDataIDE.map((variable, index) => {
                return <Card bg="light" style={{display:'flex', maxWidth: '200px', justifyContent:'center', margin:'auto'}}>
                        <Card.Header as="h5" style={{textAlign:'center'}}>{variable.title}</Card.Header>
                        <Card.Img variant="bottom" src={variable.image} style={{ justifyContent: 'center', alignItems: 'center', minWidth: '200px',  maxWidth: '200px', height: 'undefined', paddingLeft:'40px', paddingRight:'40px', paddingTop:'40px', paddingBottom:'40px'}}/>
                      </Card>
              })}
            </CardGroup>;

          <img class="title" style={{maxWidth: '800px'}}  src="img/headers/os.png" alt="not available"/>
            <CardGroup style={{justifyContent:'center', margin:'auto', display:'flex', maxWidth: '800px', paddingTop:'40px', paddingBottom:'40px'}}>
              {PostDataOS.map((variable, index) => {
                return <Card bg="light" style={{ maxWidth: '200px',  margin:'auto'}}>
                        <Card.Header as="h5" style={{textAlign:'center'}}>{variable.title}</Card.Header>
                        <Card.Img variant="bottom" src={variable.image} style={{ justifyContent: 'center', alignItems: 'center', minWidth: '200px',  maxWidth: '200px', height: 'undefined',  paddingLeft:'40px', paddingRight:'40px', paddingTop:'40px', paddingBottom:'40px'}}/>
                      </Card>
              })}
            </CardGroup>;
      </div>
    );
  }
};

export default Skills;

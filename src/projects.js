import React, {Component} from 'react';
import SingleProject from './singleProject.js'
import PostData from './projects.json'

class Projects extends Component {

  render() {
    return(
      <div id="project">
        {PostData.map((variable, index) => {
          return <SingleProject project={variable} />
        })}
      </div>
    );
  }
}

export default Projects;

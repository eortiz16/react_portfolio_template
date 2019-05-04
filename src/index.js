import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import Navigation from './navigation/navigation.js';
import Header from './header/header.js';
import Education from './education/education.js';
import Work from './work/work.js';
import Projects from './projects/projects.js';
import Skills from './skills/skills.js'
import Footer from './footer/footer.js'
import Resume from './resume/resume.js'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="Erick Ortiz' Portfolio"  />
        <Header title="Erick Ortiz" background="img/bg.png"/>
        <Education />
        <Work />
        <Skills />
        <Projects/>
        <Resume />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(('root')));

serviceWorker.unregister();

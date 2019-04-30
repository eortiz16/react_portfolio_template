import React from 'react';
import './navigation.css';
import ReactDOM from 'react-dom';
import './index.css'

import Navigation from './navigation.js';
import Header from './header.js';
import Projects from './projects.js';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="Erick Ortiz' Portfolio"  />
        <Header title="Erick Ortiz" background="img/bg.png"/>
        <Projects/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(('root')));

serviceWorker.unregister();

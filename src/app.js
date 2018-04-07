import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './page/home';
import About from './page/about';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li style={{ display: 'inline' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ display: 'inline', marginLeft: '15px' }}>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;

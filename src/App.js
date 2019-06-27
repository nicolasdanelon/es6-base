import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav'

function About() {
  return (
    <>
      <h2>About</h2>
      <Nav current="about" />
    </>
  );
}

function Users() {
  return (
    <>
      <h2>Users</h2>
      <Nav current="users" />
    </>
  );
}

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Router>
    );
  }
}

export default App;

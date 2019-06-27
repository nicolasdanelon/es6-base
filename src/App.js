import React, { PureComponent } from 'react';
import Home from './components/Home';

class App extends PureComponent {
  render() {
    return (
      <Home
        luz="luz!"
      />
    );
  }
}

export default App;

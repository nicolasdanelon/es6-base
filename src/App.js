import React, { Component } from 'react';
import StatusCode from './StatusCode';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#aabbcc',
      statusCodes: [
        0,
        200,
        201,
        418
      ],
      code: 0,
    }

    // this.propiedad = this.nombreDELmetodo

    this.handleChange = this.handleChange.bind(this);
    this.turnItRed = this.turnItRed.bind(this);
    this.turnItGreen = this.turnItGreen.bind(this);
    this.turnItBlue = this.turnItBlue.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  turnItRed() {
    this.setState({ backgroundColor: '#aa0000' })
  }
  turnItGreen() {
    this.setState({ backgroundColor: '#00aa00' })
  }
  turnItBlue() {
    this.setState({ backgroundColor: '#0000aa' })
  }

  render() {
    const { backgroundColor, statusCodes, code } = this.state;

    return (
      <div>
        {/* Optimizable
        <button onClick={() => this.turnItRed()}>rojo</button>
        <button onClick={() => this.turnItGreen()}>verde</button>
        <button onClick={() => this.turnItBlue()}>azul</button> */}

        {/* Is good to be a king */}
        <button onClick={this.turnItRed}>rojo</button>
        <button onClick={this.turnItGreen}>verde</button>
        <button onClick={this.turnItBlue}>azul</button>

        <br />
        <br />

        <select name="code" onChange={this.handleChange}>
          {statusCodes.map((item, key) => (
            <option key={key} value={item}>{item}</option>
          ))}
        </select>

        <StatusCode
          statusCode={code}
        />

        <h1 style={{ backgroundColor }}>Holas!</h1>
      </div>
    )
  }
}

export default App;

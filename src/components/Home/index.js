import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Nav from '../Nav';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'N/A',
      pepito: '',
      planets: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.getPlanets();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });

    // this.setState({
    //   [e.target.name]: e.target.value,
    // });

    // this.setState({
    //   name: value,
    // });
  }

  getPlanets() {
    axios.get('https://swapi.co/api/planets')
      .then(({ data }) => this.setState({ planets: data }))
      .catch(er => console.log(er));
  }

  displayAllPlanets() {
    const { planets } = this.state;

    if (planets) {
      const { results } = planets;

      return results.map((planet, index) => {
        return (
          <div
            key={index}
          >
            <p>name: {planet.name}</p>
            <p>climate: {planet.climate}</p>
            <hr />
          </div>
        );
      })
    }

    return null;
  }

  render() {
    // this.setState({ name: 'Emi' });
    const { name, pepito } = this.state;

    return (
      <Fragment>
        <h2>Home</h2>

        <Nav current="home" />

        <input
          name="name"
          onChange={this.handleChange} 
        />
        <span>{name}</span>
        <br />
        <input
          name="pepito"
          value={pepito}
          onChange={(e) => this.setState({ pepito: e.target.value })} 
        />
        <span>{pepito}</span>

        {this.displayAllPlanets()}

      </Fragment>
    );
  }
}

export default Home;

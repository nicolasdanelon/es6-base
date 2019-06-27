import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <ul>
    <li><Link to="/">inicio</Link></li>
    <li><Link to="/about">sobre nosotros</Link></li>
    <li><Link to="/users">usuarios</Link></li>
  </ul>
);

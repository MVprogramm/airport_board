import React from 'react';
import Flight from '../flight/Flight.jsx';
import War from '../war/War.jsx';
import './departures.scss';

const Departures = () => (
  <div className="board__departures">
    <span className="board__title_departures">Departures</span>
    <Flight />
    <Flight />
    <Flight />
    <Flight />
    <Flight />
    <War />
  </div>
);

export default Departures;

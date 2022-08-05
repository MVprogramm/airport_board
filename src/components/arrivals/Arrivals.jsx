import React from 'react';
import Flight from '../flight/Flight.jsx';
import War from '../war/War.jsx';
import './arrivals.scss';

const Arrivals = () => (
  <div className="board__arrivals">
    <span className="board__title_arrivals">Arrivals</span>
    <Flight />
    <Flight />
    <Flight />
    <Flight />
    <Flight />
    <War />
  </div>
);

export default Arrivals;

import React from 'react';
import Arrivals from '../arrivals/Arrivals.jsx';
import Departures from '../departures/Departures.jsx';
import './board.scss';

const Board = () => (
  <div className="board">
    <Departures />
    <Arrivals />
  </div>
);

export default Board;

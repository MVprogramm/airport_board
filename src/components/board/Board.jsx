import React from 'react';
import Menu from '../menu/Menu.jsx';
// import Arrivals from '../arrivals/Arrivals.jsx';
// import Departures from '../departures/Departures.jsx';
import Date from '../date/Date.jsx';
import './board.scss';

const Board = () => (
  <section className="board">
      <Menu />
  {/*
    <div className="board__date">
      <Date />
    </div>
    <div className="board__list-header">
      <span className="board__list-title board__list-title_terminal">Trminal</span>
      <span className="board__list-title board__list-title_time">Local time</span>
      <span className="board__list-title board__list-title_destination">Destination</span>
      <span className="board__list-title board__list-title_status">Status</span>
      <span className="board__list-title board__list-title_airline">Airline</span>
      <span className="board__list-title board__list-title_flight">Flight</span>
    </div>
    <ul className="board__list"></ul>
  */}
  </section>
);

export default Board;

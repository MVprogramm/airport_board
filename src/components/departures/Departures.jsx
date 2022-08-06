import React from 'react';
// import Flight from '../flight/Flight.jsx';
// import War from '../war/War.jsx';
import './departures.scss';

const Departures = () => (
  <div className="board__tab board__tab_dep">
    <div className="board__decoration board__decoration_left show"></div>
    <div className="board__status show">
      <div className="board__icon board__icon_dep board__icon_blue show-icon"></div>
      <div className="board__icon board__icon_dep board__icon_white hide-icon"></div>
      <span className="board__title board__title_dep show_title">Departures</span>
    </div>
    <div className="board__decoration board__decoration_right show show_cross"></div>
  </div>
);

export default Departures;

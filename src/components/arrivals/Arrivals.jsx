import React from 'react';
// import Flight from '../flight/Flight.jsx';
// import War from '../war/War.jsx';
import './arrivals.scss';

const Arrivals = () => (
  <div className="board__tab board__tab_arr">
    <div className="board__decoration board__decoration_left hide hide_cross"></div>
    <div className="board__status hide">
      <div className="board__icon board__icon_arr board__icon_blue hide-icon"></div>
      <div className="board__icon board__icon_arr board__icon_white show-icon"></div>
      <span className="board__title board__title_arr hide_title">Arrivals</span>
    </div>
    <div className="board__decoration board__decoration_right hide"></div>
  </div>
);

export default Arrivals;

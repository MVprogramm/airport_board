import React from 'react';
import { Link } from "react-router-dom";
import './arrivals.scss';

const ArrivalsMenu = ({ status, setStatus }) => {
  if (status === "dep") return (
    <div className='arr'>
      <Link 
        to="/arrivals" 
        className="menu__field menu__field_arr menu__bground_blue-arr"
        onClick={() => setStatus("arr")}
      >
        <div className="menu__icon menu__icon_arr-white menu__bground_blue"></div>
        <div className="menu__title menu__title_white">Arrivals</div>
      </Link>
      <div className="menu__decor menu__decor_right-blue-arr"></div>
    </div>
  );

  if (status === "arr") return (
    <>
      <div className="menu__field menu__field_arr menu__bground_white">
        <div className="menu__icon menu__icon_arr-blue menu__bground_white"></div>
        <div className="menu__title menu__title_blue">Arrivals</div>
      </div>
      <div className="menu__decor menu__decor_right-white-arr"></div>
    </>
  );
};

export default ArrivalsMenu;
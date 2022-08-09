import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './arrivals.scss';

const ArrivalsMenu = ({ status, setStatus }) => {
  const handleOver = () => {
    const arrivalsDecor = document.querySelector(".menu__decor_right-blue-arr");
    arrivalsDecor.style.borderTopRightRadius = "50%";
  };

  const handleOut = () => {
    const arrivalsDecor = document.querySelector(".menu__decor_right-blue-arr");
    arrivalsDecor.style.borderTopRightRadius = "80%";
  };

  const handleDown = (event) => {
    const arrivalsDecor = document.querySelector(".menu__decor_right-blue-arr");
    if (event.which === 1) arrivalsDecor.style.borderTopRightRadius = "80%";
  };
 
  useEffect(() => {
    if (status === "dep") {
      const arrivalsMenu = document.querySelector(".menu__bground_blue-arr");
      arrivalsMenu.addEventListener('mouseover', handleOver);
      arrivalsMenu.addEventListener('mouseout', handleOut);
      arrivalsMenu.addEventListener('mousedown', handleDown);
  
      return () => {
        arrivalsMenu.removeEventListener('mouseover', handleOver);
        arrivalsMenu.removeEventListener('mouseout', handleOut);
        arrivalsMenu.removeEventListener('mousedown', handleDown);
      }
    }
  })

  if (status === "dep") return (
    <>
      <Link 
        to="/arrivals" 
        className="menu__field menu__field_arr menu__bground_blue-arr"
        onClick={() => setStatus("arr")}
      >
        <div className="menu__icon menu__icon_arr-white menu__bground_blue"></div>
        <div className="menu__title menu__title_white">Arrivals</div>
      </Link>
      <div className="menu__decor menu__decor_right-blue-arr"></div>
    </>
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
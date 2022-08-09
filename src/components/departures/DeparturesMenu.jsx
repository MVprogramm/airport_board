import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './departures.scss';

const DeparturesMenu = ({ status, setStatus }) => {
  const handleOver = () => {
    const departuresDecor = document.querySelector(".menu__decor_left-blue-dep");
    departuresDecor.style.borderTopLeftRadius = "50%";
  };

  const handleOut = () => {
    const departuresDecor = document.querySelector(".menu__decor_left-blue-dep");
    departuresDecor.style.borderTopLeftRadius = "80%";
  };

  const handleDown = (event) => {
    const departuresDecor = document.querySelector(".menu__decor_left-blue-dep");
    if (event.which === 1) departuresDecor.style.borderTopLeftRadius = "80%";
  };
 
  useEffect(() => {
    if (status === "arr") {
      const departuresMenu = document.querySelector(".menu__bground_blue-dep");
      departuresMenu.addEventListener('mouseover', handleOver);
      departuresMenu.addEventListener('mouseout', handleOut);
      departuresMenu.addEventListener('mousedown', handleDown);
  
      return () => {
        departuresMenu.removeEventListener('mouseover', handleOver);
        departuresMenu.removeEventListener('mouseout', handleOut);
        departuresMenu.removeEventListener('mousedown', handleDown);
      }
    }
  })
  
  if (status === "dep") return (
    <>
      <div className="menu__decor menu__decor_left-white-dep"></div>
      <div className="menu__field menu__field_dep menu__bground_white">
        <div className="menu__icon menu__icon_dep-blue menu__bground_white"></div>
        <div className="menu__title menu__title_blue">Departures</div>
      </div>
    </>
  );
  if (status === "arr") return (
    <>
      <div className="menu__decor menu__decor_left-blue-dep"></div>
      <Link 
        to="/departures" 
        className="menu__field menu__field_dep menu__bground_blue-dep"
        onClick={() => setStatus("dep")}
      >
          <div className="menu__icon menu__icon_dep-white menu__bground_blue"></div>
          <div className="menu__title menu__title_white">Departures</div>
      </Link>
    </>
  );
};

export default DeparturesMenu;
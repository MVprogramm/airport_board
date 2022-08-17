import React from "react";
import { useSelector } from 'react-redux';
import ArrivalsMenu from "../arrivals/ArrivalsMenu.jsx";
import DeparturesMenu from "../departures/DeparturesMenu.jsx";
import "./menu.scss";

const Menu = () => {
  const status = useSelector((state) => state.menu.status);
  
  return (
    <div className="board__menu">
      <DeparturesMenu />
      {
        status === "dep" && (
          <div className="menu__decor menu__decor_center menu__bground_blue">
            <div className="menu__decor menu__decor_right menu__bground_white menu__decor_cross"></div>
          </div>
        )
      }
      {
        status === "arr" && (
          <div className="menu__decor menu__decor_center menu__bground_blue">
            <div className="menu__decor menu__decor_left menu__bground_white menu__decor_cross"></div>
          </div>
        )
      }
      <ArrivalsMenu />
    </div>
  )
};

export default Menu;

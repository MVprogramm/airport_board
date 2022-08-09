import React from "react";

import ArrivalsMenu from "../arrivals/ArrivalsMenu.jsx";
import DeparturesMenu from "../departures/DeparturesMenu.jsx";
import "./menu.scss";

const Menu = ({ status, setStatus }) => {
  return (
    <div className="board__menu">
      <DeparturesMenu status={status} setStatus={setStatus}/>
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
      <ArrivalsMenu status={status} setStatus={setStatus} />
    </div>
  )
};

export default Menu;

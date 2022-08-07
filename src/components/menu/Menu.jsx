import React from "react";
import "./menu.scss";

const Menu = () => (
  <div className="board__menu">
    <div className="menu__decor menu__decor_left menu__bground_white"></div>
    <div className="menu__field menu__field_dep menu__bground_white">
      <div className="menu__icon menu__icon_dep menu__icon_blue menu__bground_white"></div>
      <div className="menu__title menu__title_blue">Departures</div>
    </div>
    <div className="menu__decor menu__decor_center menu__bground_blue">
      <div className="menu__decor menu__decor_right menu__bground_white menu__decor_cross"></div>
    </div>
    <div className="menu__field menu__field_arr menu__bground_blue">
      <div className="menu__icon menu__icon_arr menu__icon_white menu__bground_blue"></div>
      <div className="menu__title menu__title_white">Arrivals</div>
    </div>
    <div className="menu__decor menu__decor_right menu__bground_blue"></div>
  </div>
);

export default Menu;

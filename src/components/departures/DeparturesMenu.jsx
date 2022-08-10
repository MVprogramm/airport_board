import React from 'react';
import { Link } from "react-router-dom";
import './departures.scss';

const DeparturesMenu = ({ status, setStatus }) => {
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
    <div className='dep'>
      <div className="menu__decor menu__decor_left-blue-dep"></div>
      <Link 
        to="/departures" 
        className="menu__field menu__field_dep menu__bground_blue-dep"
        onClick={() => setStatus("dep")}
      >
          <div className="menu__icon menu__icon_dep-white menu__bground_blue"></div>
          <div className="menu__title menu__title_white">Departures</div>
      </Link>
    </div>
  );
};

export default DeparturesMenu;
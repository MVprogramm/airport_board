import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setStatus } from "../../store/menuSlice.js";
import "./arrivals.scss";

const ArrivalsMenu = () => {
  const status = useSelector((state) => state.menu.status);
  const dispatch = useDispatch();

  if (status === "dep")
    return (
      <div className="arr">
        <Link
          to="/arrivals"
          className="menu__field menu__field_arr menu__bground_blue-arr"
          onClick={() => dispatch(setStatus("arr"))}
        >
          <div className="menu__icon menu__icon_arr-white menu__bground_blue"></div>
          <div className="menu__title menu__title_white">Arrivals</div>
        </Link>
        <div className="menu__decor menu__decor_right-blue-arr"></div>
      </div>
    );

  if (status === "arr")
    return (
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

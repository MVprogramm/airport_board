import React from "react";
import "./date.scss";

const Date = () => (
  <div className="board__date">
    <label className="date__label">
      <input className="date__input" type="date" id="date" name="date" />
      <div className="date__setter date__setter_calendar">
        <div className="date__output date__output_calendar">11/01</div>
        <div className="date__btn">
          <div className="date__btn_img"></div>
        </div>
      </div>
      <div className="date__setter date__setter_btn">
        <div className="date__output date__output_btn">06/08</div>
        <div className="date__btn">
          <span className="date__btn_txt">Yesterday</span>
        </div>
      </div>
      <div className="date__setter date__setter_btn">
        <div className="date__output date__output_btn">07/08</div>
        <div className="date__btn">
          <span className="date__btn_txt">Today</span>
        </div>
      </div>
      <div className="date__setter date__setter_btn">
        <div className="date__output date__output_btn">09/08</div>
        <div className="date__btn">
          <span className="date__btn_txt">Tomorrow</span>
        </div>
      </div>
    </label>
  </div>
);

export default Date;

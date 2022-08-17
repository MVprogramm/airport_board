import React from "react";
import * as getDate from "../../utils/dateUtils.js";
import "./button.scss";

const Button = ({ dayName, setFlyDay, dispatch }) => {
  const inputDayHandler = (event) => {
    console.log(event.target.innerHTML)
    switch (event.target.innerHTML) {
      case "Yesterday": dispatch(setFlyDay(
        getDate.getFormattedFilter(getDate.getYesterdaysDate())[0])
      ); break;
      case "Today": dispatch(setFlyDay(
        getDate.getFormattedFilter(new Date())[0])
      ); break;
      case "Tomorrow": dispatch(setFlyDay(
        getDate.getFormattedFilter(getDate.getTomorrowsDate())[0])
      ); break;
    }
  };

  return (
    <div 
      className="date__setter date__setter_btn" 
      onClick={inputDayHandler}
    >
      <div className="date__output date__output_btn">
        {dayName === "Yesterday" && getDate.getYesterday()}
        {dayName === "Today" && getDate.getToday()}
        {dayName === "Tomorrow" && getDate.getTomorrow()}
      </div>
      <div className="date__btn">
        <span className="date__btn_txt">{dayName}</span>
      </div>
    </div>
  )
};

export default Button;
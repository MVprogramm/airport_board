import React from "react";
import { 
  getFormattedDate, 
  getTodaysDate,
  getToday, 
  getTomorrowsDate,
  getTomorrow,
  getYesterdaysDate,
  getYesterday
} from "../../utils/dateUtils.js";
import "./day.scss";

const Day = ({flyDay, setFlyDay}) => {
  const handleDateInput = (event) => {
    setFlyDay(new Date(event.target.value));
  };

  const showDatePicker = () => {
    const inputElem = document.getElementById("date");
    inputElem.showPicker();
  };

  const setYesterdaysDate = () => {
    setFlyDay(getYesterdaysDate());
  };

  const setTodaysDate = () => {
    setFlyDay(getTodaysDate());
  };

  const setTomorrowsDate = () => {
    setFlyDay(getTomorrowsDate())
  };

  return (
    <div className="board__date">
      <label className="date__label">
        <input 
          className="date__input" 
          type="date" 
          id="date" 
          name="date"
          value={flyDay}
          onChange={handleDateInput}
        />
        <div className="date__setter date__setter_calendar" onClick={showDatePicker}>
          <div className="date__output date__output_calendar">{getFormattedDate(flyDay)}</div>
          <div className="date__btn">
            <div className="date__btn_img"></div>
          </div>
        </div>
        <div className="date__setter date__setter_btn" onClick={setYesterdaysDate}>
          <div className="date__output date__output_btn">{getYesterday()}</div>
          <div className="date__btn">
            <span className="date__btn_txt">Yesterday</span>
          </div>
        </div>
        <div className="date__setter date__setter_btn" onClick={setTodaysDate}>
          <div className="date__output date__output_btn">{getToday()}</div>
          <div className="date__btn">
            <span className="date__btn_txt">Today</span>
          </div>
        </div>
        <div className="date__setter date__setter_btn" onClick={setTomorrowsDate}>
          <div className="date__output date__output_btn">{getTomorrow()}</div>
          <div className="date__btn">
            <span className="date__btn_txt">Tomorrow</span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Day;

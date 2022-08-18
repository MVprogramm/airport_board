import React, { useRef } from "react";
import * as getDate from "../../utils/dateUtils.js";
import "./calendar.scss";

const Calendar = ({ currentDay, setFlyDay, dispatch }) => {
  const inputCalendarHandler = (event) => {
    dispatch(setFlyDay(event.target.value));
  };

  const picker = useRef();

  const showDatePicker = () => {
    picker.current.showPicker();
  };

  return (
    <>
      <input
        className="date__input"
        type="date"
        id="date"
        name="date"
        ref={picker}
        value={currentDay}
        onChange={inputCalendarHandler}
      />
      <div
        className="date__setter date__setter_calendar"
        onClick={showDatePicker}
      >
        <div className="date__output date__output_calendar">
          {getDate.getFormattedDate(currentDay)}
        </div>
        <div className="date__btn">
          <div className="date__btn_img"></div>
        </div>
      </div>
    </>
  );
};

export default Calendar;

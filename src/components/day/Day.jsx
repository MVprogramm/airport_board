import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFlyDay } from './daySlice.js';
import Calendar from "../calendar/Calendar.jsx";
import Button from "../button/Button.jsx";
import "./day.scss";

const Day = () => {
  const flyDay = useSelector((state) => state.day.flyDay);
  const currentDay = new Date(flyDay);
  const dispatch = useDispatch();
  
  return (
    <div className="board__date">
      <label className="date__label">
        <Calendar 
          currentDay={currentDay} 
          setFlyDay={setFlyDay} 
          dispatch={dispatch} 
        />
        <Button
          dayName="Yesterday"
          setFlyDay={setFlyDay} 
          dispatch={dispatch}
        />
        <Button
          dayName="Today"
          setFlyDay={setFlyDay} 
          dispatch={dispatch}
        />
        <Button
          dayName="Tomorrow"
          setFlyDay={setFlyDay} 
          dispatch={dispatch}
        />
      </label>
    </div>
  );
};

export default Day;

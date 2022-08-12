import React from "react";
import { getFormattedTime } from "../dateUtils.js";

const getLocalTime = (fly, spin) => (
  <div className="flight flight__text flight__text_localTime">
    {
      spin === "dep"
        ? getFormattedTime(new Date(fly.timeDepExpectCalc))
        : getFormattedTime(new Date(fly.timeArrExpectCalc))
    }
  </div>
);

export default getLocalTime;
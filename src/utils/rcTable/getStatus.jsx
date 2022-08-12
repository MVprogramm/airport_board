import React from "react";
import { getFormattedTime } from "../../utils/dateUtils.js";

const getStatus = (fly, spin) => (
  <div className="flight flight__text flight__text_status">
    {
      spin === "dep"
        ? `Departed at ${getFormattedTime(new Date(fly.timeTakeofFact))}`
        : `Landed ${getFormattedTime(new Date(fly.timeTakeofFact))}`
    }
  </div>
);

export default getStatus;
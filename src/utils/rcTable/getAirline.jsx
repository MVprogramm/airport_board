import React from "react";

const getAirline = (fly, logo) => (
  <div className="flight flight__airline">
    <div className="flight__logo" style={{"backgroundImage": `url(https://api.iev.aero/${logo})`}}></div>
    <div className="flight__text flight__text_airline">
      {fly.airline.en.name}
    </div>
  </div>
);

export default getAirline;
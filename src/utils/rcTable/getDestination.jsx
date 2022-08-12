import React from "react";

const getDestination = (fly, spin) => (
  <div className="flight flight__text flight__text_destination">
    {
      spin === "dep"
        ? fly["airportToID.city_en"]
        : fly["airportFromID.city_en"]
    }
  </div>
);

export default getDestination;
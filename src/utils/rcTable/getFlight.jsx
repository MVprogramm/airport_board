import React from "react";

const getFlight = (fly) => 
  <div className="flight flight__text flight__text_flight">
    {fly.codeShareData[0].codeShare}
  </div>;

export default getFlight;
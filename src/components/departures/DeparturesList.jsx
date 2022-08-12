import React, { useState, useEffect } from 'react';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";
import { isDate } from "../../utils/dateUtils.js"

const DeparturesList = ({ flyDay }) => {
  const [departures, setDepartures] = useState([]);
  useEffect(() => {
    getFlights("11-01-2022").then(res => {
      const result = res.body.departure
        .filter(fly => isDate(fly.timeDepExpectCalc))
        .filter(fly => 
          new Date(fly.timeDepExpectCalc).getTime() >= new Date("2022-01-11").getTime() &&
          new Date(fly.timeDepExpectCalc).getTime() < new Date("2022-01-12").getTime()
        )
        .sort((a, b) => 
          new Date(a.timeDepExpectCalc).getTime() - new Date(b.timeDepExpectCalc).getTime());
        
      setDepartures(result);
    });
  }, []);

  return <Flights data={departures} spin="dep" />
};

export default DeparturesList;

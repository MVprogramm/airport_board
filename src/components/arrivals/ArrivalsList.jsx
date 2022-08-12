import React, { useEffect, useState } from 'react';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";
import { isDate } from "../../utils/dateUtils.js"

const ArrivalsList = ({ flyDay }) => {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    getFlights("11-01-2022").then(res => {
      const result = res.body.arrival
        .filter(fly => isDate(fly.timeArrExpectCalc))
        .filter(fly => 
          new Date(fly.timeArrExpectCalc).getTime() >= new Date("2022-01-11").getTime() &&
          new Date(fly.timeArrExpectCalc).getTime() < new Date("2022-01-12").getTime()
        )
        .sort((a, b) => 
          new Date(a.timeArrExpectCalc).getTime() - new Date(b.timeArrExpectCalc).getTime());

      setArrivals(result);
    });
  }, []);
    
  return <Flights data={arrivals} spin="arr" />
};

export default ArrivalsList;

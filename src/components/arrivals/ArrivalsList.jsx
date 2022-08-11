import React, { useEffect, useState } from 'react';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";

const ArrivalsList = ({ flyDay }) => {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    getFlights("11-01-2022").then(res => {
      const result = res.body.arrival.map(fly => {
        const output = {
          terminal: fly.term,
          key: fly.ID, 
        };

        return output;
      });

      setArrivals(result);
    });
  }, []);
    
  return <Flights data={arrivals} spin="arr" />
};

export default ArrivalsList;

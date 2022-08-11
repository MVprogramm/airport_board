import React, { useState, useEffect } from 'react';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";

const DeparturesList = ({ flyDay }) => {
  const [departures, setDepartures] = useState([]);
  useEffect(() => {
    getFlights("11-01-2022").then(res => {
      const result = res.body.departure.map(fly => {
        const output = {
          terminal: fly.term,
          key: fly.ID, 
        };

        return output;
      });

      setDepartures(result);
    });
  }, []);

  return <Flights data={departures} spin="dep" />
};

export default DeparturesList;

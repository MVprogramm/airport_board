import React from 'react';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";

const DeparturesList = () => {
  getFlights().then(res => console.log(res.body.departures));
  return <Flights />
};

export default DeparturesList;

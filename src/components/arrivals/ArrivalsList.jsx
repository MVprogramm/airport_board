import React from 'react';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";

const ArrivalsList = () => {
  getFlights().then(res => console.log(res.body.arrival));
  return <Flights />
};

export default ArrivalsList;

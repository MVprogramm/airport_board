import React from 'react';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";

const ArrivalsList = ({ flyDay }) => {
  getFlights().then(res => console.log(res.body.arrival));
  return <Flights />
};

export default ArrivalsList;

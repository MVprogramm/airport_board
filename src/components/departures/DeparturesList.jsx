import React from 'react';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";

const DeparturesList = ({ flyDay }) => {
  getFlights().then(res => console.log(res.body.departure));
  return <Flights />
};

export default DeparturesList;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWar } from '../no/noSlice.js';
import Flights from '../flights/Flights.jsx';
import getFlights from "../../utils/gateway.js";
import * as dates from "../../utils/dateUtils.js";

const DeparturesList = () => {
  const flyDay = useSelector((state) => state.day.flyDay);
  const flight = useSelector((state) => state.search.flight);
  const dispatch = useDispatch();
  const [departures, setDepartures] = useState([]);
  const [resolveCode, setResolveCode] = useState(0);

  useEffect(() => {
    setResolveCode(0);
    dispatch(setWar(new Date(flyDay).getTime() > new Date(2022, 1, 23).getTime()));
    getFlights(dates.getFormattedEndPoint(flyDay)).then(res => {
      setResolveCode(res.error.code);
      const result = res.body.departure
        .filter(fly => dates.isDate(fly.timeDepExpectCalc))
        .filter(fly => 
          new Date(fly.timeDepExpectCalc).getTime() >= new Date(
            dates.getFormattedFilter(flyDay)[0]
          ).getTime() &&
          new Date(fly.timeDepExpectCalc).getTime() < new Date(
            dates.getFormattedFilter(flyDay)[1]
          ).getTime()
        )
        .sort((a, b) => 
          new Date(a.timeDepExpectCalc).getTime() - new Date(b.timeDepExpectCalc).getTime());
      
      setDepartures(
        flight ? result.filter(fly => fly.codeShareData[0].codeShare.includes(flight)) : result
      );
    });
  }, [new Date(flyDay).getTime(), flight]);
  
  return <Flights data={departures} spin="dep" resolve={resolveCode} />
};

export default DeparturesList;

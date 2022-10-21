import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWar } from "../../store/noSlice.js";
import Flights from "../flights/Flights.jsx";
import { getDepData } from "../../utils/dataUtils.js";
import * as dates from "../../utils/dateUtils.js";
import { useGetFlightsQuery } from "../../store/flights.api";

const DeparturesList = () => {
  const flyDay = useSelector((state) => state.day.flyDay);
  const flight = useSelector((state) => state.search.flight);
  const dispatch = useDispatch();
  const [departures, setDepartures] = useState(null);

  const { isLoading, isError, isFetching, currentData } = useGetFlightsQuery(
    dates.getFormattedEndPoint(flyDay)
  );
  const is = { isError, isLoading, isFetching };

  useEffect(() => {
    setDepartures(null);
    dispatch(
      setWar(new Date(flyDay).getTime() > new Date(2022, 1, 23).getTime())
    );

    if (currentData) {
      const result = getDepData(currentData, flyDay);
      setDepartures(
        flight
          ? result.filter((fly) =>
              fly.codeShareData[0].codeShare.includes(flight)
            )
          : result
      );
    }
  }, [currentData]);

  return <Flights data={departures} spin="dep" is={is} />;
};

export default DeparturesList;

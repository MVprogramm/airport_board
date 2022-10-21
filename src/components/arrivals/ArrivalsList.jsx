import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWar } from "../../store/noSlice.js";
import Flights from "../flights/Flights.jsx";
import { getArrData } from "../../utils/dataUtils.js";
import * as dates from "../../utils/dateUtils.js";
import { useGetFlightsQuery } from "../../store/flights.api";

const ArrivalsList = () => {
  const flyDay = useSelector((state) => state.day.flyDay);
  const flight = useSelector((state) => state.search.flight);
  const dispatch = useDispatch();
  const [arrivals, setArrivals] = useState(null);

  const { isLoading, isError, isFetching, currentData } = useGetFlightsQuery(
    dates.getFormattedEndPoint(flyDay)
  );
  const is = { isError, isLoading, isFetching };

  useEffect(() => {
    setArrivals(null);
    dispatch(
      setWar(new Date(flyDay).getTime() > new Date(2022, 1, 23).getTime())
    );

    if (currentData) {
      const result = getArrData(currentData, flyDay);
      setArrivals(
        flight
          ? result.filter((fly) =>
              fly.codeShareData[0].codeShare.includes(flight)
            )
          : result
      );
    }
  }, [new Date(flyDay).getTime(), flight, currentData]);

  return <Flights data={arrivals} spin="arr" is={is} />;
};

export default ArrivalsList;

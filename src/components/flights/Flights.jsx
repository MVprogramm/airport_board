import React, { useEffect, useState } from "react";
import Table from "rc-table";
import Spin from "../spin/Spin.jsx";
import No from "../no/No.jsx";
import getColumns from "../../utils/rcTable/getColumns.jsx";
import getTerminal from "../../utils/rcTable/getTerminals.jsx";
import getLocalTime from "../../utils/rcTable/getLocalTime.jsx";
import getDestination from "../../utils/rcTable/getDestination.jsx";
import getStatus from "../../utils/rcTable/getStatus.jsx";
import getAirline from "../../utils/rcTable/getAirline.jsx";
import getFlight from "../../utils/rcTable/getFlight.jsx";
import "./flights.scss";

const Flights = ({ data, spin, is }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { isError, isLoading, isFetching } = is;

  useEffect(() => {
    const handleInnerWidth = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleInnerWidth);

    return window.removeEventListener("innerWidth", handleInnerWidth);
  });

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading || isFetching || data === null) return <Spin spin={spin} />;
  if (data.length === 0) return <No />;

  const flightsList = data.map((fly) => {
    let logo = fly.logo;
    if (logo === undefined) {
      const airline = fly.airline.en.name;
      logo = data.find((fly) => fly.airline.en.name === airline).logo;
    }
    if (fly.airline.en.name === "LOT")
      logo = "media/airline/files/5b796cfc8c435285152565.png";
    if (fly.airline.en.name === "Motor Sich")
      logo = "media/airline/files/5b556c813c99a330362586.png";
    let output = {
      terminal: getTerminal(fly),
      localTime: getLocalTime(fly, spin),
      destination: getDestination(fly, spin),
      status: getStatus(fly, spin),
      airline: getAirline(fly, logo),
      flight: getFlight(fly),
      key: fly.ID,
    };

    if (innerWidth < 780) {
      output = {
        col_1: (
          <div className="col">
            {getTerminal(fly)}
            {getLocalTime(fly, spin)}
            {getFlight(fly)}
          </div>
        ),
        col_2: (
          <div className="col">
            {getDestination(fly, spin)}
            {getStatus(fly, spin)}
            {getAirline(fly, logo)}
          </div>
        ),
        key: fly.ID,
      };
    }

    return output;
  });

  const columns = innerWidth >= 780 ? getColumns() : getColumns(true);

  return (
    <div className="board__flights">
      <Table columns={columns} data={flightsList} />
    </div>
  );
};
export default Flights;

import React from "react";
import Table from "rc-table";
import Spin from "../spin/Spin.jsx";
import { columns } from "../../utils/dataStore.js";
import "./flights.scss";

const Flights = ({data, spin}) => {
  if (data.length === 0) return <Spin spin={spin} />;
  return (
    <div className="board__flights">
      <Table columns={columns} data={data} />
    </div>
  );
};
export default Flights;

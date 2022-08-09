import React from "react";
import Table from "rc-table";
import { columns } from "../../utils/data.js";
import "./flights.scss";

const Flights = () => (
  <div className="board__flights">
    <Table columns={columns} />
    
  </div>
);

export default Flights;

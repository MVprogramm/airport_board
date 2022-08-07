import React from "react";
import Table from "rc-table";
import "./flights.scss";

const columns = [
  {
    title: "Terminal",
    dataIndex: "terminal",
    key: "terminal",
    width: 100,
  },
  {
    title: "Local time",
    dataIndex: "localTime",
    key: "localTime",
    width: 100,
  },
  {
    title: "Destination",
    dataIndex: "destination",
    key: "destination",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 200,
  },
  {
    title: "Airline",
    dataIndex: "airline",
    key: "airline",
    width: 200,
  },
  {
    title: "Flight",
    dataIndex: "flight",
    key: "flight",
    width: 200,
  },
];

const Flights = () => (
  <div className="board__flights">
    <Table columns={columns} />
  </div>
);

export default Flights;

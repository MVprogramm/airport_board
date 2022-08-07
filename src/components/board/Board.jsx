import React from "react";
import Menu from "../menu/Menu.jsx";
import Flights from "../flights/Flights.jsx";
import Date from "../date/Date.jsx";
import "./board.scss";

const Board = () => (
  <section className="board">
    <Menu />
    <Date />
    <Flights />
  </section>
);

export default Board;

import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "../menu/Menu.jsx";
import DeparturesList from "../departures/DeparturesList.jsx";
import ArrivalsList from "../arrivals/ArrivalsList.jsx";
import Day from "../day/Day.jsx";
import "./board.scss";

const Board = () => {
  return (
    <section className="board">
      <BrowserRouter>
        <Menu />
        <Day />
        <Switch>
          <Route path="/departures">
            <DeparturesList />
          </Route>
          <Route path="/arrivals">
            <ArrivalsList />
          </Route> 
          <Route path="/">
            <DeparturesList />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default Board;

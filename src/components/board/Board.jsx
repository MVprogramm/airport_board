import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from "../menu/Menu.jsx";
import DeparturesList from "../departures/DeparturesList.jsx";
import ArrivalsList from "../arrivals/ArrivalsList.jsx";
import Date from "../date/Date.jsx";
import "./board.scss";

const Board = () => {
  const [status, setStatus] = useState("dep");
  
  return (
    <section className="board">
      <Router>
        <Menu status={status} setStatus={setStatus}/>
        <Date />
        <Switch>
          <Route path="/departures" component={DeparturesList} />
          <Route path="/arrivals" component={ArrivalsList} /> 
        </Switch>
      </Router>
    </section>
  );
}

export default Board;

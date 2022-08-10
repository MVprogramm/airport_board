import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from "../menu/Menu.jsx";
import DeparturesList from "../departures/DeparturesList.jsx";
import ArrivalsList from "../arrivals/ArrivalsList.jsx";
import Day from "../day/Day.jsx";
import "./board.scss";

const Board = () => {
  const [status, setStatus] = useState("dep");
  const [flyDay, setFlyDay] = useState(new Date());
  
  return (
    <section className="board">
      <Router>
        <Menu status={status} setStatus={setStatus}/>
        <Day flyDay={flyDay} setFlyDay={setFlyDay}/>
        <Switch>
          <Route path="/departures">
            <DeparturesList flyDay={flyDay} />
          </Route>
          <Route path="/arrivals">
            <ArrivalsList flyDay={flyDay} />
          </Route> 
          <Route path="/">
            <DeparturesList flyDay={flyDay} />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default Board;

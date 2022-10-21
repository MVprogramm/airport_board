import React from "react";
import { useSelector } from "react-redux";
import "./no.scss";

const No = () => {
  const war = useSelector((state) => state.no.war);
  if (war)
    return (
      <div className="no">
        <div className="no__war"></div>
      </div>
    );
  return (
    <div className="no">
      <div className="no__flight">No Flight</div>
    </div>
  );
};

export default No;

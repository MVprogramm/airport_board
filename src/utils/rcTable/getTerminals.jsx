import React from "react";
import classNames from "classnames";

const getTerminal = (fly) => (
  <div className="flight flight__terminal">
    <span className={classNames("flight__name", {
      "flight__name_a": fly.term === "A",
      "flight__name_b": fly.term === "B",
      "flight__name_c": fly.term === "C",
      "flight__name_d": fly.term === "D",
    })}
    >
      {fly.term}
    </span>
  </div>
);

export default getTerminal;
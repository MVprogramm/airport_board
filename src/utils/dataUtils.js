import * as dates from "./dateUtils.js";

export function getDepData(res, flyDay) {
  const result = res.body.departure
    .filter((fly) => dates.isDate(fly.timeDepExpectCalc))
    .filter(
      (fly) =>
        new Date(fly.timeDepExpectCalc).getTime() >=
          new Date(dates.getFormattedFilter(flyDay)[0]).getTime() &&
        new Date(fly.timeDepExpectCalc).getTime() <
          new Date(dates.getFormattedFilter(flyDay)[1]).getTime()
    )
    .sort(
      (a, b) =>
        new Date(a.timeDepExpectCalc).getTime() -
        new Date(b.timeDepExpectCalc).getTime()
    );

  return result;
}

export function getArrData(res, flyDay) {
  const result = res.body.arrival
    .filter((fly) => dates.isDate(fly.timeArrExpectCalc))
    .filter(
      (fly) =>
        new Date(fly.timeArrExpectCalc).getTime() >=
          new Date(dates.getFormattedFilter(flyDay)[0]).getTime() &&
        new Date(fly.timeArrExpectCalc).getTime() <
          new Date(dates.getFormattedFilter(flyDay)[1]).getTime()
    )
    .sort(
      (a, b) =>
        new Date(a.timeArrExpectCalc).getTime() -
        new Date(b.timeArrExpectCalc).getTime()
    );

  return result;
}

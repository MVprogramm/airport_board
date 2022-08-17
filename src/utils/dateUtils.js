const getTwoNumbersString = (num) => {
  const twoNumbersString = num < 10 ? "0" + num : "" + num;
  return twoNumbersString;
};

export const isDate = (date) => {
  const time = new Date(date).getTime();
  return typeof time === 'number' && isFinite(time);
}

export const getFormattedDate = (date) => 
  `${getTwoNumbersString(date.getDate())}/${getTwoNumbersString((+date.getMonth()) + 1) + ''}`;

export const getFormattedTime = (time) =>
  `${time.getHours()}:${getTwoNumbersString((time.getMinutes()))}`;

export const getFormattedEndPoint = (day) => {
  const date = new Date(day);
  return `${getTwoNumbersString(date.getDate())}-${getTwoNumbersString((+date.getMonth()) + 1) + ''}-${date.getFullYear()}`;
};

export const getFormattedFilter = (day) => {
  const dateStart = new Date(day);
  const dateEnd = new Date(new Date(day).getTime() + 1000 * 60 * 60 * 24);
  return [
    `${dateStart.getFullYear()}-${getTwoNumbersString((+dateStart.getMonth()) + 1) + ''}-${getTwoNumbersString(dateStart.getDate())}`,
    `${dateEnd.getFullYear()}-${getTwoNumbersString((+dateEnd.getMonth()) + 1) + ''}-${getTwoNumbersString(dateEnd.getDate())}`
  ];
};

export const getToday = () => getFormattedDate(new Date());

export const getTomorrowsDate = () => new Date(new Date().getTime() + 1000 * 60 * 60 * 24) 
export const getTomorrow = () => getFormattedDate(getTomorrowsDate());

export const getYesterdaysDate = () => new Date(new Date().getTime() - 1000 * 60 * 60 * 24);
export const getYesterday = () => getFormattedDate(getYesterdaysDate());
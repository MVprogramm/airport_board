const getTwoNumbersString = (num) => {
  const twoNumbersString = num < 10 ? "0" + num : "" + num;
  return twoNumbersString;
};

export const getFormattedDate = (date) => 
  `${getTwoNumbersString(date.getDate())}/${getTwoNumbersString((+date.getMonth()) + 1) + ''}`;

export const getTodaysDate = () => new Date();
export const getToday = () => getFormattedDate(getTodaysDate());

export const getTomorrowsDate = () => new Date(new Date().getTime() + 1000 * 60 * 60 * 24) 
export const getTomorrow = () => getFormattedDate(getTomorrowsDate());

export const getYesterdaysDate = () => new Date(new Date().getTime() - 1000 * 60 * 60 * 24);
export const getYesterday = () => getFormattedDate(getYesterdaysDate());
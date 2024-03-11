export const getUniqueInteger = () => {
  const todaysDate = new Date();
  return (
    todaysDate.getDate() * todaysDate.getMonth() +
    todaysDate.getFullYear() *
      todaysDate.getHours() *
      todaysDate.getMinutes() *
      todaysDate.getMilliseconds()
  );
};

export const getAmountWithZeroPaisa = (amount) => {
  return (Math.round((amount - (amount % 1)) * 100) / 100).toFixed(2);
};

export const calculatePercentage = (value, percent) => {
  return value * (percent / 100);
};

export const getInternetPlanSpeed = (amountPerMonth) => {
  return amountPerMonth > 1000 ? 300 : 100;
};

export const getTodaysDateString = (startWith) => {
  const date = new Date();
  const year = date.getFullYear();

  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  switch (startWith.toLowerCase()) {
    case "day":
      return `${day}-${month}-${year}`;
    case "year":
      return `${year}-${month}-${day}`;
    case "month":
      return `${month}-${day}-${year}`;
    default:
      return `${month}-${day}-${year}`;
  }
};

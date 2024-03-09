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

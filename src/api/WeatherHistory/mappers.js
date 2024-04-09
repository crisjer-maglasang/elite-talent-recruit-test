export const prepareDataForRequestWeatherHistory = (data) => {
  const { lat, lon } = data;

  return { lat, lon, type: "hour" };
};

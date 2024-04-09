export const parseWeatherList = (list) => {
  if (list === undefined) return {};

  const dateFormattedList = list.map((el) => {
    const { dt, ...rest } = el;

    return {
      date: formatDateToDisplay(dt),
      time: formatDateToDisplay(dt, "onlyHours"),
      ...rest,
    };
  });

  return dateFormattedList.reduce((groups, item) => {
    const groupDate = item["date"];
    if (!groups[groupDate]) {
      groups[groupDate] = [];
    }
    groups[groupDate].push(item);
    return groups;
  }, {});
};

const formatDateToDisplay = (unixTimeStamp, displayMode = "onlyDate") => {
  const date = new Date(unixTimeStamp * 1000);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();

  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return displayMode === "onlyHours"
    ? `${hours}h`
    : `${formattedMonth}/${formattedDay}/${year}`;
};

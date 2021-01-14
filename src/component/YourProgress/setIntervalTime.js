const setIntervalTime = (date, dayOrWeek) => {
  if (dayOrWeek === 604800) {
    const day = date.getDay() || 7;
    if (day !== 1) { date.setHours(-24 * (day - 1)); }
  }
  date.setHours(0, 0, 0, 0);
  const dateInteger = date.getTime();

  const timeIntervals = [
    { start: dateInteger, end: dateInteger + (dayOrWeek * 1000) },
    { start: dateInteger - dayOrWeek * 1000, end: dateInteger },
    { start: dateInteger - (2 * dayOrWeek * 1000), end: dateInteger - dayOrWeek * 1000 },
  ];
  return timeIntervals;
};

export default setIntervalTime;

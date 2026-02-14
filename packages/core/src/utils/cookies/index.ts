export const getCreatedTime = (minutes?: number) => {
  const min = minutes || 60;
  const timeInterval = 1000 * 60 * min; // # 1 hour by default
  const createdTime = Date.now() + timeInterval;

  return createdTime;
};

export const getExpireDate = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return date;
};

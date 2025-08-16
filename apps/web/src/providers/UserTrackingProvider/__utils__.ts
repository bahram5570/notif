import { USER_TRACKING_NAME } from './constants';
import { UserTrackingTypes } from './types';

export const getUserTracking = () => {
  const data = localStorage.getItem(USER_TRACKING_NAME);
  let result = data ? (JSON.parse(data) as UserTrackingTypes) : null;

  if (result) {
    const currentTime = new Date().getTime();

    if (currentTime > result.expTime) {
      localStorage.removeItem(USER_TRACKING_NAME);
      result = null;
    }
  }

  return result;
};

export const newUserTracking = (props: UserTrackingTypes) => {
  localStorage.setItem(USER_TRACKING_NAME, JSON.stringify(props));
};

export const updateUserTracking = (newUrl: string) => {
  const data = getUserTracking();

  if (data) {
    data.urls.push({ url: newUrl, visitTime: new Date().toISOString() });
    localStorage.setItem(USER_TRACKING_NAME, JSON.stringify(data));
  }
};

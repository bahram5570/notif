import { InitialEnabledValueTypes } from './types';

export const initialEnabledValue: InitialEnabledValueTypes = (fetchOnMount) => {
  return fetchOnMount === false ? false : true;
};

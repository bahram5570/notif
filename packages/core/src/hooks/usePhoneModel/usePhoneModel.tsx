import { useSystem } from '../useSystem';

export const usePhoneModel = () => {
  const { browserInfo, operatingSystem, isAddToHome } = useSystem();
  const result = `${operatingSystem} | ${browserInfo.browser} ${browserInfo.version} | addToHomeScreen: ${isAddToHome}`;
  return result;
};

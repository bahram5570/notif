export type IsAddToHomeTypes = boolean | null;
export type OperatingSystemTypes = 'windows' | 'android' | 'ios';
export type BrowserInfoTypes = { browser: 'Chrome' | 'Safari' | 'WebView' | 'Other'; version: string };

export type OperatingSystemContextTypes = {
  isAddToHome: IsAddToHomeTypes;
  browserInfo: BrowserInfoTypes;
  operatingSystem: OperatingSystemTypes;
};

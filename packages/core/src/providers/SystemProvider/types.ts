export type IsAddToHomeTypes = boolean | null;
export type OperatingSystemTypes = 'windows' | 'android' | 'ios';
export type BrowserInfoTypes = { browser: 'Chrome' | 'Safari' | 'WebView' | 'Other'; version: string };
export type BreakPointTypes = { mobile: boolean; tablet: boolean; laptop: boolean; desktop: boolean; wide: boolean };

export type SystemContextTypes = {
  breakPoint: BreakPointTypes;
  isAddToHome: IsAddToHomeTypes;
  browserInfo: BrowserInfoTypes;
  operatingSystem: OperatingSystemTypes;
};

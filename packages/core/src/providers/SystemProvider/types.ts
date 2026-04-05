export type IsAddToHomeTypes = boolean | null;
export type OperatingSystemTypes = 'windows' | 'android' | 'ios';
export type BrowserInfoTypes = { browser: 'Chrome' | 'Safari' | 'WebView' | 'Other'; version: string };
export type BreakPointTypes = { mobile: boolean; tablet: boolean; laptop: boolean; desktop: boolean; wide: boolean };

type AppNameTypes = 'PWA' | 'MEN_PWA' | 'WEB';

export type SystemContextTypes = {
  appName: AppNameTypes;
  breakPoint: BreakPointTypes;
  isAddToHome: IsAddToHomeTypes;
  browserInfo: BrowserInfoTypes;
  operatingSystem: OperatingSystemTypes;
};

export interface SystemProviderTypes {
  appName: AppNameTypes;
  children: React.ReactNode;
}

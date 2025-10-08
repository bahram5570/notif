export type OperatingSystemTypes = 'windows' | 'ios' | 'android';

export interface OperatingSystemProviderTypes {
  children: React.ReactNode;
}

export type OperatingSystemContextTypes = {
  operatingSystem: OperatingSystemTypes;
};

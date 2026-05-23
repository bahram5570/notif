export type MonitoringApiTypes = { date: string; api: string; method: string; status: number; duration: number };
export type MonitoringNavigationTypes = { date: string; from: string; to: string; duration: number };

export type MonitoringContextTypes = {
  api: (v: MonitoringApiTypes) => void;
  navigation: (v: MonitoringNavigationTypes) => void;
};

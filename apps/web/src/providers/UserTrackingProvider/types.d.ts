export type UserTrackingTypes = {
  ip: string;
  expTime: number;
  username: string;
  userAgent: string;
  macAddress: string;
  urls: { url: string; visitTime: string }[];
};

export type UserTrackingInfoTypes = Pick<UserTrackingTypes, 'ip' | 'userAgent'>;

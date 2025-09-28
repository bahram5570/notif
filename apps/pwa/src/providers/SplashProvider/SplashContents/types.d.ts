import { SplashStatusTypes } from '../types';

export interface SplashContentsProps {
  splashStatus: Exclude<SplashStatusTypes, 'finish'>;
  splashStatushHandler: (v: SplashStatusTypes) => void;
}

export interface SplashContentsProgressProps
  extends Pick<SplashContentsProps, 'splashStatushHandler' | 'splashStatus'> {}

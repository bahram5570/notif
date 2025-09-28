import { SplashStatusTypes } from '../types';

export interface SplashContentsProps {
  onComplete: () => void;
  splashStatus: Exclude<SplashStatusTypes, 'finish'>;
}

export interface SplashContentsProgressProps extends Pick<SplashContentsProps, 'onComplete' | 'splashStatus'> {}

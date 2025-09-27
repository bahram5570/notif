import { SplashStatusTypes } from '../types';

export interface SplashContentsProps {
  onComplete: () => void;
  splashStatus: Exclude<SplashStatusTypes, 'finish'>;
}

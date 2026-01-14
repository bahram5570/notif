import { ProgressCycleEnums } from './enums';

export interface ProgressCycleLoadingProps {
  image: string;
  isSuccess: boolean;
  onComplete: () => void;
  titles: { subTitle1: string; subTitle2: string; main: string };
}

export interface CircleProgressBarProps extends Pick<ProgressCycleLoadingProps, 'onComplete'> {
  loadingStatus: ProgressCycleEnums;
}

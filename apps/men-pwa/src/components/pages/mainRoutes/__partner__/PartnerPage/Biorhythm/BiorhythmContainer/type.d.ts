import { BiorhythmPropsType } from '../type';

export type BiorhythmContainerProps = Pick<
  BiorhythmPropsType,
  'bioRhythemWidget'
>['bioRhythemWidget']['data']['items'][0] & {};

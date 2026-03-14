import { BioType, SingleDateTypes, TextBioType } from '../../__hooks__/useCalendarGetData/types';
import { ChallengeResponseType } from '../__hooks__/useGetPartnerData/type';

export type BiorhythmPropsType = Pick<ChallengeResponseType, 'bioRhythemWidget'> & {};

export type BiorhythmStatusType = {
  Icon: ReactDOM;
  text: string;
  type: keyof BioType;
  typeText: keyof TextBioType;
};

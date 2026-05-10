import { ProgramRateStatusEnum } from './enum';

export type RateType = {
  title: string;
  description?: string;
  rate: number;
  status: ProgramRateStatusEnum;
};

export interface RoutinFooterPropsType {
  rate: RateType;
}

export interface ReviewCommentPropsType extends RoutinFooterPropsType {}

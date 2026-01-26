import { PageInfoStateTypes } from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo/types';

export interface ActivationHeadingProps extends Pick<
  PageInfoStateTypes,
  'progressPercentage' | 'scripts' | 'orderOfQuestionScripts'
> {
  banner?: string;
  isShowLogo?: boolean;
}

export interface UsePercentageProps extends Pick<ActivationHeadingProps, 'progressPercentage'> {}

import { ActionTypes, WidgetsButtonTypes } from '@repo/core/providers/WidgetActionsProvider';

export type ProgramType = {
  completeTitle: string;
  completeRatio: number;
  isBookmarked: true;
  commentCount: number;
  rateAvg: number;
  description: string;
  title: string;
  writerIcon: string;
  writerName: string;
  writerSpeciality: string;
  button: WidgetsButtonTypes;
  programId: string;
  image: string;
  action: ActionTypes;
  bmiDescription: string;
  bmiTitle: string;
};

export type RecommendedRoutinResponseType = {
  totalCount: number;
  programs: ProgramType[];
};

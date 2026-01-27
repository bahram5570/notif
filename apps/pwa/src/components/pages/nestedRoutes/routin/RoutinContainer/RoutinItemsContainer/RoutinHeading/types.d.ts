import { RoutinItemsContainerPropsType } from '../type';

export interface RoutinHeadingProps extends Pick<
  RoutinItemsContainerPropsType,
  'description' | 'image' | 'title' | 'writerIcon' | 'writerName' | 'writerSpeciality' | 'commentCount' | 'rateAvg'
> {}

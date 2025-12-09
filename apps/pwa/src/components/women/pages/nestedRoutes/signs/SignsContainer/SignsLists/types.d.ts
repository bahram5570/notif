import { SlideHandlerTypes } from '../__hooks__/useSignsSlide/types';
import { UpdateSingSelectedListType } from '../__hooks__/useSingSelectedList/type';
import { SignsContainerProps } from '../types';

export interface SignsListsPros extends Pick<SignsContainerProps, 'infoList'> {
  slideHandler: SlideHandlerTypes;
  slide: number;
  updateSingSelectedList: UpdateSingSelectedListType;
}

import { ConfigResponseType } from '../__hooks__/useConfig/type';
import { ShareExperienceNewExerciseModalContainerProps } from '../types';

type DataType = Pick<ConfigResponseType, 'sendEnable' | 'toast'>;
type ItemType = Pick<ShareExperienceNewExerciseModalContainerProps, 'associationId'>;

export interface ShareExperienceNewContinueBtnProps extends DataType, ItemType {
  text: string;
  btnTop: number | undefined;
  submitHandler: () => void;
  isSubmitLoading: boolean;
}

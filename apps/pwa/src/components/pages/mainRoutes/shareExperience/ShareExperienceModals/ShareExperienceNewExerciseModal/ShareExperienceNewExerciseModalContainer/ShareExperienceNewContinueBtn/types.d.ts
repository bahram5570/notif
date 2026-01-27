import { ConfigResponseType } from '../__hooks__/useConfig/type';

type DataType = Pick<ConfigResponseType, 'sendEnable' | 'toast'>;

export interface ShareExperienceNewContinueBtnProps extends DataType {
  text: string;
  btnTop: number | undefined;
}

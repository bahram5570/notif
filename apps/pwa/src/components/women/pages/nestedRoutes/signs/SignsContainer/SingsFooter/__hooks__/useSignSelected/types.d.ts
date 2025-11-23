import { SignGeneratorProps } from '@components/women/SignGenerator/types';

import { SingSelectedListType } from '../../../__hooks__/useSingSelectedList/type';

export interface useSignSelectedProps {
  selectedDate?: string;
  singSelectedList: SingSelectedListType;
}

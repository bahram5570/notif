import { UseListMakerProps } from '@components/activation/CyclesModule/__hooks__/useListMaker/types';

import { PeriodSettingsValuesTypes } from '../__hooks__/useValues/types';

export interface PeriodSettingsLingthGeneratorTypes {
  values: PeriodSettingsValuesTypes;
  name: keyof PeriodSettingsValuesTypes;
}

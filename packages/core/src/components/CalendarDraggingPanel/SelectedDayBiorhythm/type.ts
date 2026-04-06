import React from 'react';

import { BioType, SingleDateTypes, TextBioType } from '../../calendar/type';

export type SelectedDayBiorhythmProps = {
  selectedDateInfo: SingleDateTypes;
};

export type BiorhythmStatusType = {
  Icon: React.ComponentType<any>;
  text: string;
  type: keyof BioType;
  typeText: keyof TextBioType;
};

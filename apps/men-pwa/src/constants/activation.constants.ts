import { ActivationTabsListTypes } from '@components/activation/ActivationTabs/types';
import { CULTURE_INITIAL_VALUES, CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

export const ACTIVATION_PAYLOAD_VALUES = {
  sport: 0,
  weight: 0,
  height: 0,
  medicen: 0,
  sikness: 0,
  addicted: 0,
  jobState: 0,
  lastName: '',
  identity: '',
  password: '',
  firstName: '',
  birthDate: '',
  sleepStatus: 0,
  nationality: 0,
  phoneModel: '',
  deviceToken: '',
  sexualStatus: 0,
  interfaceCode: '',
  sexualProblems: 0,
  physicalActivity: 0,
  isHasPassword: true,
  calendarType: CULTURE_INITIAL_VALUES.calendarType,
};

export const ACTIVATION_REWARD_QUERY_NAME = 'ACTIVATION_REWARD_QUERY_NAME';

export const ACTIVATION_BIRTHDATE_TABS_LIST: ActivationTabsListTypes = [
  { text: 'تقویم خورشیدی', value: CalendarTypeEnum.Jalali },
  { text: 'تقویم میلادی', value: CalendarTypeEnum.Gregorian },
];

export const ACTIVATION_WEIGHT_VALUES = { min: 20, max: 200, defaultValue: 70, unit: 'kg' };
export const ACTIVATION_HEIGHT_VALUES = { min: 100, max: 220, defaultValue: 150, unit: 'cm' };

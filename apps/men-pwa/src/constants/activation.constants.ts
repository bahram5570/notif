import { ActivationTabsListTypes } from '@components/activation/ActivationTabs/types';
import { CULTURE_INITIAL_VALUES, CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

export const ACTIVATION_PAYLOAD_VALUES = {
  firstName: '',
  lastName: '',
  identity: '',
  isHasPassword: true,
  password: '',
  interfaceCode: '',
  deviceToken: '',
  birthDate: '',
  phoneModel: '',
  sexualStatus: 0,
  nationality: 0,
  calendarType: CULTURE_INITIAL_VALUES.calendarType,
  addicted: 0,
  jobState: 0,
  medicen: 0,
  sikness: 0,
  sleepStatus: 0,
  sport: 0,
  physicalActivity: 0,
  sexualProblems: 0,
  weight: -1,
  height: -1,
};

// export const ACTIVATION_INTERFACE_CODE = 'ACTIVATION_INTERFACE_CODE';

// export const ACTIVATION_WELCOMING_PREVIEWED_NAME = 'welcomingPreviewed';

export const ACTIVATION_REWARD_QUERY_NAME = 'ACTIVATION_REWARD_QUERY_NAME';

// export const ACTIVATION_BIRTHDATE_TABS_LIST: ActivationTabsListTypes = [
//   { text: 'تقویم خورشیدی', value: CalendarTypeEnum.Jalali },
//   { text: 'تقویم میلادی', value: CalendarTypeEnum.Gregorian },
// ];

// export enum PregnancyHistoryStatusEnum {
//   fistTime,
//   haveKid,
//   abortingExperience,
//   notMatter,
// }

// export enum WomanStatusEnum {
//   pre,
//   menstruation,
//   pregnancy,
//   breastfeeding,
//   menopause,
// }

// export enum AbortionStatusEnum {
//   notImportant,
//   hasAbortion,
//   hasNotAbortion,
// }

// export enum PregnancyNoEnum {
//   notImportant,
//   hasPregnancy,
//   hasNotPregnancy,
// }

// export enum PeriodStatusEnum {
//   notImportant,
//   prevention,
//   intent,
// }

// export enum PregnancyCommitEnum {
//   none,
//   moreThan6Month,
//   lessThan6Month,
// }

// export enum PeriodSituationEnum {
//   dontKnow,
//   regular,
//   irregular,
// }

// export enum OnFertilitySexEnum {
//   haveSex,
//   dontKnow,
// }

// export enum PmsStatusEnum {
//   None,
//   Pms,
//   Pmdd,
// }

// export enum PreventionWaysEnum {
//   condom,
//   naturalPervention,
//   birthControlPills,
//   IUD,
//   emergencyPill,
//   otherWays,
// }

// export enum PreventionSexCommitedEnum {
//   safeDays,
//   dontCare,
//   dontKnow,
// }

// export enum PragnencyDiseaseEnum {
//   bloodPressure,
//   diabetes,
//   fate,
//   heartDisease,
//   asthma,
//   dontKnow,
//   noProblem,
// }

// export enum PragnencyHistoryTypeEnum {
//   Natural,
//   Caesarean,
//   NoExperienc,
// }

// export enum ChildBirthTypeEnum {
//   NotImportant = 0,
//   NaturalChildBirth = 1,
//   CesareanSection = 2,
// }

// export enum ChildTypeEnum {
//   NotImportant = 0,
//   Girl = 1,
//   Boy = 2,
//   Twin = 4,
// }

// export enum GoalNamesEnum {
//   INTENTION,
//   TRACKER,
//   PREGNANCY,
// }

export const ACTIVATION_WEIGHT_VALUES = { min: 20, max: 200, defaultValue: 70, unit: 'kg' };
export const ACTIVATION_HEIGHT_VALUES = { min: 100, max: 220, defaultValue: 150, unit: 'cm' };

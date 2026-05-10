export enum WidgetsEnum {
  CycleCard = 0,
  StoryCard = 1,
  HintCard = 2,
  Predictcard = 3,
  ArticleCard = 4,
  ReportCard = 5,
  EmptyReport = 6,
  PragnencyCard = 7,
  BreastfeedingCard = 8,
  SubscriptionCard = 9,
  MotivationCard = 10,
  ClinicCard = 11,
  SignCard = 12,
  ShareExperienceCard = 13,
  BabyCheckHistoryCard = 14,
  OvulationHistoryCard = 15,
  PeriodReportCard = 16,
  PeriodReportEmptyStateCard = 17,
  MostRepeatedSigns = 18,
  MostRepeatedSignsEmpty = 19,
  AverageOfcycleLengths = 20,
  BabyCheckKitCard = 21,
  OvulationKitCard = 22,
  SexTrackerCard = 23,
  PeriodCycleHistory = 24,
  CirculeCycleCard = 25,
  CycleDateCard = 26,
  PregnancyCheckup = 27,
  WidgetList = 28,
  ProgramCard = 29,
  // PregnancyHomeWidget = 30,
  Media = 31,
  Biorhythm = 32,
  ProgramScrollWidget = 37,
  ManProgramScrollWidget = 38,
  ManProgramHealthWidget = 40,
  WomanPairProgram = 41,
  MenStory = 42,
  ShortcutWidget = 43,
  HintCardV2 = 44,
  AdvertiseCardList = 45,
  ClinicCardV2 = 46,
}

export enum WidgetStoryTypeEnum {
  Video = 1,
  Image = 2,
  // Cta = 3,
  CtaButton = 4,
  MoodTracker = 5,
}

export enum ActionTypeEnum {
  None = 0,
  InternalRout = 1,
  ApiCall = 2,
  NextStep = 3,
  Done = 4,
  HandleByApp = 5,
  ExternalRout = 6,
  ActionList = 7,
  CallPhone = 8,
}

export enum PopupTypeEnum {
  MultiOption = 0,
  Interaction = 1,
  Dialog = 2,
  EditCycle = 3,
  InteractionReward = 4,
  SexTracker = 5,
  ImageTextButton = 6,
  InteractionWithTwoButton = 7,
  RadioImageOption = 8,
  BioRythem = 9,
  TimerInteraction = 10,
}

export enum CyclePhaseEnum {
  PeriodTracker = 0,
  PeriodIntention = 1,
  PeriodPrevention = 2,
  Pregnancy = 3,
  Breastfeeding = 4,
  EditPregnancyCycle = 5,
}

export enum KitTestModuleTypeEnums {
  BabyCheck = 'babyCheck',
  Ovulation = 'ovulation',
}

export enum BabyCheckTypeEnums {
  Analog = 0,
  Digital = 1,
}

export enum DigitalBabyCheckEnum {
  Negative = 0,
  Positive = 1,
}

export enum DayTypeEnums {
  None = 0,
  Period = 1,
  Fertility = 2,
  Ovulation = 4,
  Pms = 8,
  White = 16,
  Pregnancy = 32,
  Breastfeeding = 64,
  SecondaryPregnancy = 128,
  SecondaryBreastfeeding = 256,
  GiveBirth = 512,
  LatePeriod = 1024,
}

export enum CycleLoadingStatusEnum {
  loading = 0,
  loaded = 1,
  successed = 2,
}

import { ActionTypes, WidgetsButtonTypes } from './widgetCommon';
import { BabyCheckTypeEnums, CyclePhaseEnum, WidgetStoryTypeEnum, WidgetsEnum } from './widgetEnums';

type HasEyeIcon = {
  showEyeIcon: true;
  eyeIconColor: string;
};
type NotEyeIcon = {
  showEyeIcon?: false;
};
type EyeIconTypes = HasEyeIcon | NotEyeIcon;

type IsPdfDownloadingTypes = { isPdfDownloading?: boolean };

type PhaseTypes = {
  phase?: CyclePhaseEnum;
};

type SignTypes = { category: number; sign: number };

export type WidgetsTypes = IsPdfDownloadingTypes &
  PhaseTypes &
  (
    | WidgetCycleCardTypes
    | WidgetCirculeCycleCardTypes
    | WidgetMotivationCardTypes
    | WidgetStoryCardTypes
    | WidgetHintCardTypes
    | WidgetHintCard2Types
    | WidgetArticleCardTypes
    | WidgetShortcutWidgetTypes
    | WidgetReportCardTypes
    | WidgetShareExperienceCardTypes
    | WidgetSignCardTypes
    | WidgetClinicCardTypes
    | WidgetClinicCardV2Types
    | WidgetSubscriptionCardTypes
    | WidgetPragnencyBreastfeedingCardTypes
    | WidgetEmptyReportCardTypes
    | WidgetListTypes
    | WidgetRoutinTypes
    | WidgetPredictCardTypes
    | WidgetPeriodReportCardTypes
    | WidgetPeriodCycleHistoryTypes
    | WidgetMostRepeatedSignsTypes
    | WidgetMostRepeatedSignsEmptyTypes
    | WidgetBabyCheckHistoryCardTypes
    | WidgetOvulationHistoryCardTypes
    | WidgetOvulationKitCardTypes
    | WidgetSexTrackerCardTypes
    | WidgetAdvertiseCardListTypes
    | WidgetBabyCheckKitCardTypes
    | WidgetPeriodReportEmptyStateCardTypes
    | WidgetCycleDateCardTypes
    | WidgetMediaTypes
    | WidgetAverageOfcycleLengthsTypes
    | WidgetPregnancyCheckupTypes
    | WidgetBiorhythmTypes
    | WidgetProgramScrollType
    | WidgetWomanPairProgramTypes
    | ManProgramScrollWidgetType
    | ManProgramHealthWidgetType
    | WidgetMenStoryTypes
  );

// # ----------------------------------------------------------

export type WidgetCycleCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.CycleCard;
  data: {
    shortcut: { items: ShortcutItemType[] };
    button: WidgetsButtonTypes[];
    backgroundColour: string;
    forgroundColor: string;
    description: string;
    textColor: string;
    leading: string;
    title: string;
  };
};

// # ----------------------------------------------------------

export type WidgetMotivationCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.MotivationCard;
  data: { description: string; title: string; icon: string };
};

// # ----------------------------------------------------------
export type MoodTrackerItemTypes = { type: number; label: string; isSelected: boolean };

export type StoryImageTypes = {
  type: WidgetStoryTypeEnum.Image;
  url: string;
};
export type StoryVideoTypes = {
  type: WidgetStoryTypeEnum.Video;
  url: string;
};
export type StoryCtaButtonTypes = {
  type: WidgetStoryTypeEnum.CtaButton;
  button: WidgetsButtonTypes;
};
export type StoryMoodTrackerTypes = {
  type: WidgetStoryTypeEnum.MoodTracker;
  items: MoodTrackerItemTypes[];
};
type StoryEventsTypes = StoryImageTypes | StoryVideoTypes | StoryCtaButtonTypes | StoryMoodTrackerTypes;

type StoriesTypes = {
  events: StoryEventsTypes[];
  coverImage: string;
  isViewed: boolean;
  time: number;
  id: string;
};

export type WidgetStoryCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.StoryCard;
  data: {
    backgroundColour: string;
    description: string;
    title: string;
    list: {
      events: StoryEventsTypes[];
      stories: StoriesTypes[];
      isBookmarked: boolean;
      coverImage: string;
      isViewed: boolean;
      text: string;
      time: number;
      id: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetHintCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.HintCard;
  data: {
    minReadingDuration: number;
    backgroundColour: string;
    description: string;
    title: string;
    list: {
      internalLink: null | string;
      externalLink: null | string;
      writerSpeciality: string;
      isBookmarked: boolean;
      writerIcon: string;
      writerName: string;
      isSeen: boolean;
      text: string;
      id: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetHintCard2Types = IsPdfDownloadingTypes &
  PhaseTypes & {
    type: WidgetsEnum.HintCardV2;
    data: {
      backgroundColour: string;
      description: string;
      title: string;
      list: {
        internalLink: null | string;
        externalLink: null | string;
        writerSpeciality: string;
        isBookmarked: boolean;
        writerIcon: string;
        writerName: string;
        isSeen: boolean;
        text: string;
        id: string;
      }[];
    };
  };

// # ----------------------------------------------------------

export type WidgetArticleCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ArticleCard;
  data: {
    backgroundColour: string;
    description: string;
    buttonText: string;
    title: string;
    items: {
      title: string;
      image: string;
      link: string;
    }[];
  };
};

// # ----------------------------------------------------------

type PredictWidgetItemsTypes = EyeIconTypes & {
  backgroundColor: string;
  trailingDown: string;
  trailingUp: string;
  title: string;
  icon: string;
  showMoreInfo: boolean;
};

export type WidgetPredictCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.Predictcard;
  data: {
    backgroundColour: string;
    description: string;
    title: string;
    items: PredictWidgetItemsTypes[];
  };
};

// # ----------------------------------------------------------

export type WidgetReportCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ReportCard;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    buttonText: string;
    title: string;
    list: {
      backgroundColor: string;
      trailing: string;
      title: string;
      icon: string;
      text: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetShareExperienceCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ShareExperienceCard;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    title: string;
    items: {
      shareExperienceId: string;
      approvedProfile: boolean;
      commentCount: number;
      action: ActionTypes[];
      createTime: string;
      likeCount: number;
      disliked: number;
      avatar: string;
      name: string;
      text: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetSignCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.SignCard;
  data: {
    selectedSigns: SignTypes[];
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    signs: SignTypes[];
    title: string;
  };
};

// # ----------------------------------------------------------

export type WidgetClinicCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ClinicCard;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    title: string;
    items: {
      doctorImage: string;
      action: ActionTypes;
      ticketType: number;
      doctorId: string;
      subtitle: string;
      tailing: string;
      title: string;
      image: string;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetClinicCardV2Types = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ClinicCardV2;
  data: {
    backgroundColour: string;
    description: string;
    cta: ActionTypes;
    title: string;
    items: {
      drId: string;
      rate: number;
      image: string;
      badge: string;
      isOnline: boolean;
      doctorName: string;
      speciality: string;
      featureName: string;
      action: ActionTypes;
      reviewsCount: number;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetSubscriptionCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.SubscriptionCard;
  data: {
    headlineButton: WidgetsButtonTypes;
    submitButton: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    title: string;
    package: {
      inAppPurchase: boolean;
      // payButtonText: string;
      realValueText: string;
      discountText: string;
      // specificText: string;
      totalPayText: string;
      // isSpecific: boolean;
      desciption: string;
      // realValue: number;
      valueText: string;
      discount: number;
      totalPay: number;
      isFree: boolean;
      // vatText: string;
      viewId: string;
      value: number;
      code: string;
      text: string;
      unit: string;
      vat: number;
      id: string;
      amount: string;
      isSpecial: boolean;
      markdown: string;
      payBtnText: string;
      specialText: string;
      subTitle: string;
      title: string;
      totalAmount: string;
      totalText: string;
      totalUnit: string;
    };
  };
};

// # ----------------------------------------------------------

type PragnencyBreastfeedingTitlesTypes = EyeIconTypes & {
  icon: string;
  name: string;
  text: string;
  eyeIconColor?: string;
  showEyeIcon?: boolean;
};

export type WidgetPragnencyBreastfeedingCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PragnencyCard | WidgetsEnum.BreastfeedingCard;
  data: {
    trailingIcon: string | null;
    backgroundColour: string;
    description: string;
    trailing: string;
    title: string;
    image: string;
    tiles: PragnencyBreastfeedingTitlesTypes[];
  };
};

// # ----------------------------------------------------------

export type WidgetEmptyReportCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.EmptyReport;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    percent: number;
    title: string;
    image: string;
    days: number;
    text: string;
  };
};

// # ----------------------------------------------------------

export type WidgetListTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.WidgetList;
  data: {
    widgetList: WidgetsTypes[];
  };
};

// # ----------------------------------------------------------

export type WidgetRoutinTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ProgramCard;
  data: {
    title: string;
    writerIcon: string;
    writerName: string;
    description: string;
    backgroundColour?: string;
    writerSpeciality: string;
    button: WidgetsButtonTypes;
  };
};

// # ----------------------------------------------------------

export type WidgetAverageOfcycleLengthsTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.AverageOfcycleLengths;
  data: {
    title: string;
    description: string;
    backgroundColour: string;
    right: {
      title: string;
      length: number;
      description: string;
      filledLength: number;
      centeralText: string;
    };
    left: {
      title: string;
      length: number;
      description: string;
      filledLength: number;
      centeralText: string;
    };
  };
};

// # ----------------------------------------------------------

export type WidgetPeriodReportCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PeriodReportCard;
  data: {
    min: number;
    max: number;
    title: string;
    cycleLength: number;
    description: string;
    periodLength: number;
    backgroundColour: string;
    items: {
      start: string;
      cycleLength: number;
      periodLength: number;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetPeriodCycleHistoryTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PeriodCycleHistory;
  data: {
    title: string;
    items: {
      title: string;
      normal: boolean;
      cycleLength: number;
      ovulationDay: number;
      periodLength: number;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetMostRepeatedSignsTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.MostRepeatedSigns;
  data: {
    title: string;
    guidTitle: string;
    description: string;
    guidDescription: string;
    items: {
      sign: number;
      count: number;
      category: number;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetMostRepeatedSignsEmptyTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.MostRepeatedSignsEmpty;
  data: {
    title: string;
    description: string;
    button: WidgetsButtonTypes;
  };
};

// # ----------------------------------------------------------

export type WidgetBabyCheckHistoryCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.BabyCheckHistoryCard;
  data: {
    icon: string;
    title: string;
    description: string;
    button: WidgetsButtonTypes;
    items: {
      text: string;
      negative: string;
      positive: string;
      details: {
        result: number;
        createTime: string;
        type: BabyCheckTypeEnums;
      }[];
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetOvulationHistoryCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.OvulationHistoryCard;
  data: {
    icon: string;
    title: string;
    description: string;
    button: WidgetsButtonTypes;
    items: {
      text: string;
      negative: string;
      positive: string;
      details: {
        result: number;
        createTime: string;
      }[];
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetOvulationKitCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.OvulationKitCard;
  data: {
    title: string;
    count: number;
    result: number;
    createTime: string;
    description: string;
  };
};

// # ----------------------------------------------------------

export type WidgetSexTrackerCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.SexTrackerCard;
  data: {
    title: string;
    signs: SignTypes[];
    description: string;
  };
};

// # ----------------------------------------------------------

export type WidgetBabyCheckKitCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.BabyCheckKitCard;
  data: {
    title: string;
    description: string;
    items: {
      result: number;
      createTime: string;
      type: BabyCheckTypeEnums;
    }[];
  };
};

// # ----------------------------------------------------------

export type WidgetPeriodReportEmptyStateCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PeriodReportEmptyStateCard;
  data: {
    text: string;
    days: number;
    image: string;
    title: string;
    percent: number;
    description: string;
    button: WidgetsButtonTypes;
  };
};

// # ----------------------------------------------------------

export type WidgetCycleDateCardTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.CycleDateCard;
  data: {
    title: string;
    pmsEnd: number;
    hasPms: boolean;
    pmsStart: number;
    endLabel: string;
    periodEnd: number;
    currentDay: number;
    startLabel: string;
    endPmsLabel: string;
    cycleLength: number;
    description: string;
    periodStart: number;
    endFertility: string;
    fertilityEnd: number;
    ovulationDay: number;
    activeCycle: boolean;
    hasFertility: boolean;
    hasOvulation: boolean;
    startPmsLabel: string;
    endPeriodLabel: string;
    fertilityStart: number;
    startFertility: string;
    ovulationLabel: string;
    currentDayLabel: string;
    startPeriodLable: string;
    backgroundColour: string;
    isInLatePeriod: boolean;
  };
};

// # ----------------------------------------------------------

export type WidgetMediaTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.Media;
  data: {
    url: string;
    width: number;
    height: number;
    action: ActionTypes;
  };
};

// # ----------------------------------------------------------

export type WidgetAdvertiseCardListTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.AdvertiseCardList;
  data: {
    items: { url: string; width: number; height: number; action: ActionTypes }[];
  };
};

// # ----------------------------------------------------------

type WidgetPregnancyCheckupItemTypes = {
  backgroundColor: string;
  description: string;
  icon: string;
  title: string;
  action: ActionTypes;
};

export type WidgetPregnancyCheckupTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.PregnancyCheckup;
  data: {
    button: WidgetsButtonTypes;
    backgroundColour: string;
    description: string;
    title: string;
    items: WidgetPregnancyCheckupItemTypes[];
  };
};

// # ----------------------------------------------------------

export type WidgetCirculeCycleCardTypes = {
  type: WidgetsEnum.CirculeCycleCard;
  data: {
    title: string;
    pmsEnd: number;
    hasPms: boolean;
    leading: string;
    pmsStart: number;
    periodEnd: number;
    textColor: string;
    currentDay: number;
    background: string;
    cycleLength: number;
    description: string;
    periodStart: number;
    showHelper: boolean;
    fertilityEnd: number;
    ovulationDay: number;
    activeCycle: boolean;
    hasFertility: boolean;
    hasOvulation: boolean;
    forgroundColor: string;
    fertilityStart: number;
    backgroundColour: string;
    button: WidgetsButtonTypes[];
    shortcut: { items: ShortcutItemType[] };
  };
};

// # ----------------------------------------------------------

type BiorhythemItem = {
  description: string;
  icon: string;
  title: string;
};

export type WidgetBiorhythmTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.Biorhythm;
  data: {
    backgroundColour: string;
    description: string;
    title: string;
    items: BiorhythemItem[];
  };
};

// # ----------------------------------------------------------

type ProgramScrolltemType = {
  title: string;
  writerIcon: string;
  writerName: string;
  description: string;
  writerSpeciality: string;
  button: WidgetsButtonTypes;
  commentCount: number;
  isBookmarked: boolean;
  rateAvg: number;
  bmiDescription: string;
  bmiTitle: string;
  completeRatio: number;
  completeTitle: string;
  programId: string;
  image: string;
};

export type WidgetProgramScrollType = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ProgramScrollWidget;
  data: {
    backgroundColour: string;
    description: string;
    items: ProgramScrolltemType[];
    title: string;
    button: WidgetsButtonTypes;
  };
};
// # ----------------------------------------------------------
export type ManProgramScrollWidgetType = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ManProgramScrollWidget;
  data: {
    backgroundColour: string;
    description: string;
    items: ProgramScrolltemType[];
    title: string;
    button: WidgetsButtonTypes;
  };
};

// # ----------------------------------------------------------
export type ManProgramHealthWidgetType = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ManProgramHealthWidget;
  data: {
    backgroundColour: string;
    description: string;
    items: ProgramScrolltemType[];
    title: string;
    button: WidgetsButtonTypes;
  };
};

// # ----------------------------------------------------------

type WomanPairProgramItemType = {
  title: string;
  writerIcon: string;
  writerName: string;
  description: string;
  writerSpeciality: string;
  button: WidgetsButtonTypes;
};

export type WidgetWomanPairProgramTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.WomanPairProgram;
  data: {
    items: WomanPairProgramItemType[];
    backgroundColour: string;
    description: string;
    title: string;
  };
};

// # ----------------------------------------------------------

export type ShortcutItemType = {
  semanticTitle: string;
  action: ActionTypes;
  title: string;
  icon: string;
};

export type WidgetShortcutWidgetTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.ShortcutWidget;
  data: {
    backgroundColour: string;
    description: string;
    items: ShortcutItemType[];
    title: string;
  };
};
// # ----------------------------------------------------------
export type WidgetMenStoryTypes = IsPdfDownloadingTypes & {
  type: WidgetsEnum.MenStory;
  data: {
    backgroundColour: string;
    description: string;
    title: string;
    list: {
      events: StoryEventsTypes[];
      stories: StoriesTypes[];
      isBookmarked: boolean;
      coverImage: string;
      isViewed: boolean;
      text: string;
      time: number;
      id: string;
    }[];
  };
};

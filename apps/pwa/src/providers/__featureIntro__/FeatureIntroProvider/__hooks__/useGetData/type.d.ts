import { OnboardingPageEnum } from '../../enum';

export type RewardModalType = {
  title: string;
  description: string;
  btnText: string;
};

export type SlideItemType = {
  title: string;
  description: string;
  media: string;
};

export type OptionItemType = {
  title: string;
  isCorrect: boolean;
};

export type WelcomDataTypes = {
  type: OnboardingPageEnum.Welcome;
  data: {
    title: string;
    description: string;
    primaryImage: string;
    secondaryImage: string;
    backgroundAnimation: string;
    footerContent: string;
    textBtn: string;
    primaryText: string;
  };
};

export type SliderDataType = {
  type: OnboardingPageEnum.Slider;
  data: {
    slides: SlideItemType[];
    textBtn: string;
    initialReward: string;
  };
};

export type QuestionDataType = {
  type: OnboardingPageEnum.Question;
  data: {
    title: string;
    descripition: string;
    successFull: RewardModalType;
    fail: RewardModalType;
    options: OptionItemType[];
    textBtn: string;
  };
};

export type FinalPageDataType = {
  type: OnboardingPageEnum.FinalPage;
  data: {
    title: string;
    description: string;
    media: string;
    textBtn: string;
  };
};

export type OnboardingPageType = WelcomDataTypes | SliderDataType | QuestionDataType | FinalPageDataType;

export type FeatureIntroResponseType = {
  pages: OnboardingPageType[];
};

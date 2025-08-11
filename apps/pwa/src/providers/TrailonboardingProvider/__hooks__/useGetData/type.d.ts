import { OnboardingPageEnum } from '@providers/TrailonboardingProvider/enum';

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
  };
};

export type SliderDataType = {
  type: OnboardingPageEnum.Slider;
  data: {
    items: {
      title: string;
      description: string;
      media: string;
    }[];
    textBtn: string;
  };
};

export type QuestionDataType = {
  type: OnboardingPageEnum.Question;
  data: {
    title: string;
    descripition: string;
    successFull: {
      title: string;
      description: string;
    };
    fail: {
      title: string;
      description: string;
    };
    options: {
      title: string;
      isCorrect: boolean;
    }[];
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

export type TrailonboardingResponseType = {
  pages: OnboardingPageType[];
};

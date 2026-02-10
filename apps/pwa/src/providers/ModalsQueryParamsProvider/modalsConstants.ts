import {
  STORY_MODAL_ID,
  TEST_KITS_BABYCHECK,
  TEST_KITS_LIST_BABYCHECK,
  TEST_KITS_LIST_DELETE,
  TEST_KITS_LIST_OVULATION,
  WIDGET_POPUP,
} from '@repo/core/constants/modal.constants';

// # Naming query params ---> component name + description

export const MODALS = {
  // # pakcages/core
  WIDGET_POPUP,
  STORY_MODAL_ID,
  TEST_KITS_BABYCHECK,
  TEST_KITS_LIST_DELETE,
  TEST_KITS_LIST_BABYCHECK,
  TEST_KITS_LIST_OVULATION,

  // # nameSelector
  NAME_SELECTOR_FILTER_GENDER: 'NAME_SELECTOR_FILTER_GENDER',
  NAME_SELECTOR_FILTER_STYLES: 'NAME_SELECTOR_FILTER_STYLES',

  // # profile
  USER_INFO: 'USER_INFO',
  USER_PERIOD_SETTINGS: 'USER_PERIOD_SETTINGS',

  // # Feedback
  MODAL_FEEDBACK: 'MODAL_FEED_BACK',

  // # Question-onboarding
  ONBOARDING_QUESTION_REWARD: ' ONBOARDING_QUESTION_REWARD',

  // # Question-onboarding

  MODALS_AI_CHAT: 'MODALS_AI_CHAT',
};

export const EXCLUDE_PAGES_MODALS = [
  '/protected/shareExperience',
  //
];

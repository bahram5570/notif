import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

const GOALS_ROUTES: ActivationRoutesInfoTypes = {
  goal_1: {
    questionId: 1,
    noBackButton: true,
    payloadKeys: ['firstName'],
    nextActivationList: {
      condition1: { url: 'goal_2' },
    },
  },
  goal_2: {
    questionId: 2,
    payloadKeys: ['birthDate'],
    nextActivationList: {},
  },
};

const INTENTION_ROUTES: ActivationRoutesInfoTypes = {};

const PREGNANCY_ROUTES: ActivationRoutesInfoTypes = {};

const TRACKER_ROUTES: ActivationRoutesInfoTypes = {};

const PREVENTION_ROUTES: ActivationRoutesInfoTypes = {};

export const ACTIVATION_ROUTES_INFO: ActivationRoutesInfoTypes = {
  ...PREVENTION_ROUTES,
  ...PREGNANCY_ROUTES,
  ...INTENTION_ROUTES,
  ...TRACKER_ROUTES,
  ...GOALS_ROUTES,
};

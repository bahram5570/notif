import { NextStepTypes } from '../../../widgetCommon';

export type PopUpTypes = null | NextStepTypes;

export type PopUpHandlerTypes = (v: PopUpTypes) => void;

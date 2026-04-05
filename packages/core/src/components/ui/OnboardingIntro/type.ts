import { ActionTypes } from '../../../providers/WidgetActionsProvider';

export type WelcomItemType = {
  image: string;
  title: string;
  description: string;
};

export type FinalButtonType = {
  backgroundColor: string;
  foregroundColor: string;
  text: string;
  action: ActionTypes;
};

export type WelcomType = {
  isActive: boolean;
  list: WelcomItemType[];
  finalButton: FinalButtonType;
};

export type ItemType = Pick<WelcomType, 'finalButton' | 'list'>;

export interface OnboardingIntroPropsType extends ItemType {
  submitHandler: () => void;
}

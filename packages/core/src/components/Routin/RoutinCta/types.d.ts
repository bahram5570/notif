import { ActionTypes } from '../../../providers/WidgetActionsProvider';

export interface RoutinCtaPropsType {
  cta: {
    action: ActionTypes;
    ctaBtnLabel: string;
    ctaDescription: string;
  };
}

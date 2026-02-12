import { WidgetSubscriptionCardTypes } from '../../../../providers/WidgetActionsProvider';

export interface WidgetSubscriptionCardProps extends Pick<WidgetSubscriptionCardTypes, 'data'> {}

type HeadlineButtonTypes = Pick<WidgetSubscriptionCardProps, 'data'>['data']['headlineButton'];
export interface WidgetSubscriptionHeadlineBtnProps extends HeadlineButtonTypes {}

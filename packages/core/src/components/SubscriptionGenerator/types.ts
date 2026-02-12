import { WidgetSubscriptionCardTypes } from '../../providers/WidgetActionsProvider';

type ItemsTypes = Pick<WidgetSubscriptionCardTypes, 'data'>['data']['package'];
export interface SubscriptionGeneratorTypes extends ItemsTypes {
  onSelect?: () => void;
  isSelected?: boolean;
}

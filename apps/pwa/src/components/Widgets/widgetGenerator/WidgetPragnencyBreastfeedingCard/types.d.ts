import { WidgetPragnencyBreastfeedingCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetPragnencyBreastfeedingCardProps extends Pick<WidgetPragnencyBreastfeedingCardTypes, 'data'> {}

type ItemsTypes = Pick<WidgetPragnencyBreastfeedingCardProps, 'data'>['data']['tiles'][0];

export type PragnencyBreastfeedingGeneratorProps = ItemsTypes & {};

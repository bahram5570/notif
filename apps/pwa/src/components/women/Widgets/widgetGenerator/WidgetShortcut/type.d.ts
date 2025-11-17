import { ShortcutWidgetTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface ShortcutWidgetCardProps extends Pick<ShortcutWidgetTypes, 'data'> {}
export type ShorcutItemChildTypes = 'first' | 'last' | null;

type ItemType = Pick<ShortcutWidgetCardProps, 'data'>['data']['items'][0];
export interface ShortcutItemPropsType extends ItemType {
  shorcutItemChild?: ShorcutItemChildTypes;
}

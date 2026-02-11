import { ShortcutWidgetCardProps } from '../types';

export type ShorcutItemChildTypes = 'first' | 'last' | null;

type ItemsTypes = Pick<ShortcutWidgetCardProps, 'data'>['data']['items'];
export interface ShortcutItemsProps {
  items: ItemsTypes;
}

type ItemTypes = ItemsTypes[0];
export interface ShortcutItemGeneratorProps extends ItemTypes {
  shorcutItemChild: ShorcutItemChildTypes;
}

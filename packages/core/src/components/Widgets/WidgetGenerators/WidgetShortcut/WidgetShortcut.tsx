'use client';

import { WidgetCardContainer } from '../../WidgetCardContainer';
import ShortcutItems from './ShortcutItems';
import { ShortcutWidgetCardProps } from './types';

export const WidgetShortcut = ({ data }: ShortcutWidgetCardProps) => {
  return (
    <WidgetCardContainer title={data.title}>
      <ShortcutItems items={data.items} />
    </WidgetCardContainer>
  );
};

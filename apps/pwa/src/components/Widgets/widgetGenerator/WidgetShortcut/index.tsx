'use client';

import { WidgetCardContainer } from '@repo/core/components/Widgets/WidgetCardContainer';

import ShortcutItems from './ShortcutItems';
import { ShortcutWidgetCardProps } from './type';

const WidgetShortcut = ({ data }: ShortcutWidgetCardProps) => {
  return (
    <WidgetCardContainer title={data.title}>
      <ShortcutItems items={data.items} />
    </WidgetCardContainer>
  );
};

export default WidgetShortcut;

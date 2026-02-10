import { WidgetCardContainer } from '@repo/core/components/Widgets/WidgetCardContainer';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import WidgetHintCardGenerator from './WidgetHintCardGenerator';
import { WidgetHintCardProps } from './types';

const WidgetHintCard = ({ data }: WidgetHintCardProps) => {
  const { inViewRef } = useAnalytics({ inView_eventName: 'HintWidgetSeenMoreThan5Secs' });

  return (
    <WidgetCardContainer title={data.title} className="px-4 pt-6">
      <div className="w-full flex flex-col items-end gap-3" ref={inViewRef}>
        {data.list.map((item, index) => (
          <WidgetHintCardGenerator
            {...item}
            key={index}
            minReadingDuration={data.minReadingDuration}
            isLastChild={index === data.list.length - 1}
          />
        ))}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetHintCard;

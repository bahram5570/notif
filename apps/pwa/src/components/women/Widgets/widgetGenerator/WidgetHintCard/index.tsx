import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';
import useAnalytics from '@hooks/useAnalytics';

import WidgetHintCardGenerator from './WidgetHintCardGenerator';
import { WidgetHintCardProps } from './types';

const WidgetHintCard = ({ data }: WidgetHintCardProps) => {
  const { inViewRef } = useAnalytics({ inView_eventName: 'HintWidgetSeenMoreThan5Secs' });

  return (
    <WidgetCardContainer title={data.title}>
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

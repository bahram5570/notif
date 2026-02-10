import { WidgetCardContainer } from '@repo/core/components/Widgets/WidgetCardContainer';
import { CustomSlider } from '@repo/core/components/ui/CustomSlider';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import PredictGenerator from './PredictGenerator';
import { WidgetPredictCardProps } from './types';
import { useScrollTrigger } from './useScrollTrigger';

const WIDGET_ID = 'WidgetPredictCard';

const WidgetPredictCard = ({ data }: WidgetPredictCardProps) => {
  const { callEvent } = useAnalytics();

  useScrollTrigger({
    elementId: WIDGET_ID,
    percent: 50,
    onTrigger: () => {
      callEvent('PredictionWidgetScrolled');
    },
  });

  return (
    <WidgetCardContainer title={data.title}>
      <CustomSlider gap={10} id={WIDGET_ID}>
        {data.items.map((item, index) => (
          <PredictGenerator {...item} key={index} />
        ))}
      </CustomSlider>
    </WidgetCardContainer>
  );
};

export default WidgetPredictCard;

import { useAnalytics } from '../../../../hooks/useAnalytics';
import { CustomSlider } from '../../../ui/CustomSlider';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import PredictGenerator from './PredictGenerator';
import { WidgetPredictCardProps } from './types';
import { useScrollTrigger } from './useScrollTrigger';

const WIDGET_ID = 'WidgetPredictCard';

export const WidgetPredictCard = ({ data }: WidgetPredictCardProps) => {
  const { callEvent } = useAnalytics();

  useScrollTrigger({
    percent: 50,
    elementId: WIDGET_ID,
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

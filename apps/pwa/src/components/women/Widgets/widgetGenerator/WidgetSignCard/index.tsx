import { isSelectedFinder } from './__utils__';

import CustomSlider from '@components/ui/CustomSlider';
import Typography from '@components/ui/Typography';
import SignGenerator from '@components/women/SignGenerator';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';
import useAnalytics from '@hooks/useAnalytics';

import { WidgetSignCardProps } from './types';

const WidgetSignCard = ({ data }: WidgetSignCardProps) => {
  const { callEvent } = useAnalytics();
  
  return (
    <WidgetCardContainer title={data.title} button={data.button} onClick={() => callEvent('Action_From_SignCard')}>
      <Typography scale="Body" size="Small">
        {data.description}
      </Typography>

      <CustomSlider gap={40} className="pt-4">
        {data.signs.map((item, index) => {
          const { isSelected } = isSelectedFinder({
            selectedSigns: data.selectedSigns,
            category: item.category,
            sign: item.sign,
          });

          return <SignGenerator {...item} initialIsSelected={isSelected} key={index} />;
        })}
      </CustomSlider>
    </WidgetCardContainer>
  );
};

export default WidgetSignCard;

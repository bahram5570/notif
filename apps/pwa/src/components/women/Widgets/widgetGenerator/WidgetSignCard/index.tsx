import { isSelectedFinder } from './__utils__';

import CustomSlider from '@components/ui/CustomSlider';
import Dark_Typography from '@components/ui/Dark_Typography';
import SignGeneratorOld from '@components/women/SignGenerator-old';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';
import useAnalytics from '@hooks/useAnalytics';

import { WidgetSignCardProps } from './types';

const WidgetSignCard = ({ data }: WidgetSignCardProps) => {
  const { callEvent } = useAnalytics();

  return (
    <WidgetCardContainer
      title={data.title}
      button={data.button}
      classNameBtn="text-impo_White !bg-impo_Pink_500 !border-impo_Pink_500"
      onClick={() => callEvent('Action_From_SignCard')}
    >
      <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        {data.description}
      </Dark_Typography>

      <CustomSlider gap={40} className="pt-4">
        {data.signs.map((item, index) => {
          const { isSelected } = isSelectedFinder({
            selectedSigns: data.selectedSigns,
            category: item.category,
            sign: item.sign,
          });

          return <SignGeneratorOld {...item} initialIsSelected={isSelected} key={index} />;
        })}
      </CustomSlider>
    </WidgetCardContainer>
  );
};

export default WidgetSignCard;

import { isSelectedFinder } from './__utils__';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import { SignGenerator } from '../../../SignGenerator';
import { CustomSlider } from '../../../ui/CustomSlider';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import { WidgetSignCardProps } from './types';

export const WidgetSignCard = ({ data }: WidgetSignCardProps) => {
  const { callEvent } = useAnalytics();

  return (
    <WidgetCardContainer
      title={data.title}
      button={data.button}
      onClick={() => callEvent('Action_From_SignCard')}
      classNameBtn="!text-impo_Neutral_OnSurface !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
    >
      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground ">
        {data.description}
      </CustomTypography>

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

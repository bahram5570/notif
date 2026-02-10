import { isSelectedFinder } from './__utils__';
import { WidgetCardContainer } from '@repo/core/components/Widgets/WidgetCardContainer';
import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import SignGeneratorOld from '@components/SignGenerator-old';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { WidgetSignCardProps } from './types';

const WidgetSignCard = ({ data }: WidgetSignCardProps) => {
  const { callEvent } = useAnalytics();

  return (
    <WidgetCardContainer
      title={data.title}
      button={data.button}
      classNameBtn="!text-impo_Neutral_OnSurface  !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
      onClick={() => callEvent('Action_From_SignCard')}
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

          return <SignGeneratorOld {...item} initialIsSelected={isSelected} key={index} />;
        })}
      </CustomSlider>
    </WidgetCardContainer>
  );
};

export default WidgetSignCard;

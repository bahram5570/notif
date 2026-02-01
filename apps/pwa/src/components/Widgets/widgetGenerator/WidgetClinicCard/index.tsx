import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';
import useAnalytics from '@hooks/useAnalytics';

import ClinicWidgetGenerator from './ClinicWidgetGenerator';
import { WidgetClinicCardProps } from './types';

const WidgetClinicCard = ({ data }: WidgetClinicCardProps) => {
  const { callEvent } = useAnalytics();

  return (
    <WidgetCardContainer
      title={data.title}
      button={data.button}
      onClick={() => callEvent('Action_From_ClinicCard')}
      className="pb-6"
      classNameBtn="!text-impo_Neutral_OnSurface  !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
    >
      <div className="flex flex-col items-end">
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {data.description}
        </CustomTypography>

        <div className="w-full pt-5 flex flex-col gap-6">
          {data.items.map((item, index) => (
            <ClinicWidgetGenerator {...item} key={index} />
          ))}
        </div>
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetClinicCard;

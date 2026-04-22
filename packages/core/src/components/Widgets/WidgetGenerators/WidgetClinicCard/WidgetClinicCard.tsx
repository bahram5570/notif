import { useAnalytics } from '../../../../hooks/useAnalytics';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import ClinicWidgetGenerator from './ClinicWidgetGenerator';
import { WidgetClinicCardProps } from './types';

export const WidgetClinicCard = ({ data }: WidgetClinicCardProps) => {
  const { callEvent } = useAnalytics();

  const isEmpty = data.items.length === 0;

  if (isEmpty) {
    return <></>;
  }

  return (
    <WidgetCardContainer
      className="pb-6"
      title={data.title}
      button={data.button}
      onClick={() => callEvent('Action_From_ClinicCard')}
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

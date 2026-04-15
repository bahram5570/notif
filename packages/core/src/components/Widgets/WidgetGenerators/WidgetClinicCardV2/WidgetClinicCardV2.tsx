import { useAnalytics } from '../../../../hooks/useAnalytics';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import ClinicWidgetGenerator from './ClinicWidgetGenerator';
import { WidgetClinicCardV2Props } from './types';

export const WidgetClinicCardV2 = ({ data }: WidgetClinicCardV2Props) => {
  const { callEvent } = useAnalytics();

  return (
    <WidgetCardContainer
      className="pb-6 bg-green-200"
      title={data.title}
      description={data.description}
      classNameBtn="!text-impo_Neutral_OnSurface !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
    >
      <div className="flex flex-col items-end">
        {/* <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {data.description}
        </CustomTypography>

        <div className="w-full pt-5 flex flex-col gap-6">
          {data.items.map((item, index) => (
            <ClinicWidgetGenerator {...item} key={index} />
          ))}
        </div> */}
      </div>
    </WidgetCardContainer>
  );
};

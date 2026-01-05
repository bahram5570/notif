import Dark_Typography from '@components/ui/Dark_Typography';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';
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
      classNameBtn="dark:text-impo_White text-impo_black bg-impo_Grey_100 border-impo_Grey_100  dark:bg-impo_Neutral_Surface dark:border-impo_Neutral_Surface"
    >
      <div className="flex flex-col items-end">
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {data.description}
        </Dark_Typography>

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

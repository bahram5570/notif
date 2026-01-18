import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';
import useAnalytics from '@hooks/useAnalytics';

import PregnancyCheckupItem from './PregnancyCheckupItem';
import { WidgetPregnancyCheckupPropsTypes } from './type';

const WidgetPregnancyCheckup = ({ data }: WidgetPregnancyCheckupPropsTypes) => {
  const { callEvent } = useAnalytics();

  return (
    <WidgetCardContainer
      title={data.title}
      button={data.button}
      buttonId="CheckupWidgetButton"
      onClick={() => callEvent('CheckupWidgetButton')}
      classNameBtn="!text-impo_Neutral_OnSurface  !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
    >
      <div className="flex flex-col gap-2">
        {data.items.map((item, index) => {
          return <PregnancyCheckupItem {...item} key={index} />;
        })}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetPregnancyCheckup;

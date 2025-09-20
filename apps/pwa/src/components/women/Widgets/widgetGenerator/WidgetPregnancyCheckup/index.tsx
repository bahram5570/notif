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
      onClick={() => callEvent('Action_From_PregnancyCheckup')}
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

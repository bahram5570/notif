import RoutinCard from '@components/__routin__/RoutinCard';
import useAnalytics from '@hooks/useAnalytics';

import WidgetCardContainer from '../../WidgetCardContainer';
import { ProgramScrollPropType } from './type';

const WidgetProgramScroll = ({ data }: ProgramScrollPropType) => {
  const { callEvent } = useAnalytics();
  const hasOOneItem = data.items.length === 1;

  return (
    <WidgetCardContainer
      title={data.title}
      button={data.button}
      onClick={() => callEvent('Action_From_ProgramScrollWidget')}
    >
      <div className="overflow-x-auto overflow-y-hidden  max-w-full flex flex-row-reverse gap-3">
        {data.items.map((item, index) => (
          <div className="flex flex-row w-full" key={index}>
            <RoutinCard data={item} showDescription={false} className={hasOOneItem ? 'w-full' : 'w-80'} />
          </div>
        ))}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetProgramScroll;

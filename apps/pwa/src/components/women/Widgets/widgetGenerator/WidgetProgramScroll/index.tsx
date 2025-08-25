import RoutinCard from '@components/__routin__/RoutinCard';
import useTheme from '@hooks/useTheme';

import WidgetCardContainer from '../../WidgetCardContainer';
import { ProgramScrollPropType } from './type';

const WidgetProgramScroll = ({ data }: ProgramScrollPropType) => {
  const { colors } = useTheme();
  const hasOOneItem = data.items.length === 1;

  return (
    <WidgetCardContainer
      title={data.title}
      button={{
        action: data.items[0].button.action,
        backgroundColor: data.items[0].button.backgroundColor,
        foregroundColor: data.items[0].button.foregroundColor,
        text: data.items[0].button.text,
      }}
    >
      <div className="overflow-x-auto overflow-y-hidden  max-w-full flex flex-row-reverse gap-3">
        {data.items.map((item, index) => (
          <div className="flex flex-row w-full" key={index}>
            <div
              className={`rounded-2xl p-4 ${hasOOneItem ? 'w-full' : 'w-80'}`}
              style={{ backgroundColor: colors.Surface_SurfaceVariant }}
            >
              <RoutinCard data={item} showDescription={false} />
            </div>
          </div>
        ))}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetProgramScroll;

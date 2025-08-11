import useTheme from '@hooks/useTheme';

import WidgetCardContainer from '../../WidgetCardContainer';
import WidgetRoutin from '../WidgetRoutin';
import { ProgramScrollPropType } from './type';

const WidgetProgramScroll = ({ data }: ProgramScrollPropType) => {
  const { colors } = useTheme();
  const hasOOneItem = data.items.length === 1;

  return (
    <WidgetCardContainer title={data.title}>
      <div className="overflow-x-auto overflow-y-hidden  max-w-full flex flex-row-reverse gap-3">
        {data.items.map((item, index) => (
          <div className="flex flex-row w-full" key={index}>
            <div
              className={`rounded-2xl p-4 ${hasOOneItem ? 'w-full' : 'w-80'}`}
              style={{ backgroundColor: colors.Surface_SurfaceVariant }}
            >
              <WidgetRoutin data={item} />
            </div>
          </div>
        ))}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetProgramScroll;

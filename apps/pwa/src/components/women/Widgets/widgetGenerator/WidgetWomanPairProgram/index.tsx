import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import WidgetCardContainer from '../../WidgetCardContainer';
import WomanPairRoutin from './WomanPairRoutin';
import { WomanPairProgramCardPropsPropsType } from './type';

const WidgetWomanPairProgram = ({ data }: WomanPairProgramCardPropsPropsType) => {
  const { colors } = useTheme();

  const hasOOneWidget = data.items.length === 1;

  return (
    <div style={{ maxWidth: MAX_SCREEN_WIDTH - 60 }}>
      <WidgetCardContainer title={data.title}>
        <div className="overflow-x-auto overflow-y-hidden  max-w-full flex flex-row-reverse gap-3">
          {data.items.map((item, index) => (
            <div className="flex flex-row w-full" key={index}>
              <div
                className={`rounded-2xl p-4 ${hasOOneWidget ? 'w-full' : 'w-80'}`}
                style={{ backgroundColor: colors.Surface_SurfaceVariant }}
              >
                <WomanPairRoutin {...item} />
              </div>
            </div>
          ))}
        </div>
      </WidgetCardContainer>
    </div>
  );
};

export default WidgetWomanPairProgram;

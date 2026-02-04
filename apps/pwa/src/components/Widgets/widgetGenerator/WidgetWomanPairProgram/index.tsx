import { CustomSlider } from '@repo/core/components/ui/CustomSlider';

import WidgetCardContainer from '../../WidgetCardContainer';
import WomanPairRoutin from './WomanPairRoutin';
import { WomanPairProgramCardPropsPropsType } from './type';

const WidgetWomanPairProgram = ({ data }: WomanPairProgramCardPropsPropsType) => {
  const hasOOneWidget = data.items.length === 1;

  return (
    <WidgetCardContainer title={data.title} className="!px-0">
      <CustomSlider>
        {data.items.map((item, index) => (
          <div className="flex flex-row w-full" key={index}>
            <div
              className={`rounded-2xl flex flex-col  justify-between bg-impo_Neutral_Surface p-4 ${hasOOneWidget ? 'w-full' : 'w-80'}`}
            >
              <WomanPairRoutin {...item} />
            </div>
          </div>
        ))}
      </CustomSlider>
    </WidgetCardContainer>
  );
};

export default WidgetWomanPairProgram;

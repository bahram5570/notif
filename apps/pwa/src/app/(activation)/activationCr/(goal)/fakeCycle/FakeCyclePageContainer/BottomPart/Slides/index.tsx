import CustomImage from '@components/ui/CustomImage';
import CustomSlider from '@components/ui/CustomSlider';
import Dark_Typography from '@components/ui/Dark_Typography';

import { SlidesProps } from './types';

const Slides = ({ slides }: SlidesProps) => {
  return (
    <div className="w-full">
      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground ml-auto p-6">
        ایمپو چطور می‌تونه کمکت کنه؟
      </Dark_Typography>

      <CustomSlider gap={0}>
        {slides.map((item, index) => (
          <div className="pointer-events-none min-w-[290px] h-[320px] " key={index}>
            <CustomImage src={item} width={'100%'} height={'100%'} objectFit="contain" />
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default Slides;

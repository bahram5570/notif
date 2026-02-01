import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomSlider from '@components/ui/CustomSlider';

import { SlidesProps } from './types';

const Slides = ({ slides }: SlidesProps) => {
  return (
    <div className="w-full">
      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground ml-auto p-6">
        ایمپو چطور می‌تونه کمکت کنه؟
      </CustomTypography>

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

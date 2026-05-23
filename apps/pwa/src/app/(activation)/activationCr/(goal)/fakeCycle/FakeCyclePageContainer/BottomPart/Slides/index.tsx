import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

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
            <CustomImage_NEW src={item} fill={true} className="object-contain" />
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default Slides;

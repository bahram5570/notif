import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

import { QuestionImageGeneratorTypes } from './types';

const QuestionImageGenerator = ({ title, image, isSelected, onClick }: QuestionImageGeneratorTypes) => {
  const { breakPoint } = useSystem();

  return (
    <div onClick={onClick} className="w-[104px] h-fit flex flex-col items-center gap-3 cursor-pointer">
      <div
        className={`relative w-[104px] h-[104px] rounded-full border-[1.5px] overflow-hidden ${isSelected ? 'border-impo_Success_Success' : ' border-impo_Surface_SurfaceVariant'}`}
      >
        <CustomImage src={image} alt="" fill={true} className="object-contain mt-2" />
      </div>

      <CustomTypography
        fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Small'}
        className={`${isSelected ? '!text-impo_Success_Success' : '!text-impo_Black'}`}
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default QuestionImageGenerator;

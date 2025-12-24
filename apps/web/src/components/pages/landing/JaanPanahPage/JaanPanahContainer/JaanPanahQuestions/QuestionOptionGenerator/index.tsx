import TickIcon from '@assets/icons/tick.svg';

import CustomTypography from '@components/ui/CustomTypography';

import { QuestionOptionGeneratorTypes } from './types';

const QuestionOptionGenerator = ({ title, isSelected, onClick }: QuestionOptionGeneratorTypes) => {
  return (
    <div
      onClick={onClick}
      className={`
                  w-full 
                  h-12 
                  rounded-xl 
                  flex 
                  items-center 
                  gap-4 
                  px-5 
                  cursor-pointer 
                  ${isSelected ? 'bg-impo_Success_Success' : 'bg-impo_Surface_SurfaceVariant'}
                `}
    >
      <TickIcon className={`w-4 h-auto ${isSelected ? '!fill-impo_White' : '!fill-impo_Transparent'}`} />

      <CustomTypography fontSize="Body_Large" className={`${isSelected ? '!text-impo_White' : '!text-impo_Black'}`}>
        {title}
      </CustomTypography>
    </div>
  );
};

export default QuestionOptionGenerator;

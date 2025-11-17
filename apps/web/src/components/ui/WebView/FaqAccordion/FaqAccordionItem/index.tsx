import { useState } from 'react';

import ArrowLeftIcon from '@assets/icons/arrowLeft.svg';

import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { FaqAccordionItemPropsType } from './type';

const FaqAccordionItem = ({ question, answer, index }: FaqAccordionItemPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);
  const questionIndex = index + 1;

  return (
    <div className="w-full ">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between text-right w-full py-3 gap-1">
        <CustomTypography fontSize="Lable_Medium">{`${questionIndex}. ${question}`}</CustomTypography>

        <div className="w-6 h-6 ">
          <ArrowLeftIcon
            className={`w-6 h-auto transform transition-transform duration-300 ${isOpen ? 'rotate-[-90deg]' : ''}`}
            style={{ stroke: COLORS_LIST.Surface_OutlineVariant }}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 px-1 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <CustomTypography fontSize="Body_Small" className="pb-4">
          <CustomTypography fontSize="Lable_Large" color="Primary_Primary" className="inline" tagType="span">
            پاسخ:
          </CustomTypography>
          {answer}
        </CustomTypography>
      </div>
    </div>
  );
};

export default FaqAccordionItem;

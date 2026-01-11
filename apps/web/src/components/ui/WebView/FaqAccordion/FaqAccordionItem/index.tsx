import { useState } from 'react';

import ArrowLeftIcon from '@assets/icons/arrowLeft.svg';
import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import CustomTypography from '@components/ui/CustomTypography';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { FaqAccordionItemPropsType } from './type';

const FaqAccordionItem = ({ question, answer, index }: FaqAccordionItemPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem, isWeb: true });
  const typographyFontStyles1 = typographyFontStylesMaker({ fontSize: 'Lable_Large', operatingSystem, isWeb: true });
  const questionIndex = index + 1;

  return (
    <div className="w-full ">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between text-right w-full py-3 gap-1">
        <CustomTypography fontSize="Lable_Medium">{`${questionIndex}. ${question}`}</CustomTypography>

        <div className="w-6 h-6 ">
          <ArrowLeftIcon
            className={`w-6 h-auto transform transition-transform duration-300 !stroke-impo_Grey_400 ${isOpen ? 'rotate-[-90deg]' : ''}`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 px-1 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p style={{ ...typographyFontStyles }} className="pb-4">
          <span style={{ ...typographyFontStyles1 }} className="inline !text-impo_Pink_500">
            پاسخ:
          </span>
          {toPersianNumbers(answer)}
        </p>
      </div>
    </div>
  );
};

export default FaqAccordionItem;

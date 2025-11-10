'use client';

import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import FaqAccordionItem from './FaqAccordionItem';
import { FaqAccordionPropsType } from './type';

const FaqAccordion = ({ faqList, title }: FaqAccordionPropsType) => {
  return (
    <div className="rounded-xl py-4 px-3 divide-y-[1px] " style={{ backgroundColor: COLORS_LIST.Neutral_Background }}>
      <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground">
        {title}
      </CustomTypography>

      <div className="  mt-4 ">
        {faqList.map((faq, index) => {
          return (
            <FaqAccordionItem key={index} answer={faq.answer} question={faq.question} index={index}></FaqAccordionItem>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;

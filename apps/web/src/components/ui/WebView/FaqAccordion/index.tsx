'use client';

import CustomTypography from '@components/ui/CustomTypography';

import FaqAccordionItem from './FaqAccordionItem';
import { FaqAccordionPropsType } from './type';

const FaqAccordion = ({ faqList, title }: FaqAccordionPropsType) => {
  return (
    <div className="rounded-xl py-6 px-4 divide-y-[1px] ">
      <CustomTypography fontSize="Lable_Large">{title}</CustomTypography>

      <div className="mt-4 ">
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

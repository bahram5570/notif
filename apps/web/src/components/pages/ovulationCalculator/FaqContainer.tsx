'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ArticleIdFaq from '../articleId/ArticleIdPageContainer/ArticleIdFaq';
import { FaqTypes } from './types';

const FaqContainer = ({ faqList }: { faqList: FaqTypes }) => {
  return (
    <div className="mb-10">
      <CustomTypography fontSize="Title_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground my-4">
        سوالات متداول
      </CustomTypography>
      <ArticleIdFaq faqs={faqList} />
    </div>
  );
};

export default FaqContainer;

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ArticleIdNewTitleGeneratorTypes } from './types';

const ArticleIdNewTitleGenerator = ({ title, hasStar }: ArticleIdNewTitleGeneratorTypes) => {
  return (
    <div className="flex items-center gap-1 pb-2">
      <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_Outline">
        {title}
      </CustomTypography>

      {hasStar && <div className="text-impo_Red_500">*</div>}
    </div>
  );
};

export default ArticleIdNewTitleGenerator;

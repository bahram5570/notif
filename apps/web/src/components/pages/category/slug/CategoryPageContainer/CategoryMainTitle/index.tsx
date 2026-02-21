import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

import { CategoryMainTitleTypes } from './types';

const CategoryMainTitle = ({ title }: CategoryMainTitleTypes) => {
  return (
    <div className="w-full pb-16">
      {/* <CustomTypography tagType="h1" fontSize="Headline_Medium">{`مقالات مربوط به ${title}`}</CustomTypography> */}
      <CustomTypography
        tagType="h3"
        fontSize="Headline_Small"
        className="!text-impo_Neutral_OnBackground"
      >{`مقالات مربوط به ${title}`}</CustomTypography>
    </div>
  );
};

export default CategoryMainTitle;

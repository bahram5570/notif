import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ArticleItem from './ArticleItem';
import { ArticleListPropsType } from './type';

const ArticleList = ({ items }: ArticleListPropsType) => {
  return (
    <div className="flex flex-col justify-end items-end pt-6">
      <CustomTypography fontSize="Lable_LargeProminet" className="!text-impo_Neutral_OnBackground mb-3">
        مقالات امروز
      </CustomTypography>
      <CustomSlider>
        {items.map((item, index) => {
          return <ArticleItem {...item} key={index} />;
        })}
      </CustomSlider>
    </div>
  );
};

export default ArticleList;

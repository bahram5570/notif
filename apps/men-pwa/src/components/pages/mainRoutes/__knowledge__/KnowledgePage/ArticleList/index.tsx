import { CustomSlider } from '@repo/core/components/ui/CustomSlider';

import ArticleItem from './ArticleItem';
import { ArticleListPropsType } from './type';

const ArticleList = ({ items }: ArticleListPropsType) => {
  return (
    <CustomSlider>
      {items.map((item, index) => {
        return <ArticleItem {...item} key={index} />;
      })}
    </CustomSlider>
  );
};

export default ArticleList;

import { externalLink } from '../../../../utils/navigation';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import ArticleGenerator from './ArticleGenerator';
import { WidgetArticleCardProps } from './types';

export const WidgetArticleCard = ({ data }: WidgetArticleCardProps) => {
  const { callEvent } = useAnalytics();

  const clickHandler = () => {
    callEvent('Article');
    externalLink('https://impo.app/blogs', true);
  };

  const titleElement = (
    <div className="w-fit py-2 px-6 rounded-full bg-impo_Neutral_Surface" onClick={clickHandler}>
      <CustomTypography fontSize="Lable_Medium" className="!text-impo_Neutral_OnBackground">
        مشاهده همه
      </CustomTypography>
    </div>
  );

  return (
    <WidgetCardContainer title={data.title} titleElement={titleElement}>
      <div className="flex flex-col gap-4">
        {data.items.map((item, index) => (
          <ArticleGenerator image={item.image} link={item.link} title={item.title} key={index} />
        ))}
      </div>
    </WidgetCardContainer>
  );
};

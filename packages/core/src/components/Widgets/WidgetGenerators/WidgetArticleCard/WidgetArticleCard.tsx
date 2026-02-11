import { externalLink } from '../../../../utils/navigation';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import { CustomButton } from '../../../ui/CustomButton';
import { CustomSlider } from '../../../ui/CustomSlider';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import ArticleGenerator from './ArticleGenerator';
import { WidgetArticleCardProps } from './types';

export const WidgetArticleCard = ({ data }: WidgetArticleCardProps) => {
  const { callEvent } = useAnalytics();

  const clickHandler = () => {
    callEvent('Article');
    externalLink('https://impo.app/blogs', true);
  };

  return (
    <WidgetCardContainer title={data.title}>
      <div className="pb-4">
        <CustomSlider>
          {data.items.map((item, index) => (
            <ArticleGenerator image={item.image} link={item.link} title={item.title} key={index} />
          ))}
        </CustomSlider>
      </div>

      <CustomButton
        className="!text-impo_Neutral_OnSurface  !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
        onClick={clickHandler}
        fontSize="Lable_Large"
      >
        {data.buttonText}
      </CustomButton>
    </WidgetCardContainer>
  );
};

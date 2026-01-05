import { externalLink } from '@utils/navigation';

import Button from '@components/ui/Button';
import CustomSlider from '@components/ui/CustomSlider';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';
import useAnalytics from '@hooks/useAnalytics';

import ArticleGenerator from './ArticleGenerator';
import { WidgetArticleCardProps } from './types';

const WidgetArticleCard = ({ data }: WidgetArticleCardProps) => {
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

      <Button
        variant="fill"
        size="medium"
        color="FREE-STYLES"
        buttonColor=""
        contentsColor=""
        className="dark:text-impo_White text-impo_black bg-impo_Grey_100 border-impo_Grey_100  dark:bg-impo_Neutral_Surface dark:border-impo_Neutral_Surface"
        onClick={clickHandler}
      >
        {data.buttonText}
      </Button>
    </WidgetCardContainer>
  );
};

export default WidgetArticleCard;

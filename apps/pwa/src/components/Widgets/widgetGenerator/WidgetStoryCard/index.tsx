import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import StoryItemGenerator from './StoryItemGenerator';
import StoryPreview from './StoryPreview';
import useStoryCardData from './__hooks__/useStoryCardData';
import { WidgetStoryCardProps } from './types';

const WidgetStoryCard = ({ data: originalStoryData }: WidgetStoryCardProps) => {
  const { data } = useStoryCardData(originalStoryData);

  if (!data) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-end pt-6">
      <CustomTypography fontSize="Title_Small" className="mb-3 px-4 text-impo_Neutral_OnBackground">
        {data.title || 'راهنمای امروز'}
      </CustomTypography>

      <CustomSlider sidePadding={16} className="items-start !px-2">
        {data.list.map((item, index) => (
          <StoryItemGenerator
            coverImage={item.coverImage}
            isViewed={item.isViewed}
            text={item.text}
            id={item.id}
            key={index}
          />
        ))}
      </CustomSlider>

      <StoryPreview list={data.list} />
    </div>
  );
};

export default WidgetStoryCard;

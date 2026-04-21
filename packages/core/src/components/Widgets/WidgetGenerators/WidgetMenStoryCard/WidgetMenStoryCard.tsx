import { CustomSlider } from '../../../ui/CustomSlider';
import { StoryItemGenerator } from './StoryItemGenerator';
import { StoryPreview } from './StoryPreview';
import useStoryCardData from './__hooks__/useStoryCardData';
import { WidgetStoryCardProps } from './types';

export const WidgetMenStoryCard = ({ data: originalStoryData }: WidgetStoryCardProps) => {
  const { data } = useStoryCardData(originalStoryData);

  if (!data) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-end pr-4 pl-1">
      <CustomSlider sidePadding={0} className="items-start">
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

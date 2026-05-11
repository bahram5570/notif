import { shareExperienceTopicQueryMaker } from '../../../utils/shareExperience';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '../../../hooks/useShareExperienceHandlers/useShareExperienceHandlers';
import { CustomImage } from '../../ui/CustomImage';
import { CustomSlider } from '../../ui/CustomSlider';
import { CustomTypography } from '../../ui/CustomTypography';
import { TopicsSliderProps } from './type';

export const TopicsSlider = ({ topics }: TopicsSliderProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceHandlers();

  const clickHandler = (id: string) => {
    pageNavigationHandler({ id, showProgressBar: true });

    const { queryKey, queryValue } = shareExperienceTopicQueryMaker(id);
    newQueryParamsHandler({ [queryKey]: queryValue });
    increaseZIndex(queryKey, id);
  };

  return (
    <CustomSlider gap={16} sidePadding={16}>
      <>
        {topics.map((item, index) => {
          return (
            <div key={index} onClick={() => clickHandler(item.id)}>
              <div className="flex flex-col gap-2 justify-center items-center">
                <CustomImage src={item.image} width={64} height={64} className=" rounded-full" />

                <CustomTypography
                  fontSize="Lable_Small"
                  className="text-impo_Neutral_OnBackground !whitespace-nowrap overflow-hidden"
                >
                  {item.name}
                </CustomTypography>
              </div>
            </div>
          );
        })}
      </>
    </CustomSlider>
  );
};

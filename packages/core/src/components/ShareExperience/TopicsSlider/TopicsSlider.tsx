import { shareExperienceTopicQueryMaker } from '../../../utils/shareExperience';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '../../../hooks/useShareExperienceHandlers/useShareExperienceHandlers';
import { CustomImage_NEW } from '../../ui/CustomImage_NEW';
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
                <div className="w-16 h-16 max-w-16 max-h-16 rounded-full">
                  <CustomImage_NEW src={item.image} fill className="rounded-full" />
                </div>

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

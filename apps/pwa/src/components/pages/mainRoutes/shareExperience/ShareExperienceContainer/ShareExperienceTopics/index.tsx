import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { shareExperienceTopicQueryMaker } from '@utils/shareExperience';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceTopicsProps } from './type';

const ShareExperienceTopics = ({ topics }: ShareExperienceTopicsProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useOverlayIndex();

  const clickHandler = (id: string) => {
    pageNavigationHandler({ id, showProgressBar: true });

    const { queryKey, queryValue } = shareExperienceTopicQueryMaker(id);
    newQueryParamsHandler({ [queryKey]: queryValue });
    increaseZIndex(queryKey, id);
  };

  return (
    <div className="flex flex-col gap-4 items-end " style={{ paddingTop: HEADER_HEIGHT + 10 }}>
      <CustomTypography fontSize="Lable_Large" className="px-3 text-impo_Neutral_OnBackground">
        تالار تجربه
      </CustomTypography>

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
    </div>
  );
};

export default ShareExperienceTopics;

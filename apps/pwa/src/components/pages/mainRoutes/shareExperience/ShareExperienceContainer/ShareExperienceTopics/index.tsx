import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { shareExperienceTopicQueryMaker } from '@utils/shareExperience';

import CustomImage from '@components/ui/CustomImage';
import CustomSlider from '@components/ui/CustomSlider';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { ShareExperienceTopicsProps } from './type';

const ShareExperienceTopics = ({ topics }: ShareExperienceTopicsProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const clickHandler = (id: string) => {
    pageNavigationHandler({ id, showProgressBar: true });

    const { queryKey, queryValue } = shareExperienceTopicQueryMaker(id);
    newQueryParamsHandler({ [queryKey]: queryValue });
  };

  return (
    <div className="flex flex-col gap-4 items-end ">
      <CustomTypography fontSize="Lable_Large" className="px-3 text-impo_Neutral_OnBackground">
        تالار تجربه
      </CustomTypography>

      <CustomSlider gap={12} sidePadding={16}>
        <>
          {topics.map((item, index) => {
            return (
              <div key={index} onClick={() => clickHandler(item.id)}>
                <div className="relative">
                  <CustomImage src={item.image} width={130} height={140} />

                  <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center py-2 px-2">
                    <CustomTypography fontSize="Body_Small" className="text-impo_White">
                      {item.name}
                    </CustomTypography>
                  </div>
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

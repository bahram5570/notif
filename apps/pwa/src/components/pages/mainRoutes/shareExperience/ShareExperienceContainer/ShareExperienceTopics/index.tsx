import { shareExperienceTopicQueryMaker } from '@utils/shareExperience';

import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import CustomImage from '@components/ui/CustomImage';
import CustomSlider from '@components/ui/CustomSlider';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
    <div className="flex flex-col gap-4 items-end " style={{ paddingTop: HEADER_HEIGHT + 10 }}>
      <Dark_Typography fontSize="Lable_Large" className="px-3 text-impo_Neutral_OnBackground">
        تالار تجربه
      </Dark_Typography>

      <CustomSlider gap={12} sidePadding={16}>
        <>
          {topics.map((item, index) => {
            return (
              <div key={index} onClick={() => clickHandler(item.id)}>
                <div className="relative">
                  <CustomImage src={item.image} width={130} height={140} />

                  <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center py-2 px-2">
                    <Dark_Typography fontSize="Body_Small" className="text-impo_White">
                      {item.name}
                    </Dark_Typography>
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

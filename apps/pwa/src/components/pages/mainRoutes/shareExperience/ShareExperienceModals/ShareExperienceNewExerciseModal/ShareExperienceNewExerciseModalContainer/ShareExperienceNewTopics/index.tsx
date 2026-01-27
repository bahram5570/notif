import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import { SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import CustomModal from '@components/ui/CustomModal';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceNewTopicsGenerator from './ShareExperienceNewTopicsGenerator';
import { ShareExperienceNewTopicsProps } from './types';

const ShareExperienceNewTopics = ({
  isSubmitLoading,
  topicIdHandler,
  submitHandler,
  topicsData,
  isLoading,
  topicId,
}: ShareExperienceNewTopicsProps) => {
  const { callEvent } = useAnalytics();
  const { getQueryParams } = useQueryParamsHandler();
  const isOpen = getQueryParams(SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME) !== null;
  useOverflowHandler(isOpen);

  const clickHandler = () => {
    submitHandler();
    callEvent('Share_Experience');
  };

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        isSlidingMode={true}
        className="overflow-y-auto !pb-0"
        isFullScreen={true}
        zIndex={78}
      >
        <MainPageLayout
          rightElement="BackButton"
          rightElementScript="انتخاب تالار"
          paddingTop={0}
          className=" relative"
        >
          <div className="flex flex-col h-[calc(100dvh_-_48px)]" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
            {isLoading && (
              <div className="w-full flex justify-center">
                <Dark_Spinner className="border-impo_Neutral_OnBackground" />
              </div>
            )}

            {!isLoading && topicsData && (
              <>
                <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground pb-6 ml-auto">
                  این تجربه مربوط به کدوم تالاره؟
                </Dark_Typography>

                {topicsData.map((item, index) => (
                  <ShareExperienceNewTopicsGenerator
                    key={index}
                    name={item.name}
                    image={item.image}
                    isFirstIndex={index === 0}
                    isSelected={item.id === topicId}
                    onSelect={() => topicIdHandler(item.id)}
                  />
                ))}

                <div className="sticky bottom-0 left-0 right-0 top-0 mx-auto w-full mt-auto px-4 py-6 bg-impo_Neutral_Background z-[1000]">
                  <Dark_Button
                    onClick={clickHandler}
                    isLoading={isSubmitLoading}
                    isDisable={topicId === null}
                    fontSize="Lable_Large"
                  >
                    ثبت تجربه
                  </Dark_Button>
                </div>
              </>
            )}
          </div>
        </MainPageLayout>
      </CustomModal>
    </>
  );
};

export default ShareExperienceNewTopics;

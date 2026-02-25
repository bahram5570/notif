import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceNewTopicsGenerator from './ShareExperienceNewTopicsGenerator';
import { ShareExperienceNewTopicsProps } from './types';

const ShareExperienceNewTopics = ({
  isSubmitLoading,
  topicIdHandler,
  submitHandler,
  topicsData,

  topicId,
}: ShareExperienceNewTopicsProps) => {
  const { callEvent } = useAnalytics();
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();
  const isOpen = getQueryParams(SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME) !== null;
  useOverflowHandler(isOpen);

  const clickHandler = () => {
    submitHandler();
    callEvent('Share_Experience');
  };

  const zIndex = getZIndex(SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME);

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        isSlidingMode={true}
        className="overflow-y-auto !pb-0"
        isFullScreen={true}
        zIndex={zIndex}
      >
        <MainPageLayout
          rightElement="BackButton"
          rightElementScript="انتخاب تالار"
          paddingTop={0}
          className=" relative"
        >
          <div className="flex flex-col h-[calc(100dvh_-_48px)]" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
            {topicsData && (
              <>
                <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground pb-6 ml-auto">
                  این تجربه مربوط به کدوم تالاره؟
                </CustomTypography>

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
                  <CustomButton
                    onClick={clickHandler}
                    isLoading={isSubmitLoading}
                    isDisable={topicId === null}
                    fontSize="Lable_Large"
                  >
                    ثبت تجربه
                  </CustomButton>
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

import { CustomBackButton } from '@repo/core/components/ui/CustomBackButton';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import { ShareExperienceTopicModalContainerLayoutPropsTypes } from './type';

const ShareExperienceTopicModalContainerLayout = ({
  children,
  coverImage,
  scrolled,
  topicName,
  isLoading,
  bio,
  markerRef,
  scrollRef,
}: ShareExperienceTopicModalContainerLayoutPropsTypes) => {
  return (
    <div className="h-screen overflow-hidden">
      <div ref={scrollRef} className="h-full overflow-y-auto">
        {!isLoading && (
          <div className="relative w-full">
            {coverImage && (
              <div className="relative w-full aspect-square">
                <CustomImage_NEW src={coverImage} className="w-full object-cover" fill />
              </div>
            )}

            <div className="absolute bottom-4 right-4">
              <CustomTypography fontSize="Title_Medium" className="text-impo_White">
                {topicName}
              </CustomTypography>

              {bio && (
                <CustomTypography fontSize="Body_Large" className="text-impo_White">
                  {bio}
                </CustomTypography>
              )}
            </div>
          </div>
        )}

        <div ref={markerRef} className="h-px w-full" />

        <div
          className={`
            fixed  top-0 z-20 p-4 flex justify-end
            transition-colors duration-300
            mx-auto
            w-full
            ${scrolled ? 'bg-impo_Neutral_Background' : 'bg-transparent'}
          `}
          style={{ maxWidth: MAX_SCREEN_WIDTH }}
        >
          <CustomBackButton color="outline" />
        </div>

        {children}
      </div>
    </div>
  );
};

export default ShareExperienceTopicModalContainerLayout;

import CustomImage from '@components/ui/CustomImage';
import Dark_BackButton from '@components/ui/Dark_BackButton';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

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
            {coverImage && <CustomImage src={coverImage} className="w-full object-cover" />}

            <div className="absolute bottom-4 right-4">
              <Dark_Typography fontSize="Title_Medium" className="text-impo_White">
                {topicName}
              </Dark_Typography>

              {bio && (
                <Dark_Typography fontSize="Body_Large" className="text-impo_White">
                  {bio}
                </Dark_Typography>
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
          <Dark_BackButton color="outline" />
        </div>

        {children}
      </div>
    </div>
  );
};

export default ShareExperienceTopicModalContainerLayout;

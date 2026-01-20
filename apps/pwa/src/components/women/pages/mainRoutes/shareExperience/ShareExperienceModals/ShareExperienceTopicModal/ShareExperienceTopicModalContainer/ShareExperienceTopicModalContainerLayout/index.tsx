import CustomImage from '@components/ui/CustomImage';
import Dark_BackButton from '@components/ui/Dark_BackButton';
import Dark_Typography from '@components/ui/Dark_Typography';

import { ShareExperienceTopicModalContainerLayoutPropsTypes } from './type';

const ShareExperienceTopicModalContainerLayout = ({
  children,
  coverImage = '',
  scrolled,
  topicName = '',
  isLoading,
  bio = '',
}: ShareExperienceTopicModalContainerLayoutPropsTypes) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`
                    absolute 
                    top-0 
                    left-0 
                    w-full 
                    h-full 
                    transition-opacity 
                    duration-500 
                    ${scrolled ? 'opacity-0' : 'opacity-100'}
                  `}
      >
        <div className="relative ">
          {!isLoading && (
            <>
              <CustomImage src={coverImage} className="w-full h-full object-cover" />

              <div className="absolute bottom-0 left-0 right-0 flex justify-end items-center py-4 px-4">
                {!scrolled && (
                  <div className="flex flex-col justify-end items-end">
                    <Dark_Typography fontSize="Title_Medium" className="text-impo_White z-10">
                      {topicName}
                    </Dark_Typography>
                    {bio && (
                      <Dark_Typography fontSize="Body_Large" className="text-impo_White z-10">
                        {bio}
                      </Dark_Typography>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="relative z-10">
        <div
          className={`
                      sticky 
                      flex 
                      justify-end 
                      items-center 
                      top-0 
                      z-20 
                      p-4 
                      transition-all 
                      duration-300 
                      ease-in-out
                      ${scrolled ? 'bg-impo_Neutral_Background' : 'bg-impo_Transparent'}
                    `}
        >
          <Dark_BackButton color="surface" />
        </div>

        {children}
      </div>
    </div>
  );
};

export default ShareExperienceTopicModalContainerLayout;

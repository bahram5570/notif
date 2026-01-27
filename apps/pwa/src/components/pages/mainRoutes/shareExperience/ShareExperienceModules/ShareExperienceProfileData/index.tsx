import ShareExperienceBottomPart from '../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceBottomPart';
import ShareExperienceTopPart from '../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import ShareExperenceProfileTabListEmpty from '../../ShareExperienceModals/ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperenceProfileTabListEmpty';
import ShareExperienceContentsModule from '../ShareExperienceContentsModule';
import { ShareExperienceProfileDataPropsType } from './type';

const ShareExperienceProfileData = ({ isSelf, experienceDataList, isLoading }: ShareExperienceProfileDataPropsType) => {
  const hasData = experienceDataList && experienceDataList.length > 0;

  return (
    <>
      {!hasData && !isLoading && <ShareExperenceProfileTabListEmpty />}
      {hasData && (
        <div className="flex flex-col p-4">
          {experienceDataList.map((item) => {
            return (
              <div key={item.id} className="w-full border-b-[1px] border-b-impo_Neutral_Surface pt-5 pb-4 z-0">
                <ShareExperienceTopPart {...item} selfExperience={isSelf} />

                <div className="w-full pr-10">
                  <ShareExperienceContentsModule
                    isSelf={false}
                    image={item.image}
                    text={item.text}
                    hasLinkTo={true}
                    id={item.id}
                  />

                  <ShareExperienceBottomPart {...item} selfExperience={item.selfExperience} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShareExperienceProfileData;

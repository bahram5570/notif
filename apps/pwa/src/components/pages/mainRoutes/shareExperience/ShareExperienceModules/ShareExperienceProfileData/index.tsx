import ShareExperenceProfileTabListEmpty from '../../ShareExperienceModals/ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperenceProfileTabListEmpty';
import ShareExperiencePostCardModules from '../ShareExperiencePostCardModules';
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
              <ShareExperiencePostCardModules
                {...item}
                key={item.id}
                isSelf={isSelf}
                className="border-b-[1px] border-b-impo_Neutral_Surface z-0"
                type="activitiesExperienceType"
                shareId={item.id}
                hasLinkTo
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShareExperienceProfileData;

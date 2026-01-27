import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import ShareExperienceProfileData from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceProfileData';
import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@components/pages/mainRoutes/shareExperience/constants';

import useSelfExperienceData from './__hooks__/useSelfExperienceData';
import { ShareExperienceProfileSelfListPropsType } from './type';

const ShareExperienceProfileSelfList = ({ id, isSelf }: ShareExperienceProfileSelfListPropsType) => {
  const { selfExperienceData, isLoading, pageNo, updatePageNo } = useSelfExperienceData({ id, isSelf });

  return (
    <>
      <InfiniteScrollContainer
        isLoading={isLoading}
        pageSize={EXPERIENCES_PROFILE_PAGE_SIZE}
        totalCount={selfExperienceData?.totalCount || 0}
        pageNo={pageNo}
        callBack={updatePageNo}
      >
        <ShareExperienceProfileData
          experienceDataList={selfExperienceData?.list}
          isSelf={isSelf}
          isLoading={isLoading}
        />
      </InfiniteScrollContainer>
    </>
  );
};

export default ShareExperienceProfileSelfList;

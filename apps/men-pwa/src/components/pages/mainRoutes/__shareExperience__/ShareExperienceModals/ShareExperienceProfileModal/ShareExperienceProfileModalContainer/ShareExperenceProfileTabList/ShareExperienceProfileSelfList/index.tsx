import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@repo/core/components/ShareExperience';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import ShareExperiencePostCardModules from '@components/pages/mainRoutes/__shareExperience__/ShareExperienceModules/ShareExperiencePostCardModules';

import ShareExperenceProfileTabListEmpty from '../ShareExperenceProfileTabListEmpty';
import useSelfExperienceData from './__hooks__/useSelfExperienceData';
import { ShareExperienceProfileSelfListPropsType } from './type';

const ShareExperienceProfileSelfList = ({ id, isSelf }: ShareExperienceProfileSelfListPropsType) => {
  const { selfExperienceData, isLoading, pageNo, updatePageNo } = useSelfExperienceData({ id, isSelf });
  const hasData = selfExperienceData && selfExperienceData.list.length > 0;
  return (
    <>
      <InfiniteScrollContainer
        isLoading={isLoading}
        pageSize={EXPERIENCES_PROFILE_PAGE_SIZE}
        totalCount={selfExperienceData?.totalCount || 0}
        pageNo={pageNo}
        callBack={updatePageNo}
      >
        {!hasData && !isLoading && <ShareExperenceProfileTabListEmpty />}
        {hasData && (
          <div className="flex flex-col p-4">
            {selfExperienceData.list.map((item) => {
              return (
                <ShareExperiencePostCardModules
                  {...item}
                  key={item.id}
                  isSelf={isSelf}
                  className="border-b-[1px] border-b-impo_Neutral_Surface z-0"
                  type="selfExperienceType"
                  shareId={item.id}
                  hasLinkTo
                />
              );
            })}
          </div>
        )}
      </InfiniteScrollContainer>
    </>
  );
};

export default ShareExperienceProfileSelfList;

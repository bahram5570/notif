import { useRef } from 'react';

import { InfiniteList } from '@repo/core/components/InfiniteList';
import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@repo/core/components/ShareExperience';

import ShareExperiencePostCardModules from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperiencePostCardModules';

import ShareExperenceProfileTabListEmpty from '../ShareExperenceProfileTabListEmpty';
import useActivitiesData from './__hooks__/useActivitiesData';
import { ShareExperienceProfileActivitiesPropsType } from './type';

const ShareExperienceProfileActivities = ({ id, isSelf }: ShareExperienceProfileActivitiesPropsType) => {
  const { selfExperienceData, isLoading, pageNo, updatePageNo } = useActivitiesData({ id });
  const hasData = selfExperienceData && selfExperienceData.list.length > 0;
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        ref={scrollRef}
        style={{
          height: '100dvh',
          overflow: 'auto',
          pointerEvents: isLoading ? 'none' : 'auto',
        }}
      >
        {!hasData && !isLoading && <ShareExperenceProfileTabListEmpty />}
        {selfExperienceData && (
          <InfiniteList
            parentRef={scrollRef}
            list={selfExperienceData?.list}
            pagination={{
              pageNo: pageNo,
              isLoading: isLoading,
              callPagination: updatePageNo,
              pageSize: EXPERIENCES_PROFILE_PAGE_SIZE,
              totalCount: selfExperienceData.totalCount,
            }}
            renderItem={(item) => (
              <ShareExperiencePostCardModules
                {...item}
                key={item.id}
                isSelf={isSelf}
                className="border-b-[1px] border-b-impo_Neutral_Surface z-0"
                type="activitiesExperienceType"
                shareId={item.id}
                hasLinkTo
              />
            )}
          />
        )}
      </div>
    </>
  );
};

export default ShareExperienceProfileActivities;

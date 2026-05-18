import { useRef } from 'react';

import { InfiniteList } from '@repo/core/components/InfiniteList';
import { EXPERIENCES_PROFILE_PAGE_SIZE, Loading } from '@repo/core/components/ShareExperience';

import ShareExperiencePostCardModules from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperiencePostCardModules';
import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';

import ShareExperenceProfileTabListEmpty from '../ShareExperenceProfileTabListEmpty';
import useSelfExperienceData from './__hooks__/useSelfExperienceData';
import { ShareExperienceProfileSelfListPropsType } from './type';

const ShareExperienceProfileSelfList = ({ id, isSelf }: ShareExperienceProfileSelfListPropsType) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { selfExperienceData, isLoading, pageNo, updatePageNo } = useSelfExperienceData({ id, isSelf });

  const hasData = selfExperienceData && selfExperienceData.list.length > 0;

  return (
    <>
      <div
        ref={scrollRef}
        style={{
          height: '100dvh',
          overflow: 'auto',
          paddingBottom: FOOTER_HEIGHT,
          pointerEvents: isLoading ? 'none' : 'auto',
        }}
      >
        {isLoading && selfExperienceData === undefined && <Loading />}

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

export default ShareExperienceProfileSelfList;

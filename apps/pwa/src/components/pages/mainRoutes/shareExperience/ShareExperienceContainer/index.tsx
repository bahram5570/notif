'use client';

import { useRef } from 'react';

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';

import ShareExperienceBanner from '../ShareExperienceModules/ShareExperienceBanner';
import ShareExperienceToast from '../ShareExperienceModules/ShareExperienceToast';
import ShareExperienceAvatar from './ShareExperienceAvatar';
import ShareExperienceCategories from './ShareExperienceCategories';
import ShareExperienceExperiences from './ShareExperienceExperiences';
import ShareExperienceNewLink from './ShareExperienceNewLink';
import ShareExperienceSkeleton from './ShareExperienceSkeleton';
import ShareExperienceTopics from './ShareExperienceTopics';
import useCategories from './__hooks__/useCategories';
import useShareExperienceGetData from './__hooks__/useShareExperienceGetData';
import useShareExperienceInitialRedirect from './__hooks__/useShareExperienceInitialRedirect';
import useTopics from './__hooks__/useTopics';

const ShareExperienceContainer = () => {
  useShareExperienceInitialRedirect();
  const { isLoading, data, onSuccessNewHandler } = useShareExperienceGetData();

  const scrollRef = useRef<HTMLDivElement>(null);
  const { categories, selectedCategoryId, selectedCategoryIdHandler } = useCategories(data?.categories);
  const { topics } = useTopics(data?.topics);

  return (
    <>
      <MainPageLayoutHeader leftElement1="Profile" leftElement2="Notification" />
      <div
        ref={scrollRef}
        className={`flex-1 overflow-y-auto ${isLoading ? 'pointer-events-none' : ''}`}
        style={{ height: '100dvh' }}
      >
        {isLoading && !data && <ShareExperienceSkeleton />}

        {!isLoading && data && (
          <>
            <ShareExperienceAvatar profile={data.profile} />
            <ShareExperienceNewLink />

            {topics && <ShareExperienceTopics topics={topics} />}
            {data.bannerMedia && <ShareExperienceBanner bannerMedia={data.bannerMedia} />}

            {categories && selectedCategoryId && (
              <ShareExperienceCategories
                categories={categories}
                selectedCategoryId={selectedCategoryId}
                selectedCategoryIdHandler={selectedCategoryIdHandler}
              />
            )}

            {data.toastText && (
              <div className="px-4 pb-4">
                <ShareExperienceToast toastMessage={data.toastText} showCloseBtn />
              </div>
            )}

            {selectedCategoryId && (
              <ShareExperienceExperiences
                profile={data.profile}
                key={selectedCategoryId}
                selectedCategoryId={selectedCategoryId}
                onSuccessNewHandler={onSuccessNewHandler}
                scrollRef={scrollRef}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ShareExperienceContainer;

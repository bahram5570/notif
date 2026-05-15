'use client';

import { useRef } from 'react';

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { CategoriesSlider, ShareExperienceToast } from '@repo/core/components/ShareExperience';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';

import ShareExperienceBanner from '../ShareExperienceModules/ShareExperienceBanner';
import ShareExperienceAvatar from './ShareExperienceAvatar';
import ShareExperienceExperiences from './ShareExperienceExperiences';
import ShareExperienceFailureModal from './ShareExperienceFailureModal';
import ShareExperienceNewLink from './ShareExperienceNewLink';
import ShareExperienceSkeleton from './ShareExperienceSkeleton';
import ShareExperienceTopics from './ShareExperienceTopics';
import useCategories from './__hooks__/useCategories';
import useShareExperienceGetData from './__hooks__/useShareExperienceGetData';
import useShareExperienceInitialRedirect from './__hooks__/useShareExperienceInitialRedirect';

const ShareExperienceContainer = () => {
  const { isLoading, data, onSuccessNewHandler } = useShareExperienceGetData();

  const scrollRef = useRef<HTMLDivElement>(null);
  useShareExperienceInitialRedirect(Boolean(data));
  const { categories, selectedCategoryId, selectedCategoryHandler, showAssociation } = useCategories(data?.categories);

  return (
    <>
      <MainPageLayoutHeader leftElement1="Profile" leftElement2="Notification" />

      <div
        ref={scrollRef}
        style={{
          height: '100dvh',
          overflow: 'auto',
          paddingBottom: FOOTER_HEIGHT + 16,
          pointerEvents: isLoading ? 'none' : 'auto',
        }}
      >
        {isLoading && !data && <ShareExperienceSkeleton />}

        {!isLoading && data && (
          <>
            {data.failure && <ShareExperienceFailureModal error={data.error} />}

            {!data.failure && (
              <>
                <ShareExperienceAvatar profile={data.profile} />

                <ShareExperienceNewLink />

                {data.topics && <ShareExperienceTopics topics={data.topics} />}

                {data.bannerMedia && <ShareExperienceBanner bannerMedia={data.bannerMedia} />}

                {categories && selectedCategoryId && (
                  <CategoriesSlider
                    categories={categories}
                    selectedCategoryId={selectedCategoryId}
                    selectedCategoryHandler={selectedCategoryHandler}
                  />
                )}

                {data.toastText && (
                  <div className="px-4 pb-4">
                    <ShareExperienceToast toastMessage={data.toastText} showCloseBtn />
                  </div>
                )}

                {selectedCategoryId && (
                  <ShareExperienceExperiences
                    scrollRef={scrollRef}
                    profile={data.profile}
                    key={selectedCategoryId}
                    associations={data.associations}
                    showAssociation={showAssociation}
                    selectedCategoryId={selectedCategoryId}
                    onSuccessNewHandler={onSuccessNewHandler}
                    associationSectionTitle={data.associationSectionTitle}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ShareExperienceContainer;

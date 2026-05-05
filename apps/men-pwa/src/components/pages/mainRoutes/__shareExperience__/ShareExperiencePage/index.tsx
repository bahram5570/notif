'use client';

import { useRef } from 'react';

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';
import { CategoriesSlider } from '@repo/core/components/ShareExperience';

import ShareExperienceBanner from '../ShareExperienceModules/ShareExperienceBanner';
import ShareExperienceToast from '../ShareExperienceModules/ShareExperienceToast';
import ShareExperienceAvatar from './ShareExperienceAvatar';
import ShareExperienceExperiences from './ShareExperienceExperiences';
import ShareExperienceFailureModal from './ShareExperienceFailureModal';
import ShareExperienceNewLink from './ShareExperienceNewLink';
import ShareExperienceSkeleton from './ShareExperienceSkeleton';
import ShareExperienceTopics from './ShareExperienceTopics';
import useCategories from './__hooks__/useCategories';
import useShareExperienceGetData from './__hooks__/useShareExperienceGetData';

const ShareExperiencePage = () => {
  const { data, isLoading, onSuccessNewHandler } = useShareExperienceGetData();
  const { categories, selectedCategoryHandler, selectedCategoryId, showAssociation } = useCategories(data?.categories);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <MainPageLayoutHeader leftElement1="Profile" />

      <div
        ref={scrollRef}
        style={{ height: '100dvh' }}
        className={`flex-1 overflow-y-auto ${isLoading ? 'pointer-events-none' : ''}`}
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
                    profile={data.profile}
                    key={selectedCategoryId}
                    selectedCategoryId={selectedCategoryId}
                    onSuccessNewHandler={onSuccessNewHandler}
                    scrollRef={scrollRef}
                    showAssociation={showAssociation}
                    associationSectionTitle={data.associationSectionTitle}
                    associations={data.associations}
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

export default ShareExperiencePage;

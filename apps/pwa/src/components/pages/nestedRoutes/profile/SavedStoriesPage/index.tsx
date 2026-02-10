'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import StoryItemGenerator from '@components/Widgets/widgetGenerator/WidgetStoryCard/StoryItemGenerator';
import StoryPreview from '@components/Widgets/widgetGenerator/WidgetStoryCard/StoryPreview';

import SavedStoriesSkeleton from './SavedStoriesSkeleton';
import useGetData from './__hooks__/useGetData';

const SavedStoriesPage = () => {
  const { isLoading, data, saveHandler } = useGetData();

  const hasData = !isLoading && typeof data !== 'undefined';

  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript="استوری‌های ذخیره شده"
      className="px-4 bg-impo_Neutral_Surface"
    >
      <div className="w-full p-4 rounded-xl bg-impo_Neutral_Background">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          اینجا میتونی توصیه های تخصصی که ذخیره کردی رو به صورت کلی داشته باشی
        </CustomTypography>

        <div className="w-full h-[1px] mt-2 mb-4 bg-impo_Neutral_Surface" />

        <div className="w-full grid grid-cols-3 gap-x-1 gap-y-6" dir="rtl">
          {isLoading && <SavedStoriesSkeleton />}

          {hasData && (
            <>
              {data.items.map((item, index) => (
                <StoryItemGenerator
                  coverImage={item.coverImage}
                  isViewed={item.isViewed}
                  text={item.text}
                  id={item.id}
                  key={index}
                />
              ))}

              <StoryPreview list={data.items} saveHandler={saveHandler} />
            </>
          )}
        </div>
      </div>
    </MainPageLayout>
  );
};

export default SavedStoriesPage;

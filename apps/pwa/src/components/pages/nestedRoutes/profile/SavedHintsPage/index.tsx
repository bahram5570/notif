'use client';

import WidgetHintCardGenerator from '@components/Widgets/widgetGenerator/WidgetHintCard/WidgetHintCardGenerator';
import WomenPageLayout from '@components/WomenPageLayout';

import SavedHintsContainerSkeleton from './SavedHintsContainerSkeleton';
import useGetData from './__hooks__/useGetData';

const SavedHintsPage = () => {
  const { isLoading, data } = useGetData();

  const hasData = !isLoading && typeof data !== 'undefined';

  return (
    <WomenPageLayout
      rightElement="BackButton"
      rightElementScript="توصیه‌های ذخیره شده"
      className="px-4 bg-impo_Neutral_Surface"
    >
      {isLoading && <SavedHintsContainerSkeleton />}

      {hasData && (
        <div className="w-full flex flex-col gap-4">
          {data.items.map((item, index) => (
            <div className="w-full rounded-2xl p-4 bg-impo_Neutral_Background" key={index}>
              <WidgetHintCardGenerator {...item} isLastChild={true} minReadingDuration={1000} />
            </div>
          ))}
        </div>
      )}
    </WomenPageLayout>
  );
};

export default SavedHintsPage;

'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { WidgetGenerators } from '@repo/core/components/Widgets/WidgetGenerators';

import useGetKnowledgeData from './__hooks__/useGetKnowledgeData';

const KnowledgePage = () => {
  const { data, isLoading } = useGetKnowledgeData();

  return (
    <MainPageLayout leftElement1="Profile">
      {isLoading && !data && <div></div>}
      {!isLoading && data && (
        <div className="flex flex-col gap-6 min-h-[100dvh]">
          <div className="flex flex-col">
            {data.widgets.map((widget, index) => (
              <WidgetGenerators {...widget} key={index} />
            ))}
          </div>
        </div>
      )}
    </MainPageLayout>
  );
};

export default KnowledgePage;

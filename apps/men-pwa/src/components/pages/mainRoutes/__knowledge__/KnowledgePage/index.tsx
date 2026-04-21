'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { WidgetGenerators } from '@repo/core/components/Widgets/WidgetGenerators';

import { FOOTER_HEIGHT, HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import ArticleList from './ArticleList';
import ClinicBanner from './ClinicBanner';
import useGetKnowledgeData from './__hooks__/useGetKnowledgeData';

const KnowledgePage = () => {
  const { data, isLoading } = useGetKnowledgeData();

  return (
    <MainPageLayout leftElement1="Profile" rightElementScript="دانش" paddingTop={0}>
      {isLoading && !data && <div></div>}
      {!isLoading && data && (
        <div
          className="flex flex-col gap-4 min-h-[100dvh] "
          style={{ paddingBottom: FOOTER_HEIGHT + 20, paddingTop: HEADER_HEIGHT + 10 }}
        >
          <div className="flex flex-col">
            {data.widgets.map((widget, index) => (
              <WidgetGenerators {...widget} key={index} />
            ))}
          </div>
          <div className="pr-4 pl-1">
            <div className="pl-4">
              <ClinicBanner />
            </div>
            <ArticleList items={data.items} />
          </div>
        </div>
      )}
    </MainPageLayout>
  );
};

export default KnowledgePage;

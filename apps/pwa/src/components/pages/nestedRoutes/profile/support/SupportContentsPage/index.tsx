'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import SupportCardGenerator from '../SupportCardGenerator';
import useGetCategoryData from '../__hooks__/useGetCategoryData';
import SupportContentsPageSkeleton from './SupportContentsPageSkeleton';
import SupportContentsWebView from './SupportContentsWebView';

const SupportContentsPage = ({ categoryId }: { categoryId: string }) => {
  const { categoryLoading, categoryData } = useGetCategoryData(categoryId);

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="پشتیبانی" className="pb-4">
      <>
        {categoryLoading && <SupportContentsPageSkeleton />}

        {categoryData && (
          <>
            {categoryData.url && <SupportContentsWebView url={categoryData.url} />}

            {!categoryData.url && (
              <div className="w-full flex flex-col p-4">
                {categoryData.items.map((item, index) => (
                  <SupportCardGenerator title={item.title} id={item.id} isFirstChild={index === 0} key={index} />
                ))}
              </div>
            )}
          </>
        )}
      </>
    </MainPageLayout>
  );
};

export default SupportContentsPage;

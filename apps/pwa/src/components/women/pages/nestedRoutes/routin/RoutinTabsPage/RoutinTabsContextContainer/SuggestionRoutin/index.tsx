import { useEffect } from 'react';

import RoutinCard from '@components/__routin__/RoutinCard';
import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import RoutinListEmpty from '../RoutinListEmpty';
import RoutinTabSkeleton from '../RoutinTabSkeleton';
import useGetSuggestionRoutinData from './__hooks__/useGetSuggestionRoutinData';

const SuggestionRoutin = () => {
  const { data, isLoading, pageNo, updatePageNo, isFirstLoad } = useGetSuggestionRoutinData();
  const hasData = data && data.programs.length > 0;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <InfiniteScrollContainer
      callBack={updatePageNo}
      isLoading={isLoading}
      pageNo={pageNo}
      totalCount={data?.totalCount || 10}
      height={`calc(100dvh - ${HEADER_HEIGHT + 90}px)`}
    >
      {isFirstLoad && <RoutinTabSkeleton />}
      {!isFirstLoad && (
        <div className=" flex flex-col gap-4 px-4 py-5">
          {!hasData && <RoutinListEmpty title="هیچ برنامه‌ای برای امروزت وجود نداره" />}
          {hasData &&
            data.programs.map((program, index) => {
              return (
                <div className="flex flex-row w-full" key={index}>
                  <RoutinCard data={program} showDescription={true} />
                </div>
              );
            })}
        </div>
      )}
    </InfiniteScrollContainer>
  );
};

export default SuggestionRoutin;

import RoutinCard from '@components/__routin__/RoutinCard';
import InfiniteScrollContainer from '@components/infiniteScrollContainer';

import RoutinListEmpty from '../RoutinListEmpty';
import RoutinTabSkeleton from '../RoutinTabSkeleton';
import useGetSuggestionRoutinData from './__hooks__/useGetSuggestionRoutinData';

const SuggestionRoutin = () => {
  const { data, isLoading, callApi, pageNo, updatePageNo } = useGetSuggestionRoutinData();
  const hasData = data && data.programs.length > 0;

  return (
    <InfiniteScrollContainer
      callApi={callApi}
      isLoading={isLoading}
      pageNo={pageNo}
      updatePageNo={updatePageNo}
      totalCount={data?.totalCount || 10}
      height={'80dvh'}
    >
      {isLoading && <RoutinTabSkeleton />}
      {!isLoading && (
        <div className=" flex flex-col gap-3 px-4 py-5">
          {!hasData && <RoutinListEmpty />}
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

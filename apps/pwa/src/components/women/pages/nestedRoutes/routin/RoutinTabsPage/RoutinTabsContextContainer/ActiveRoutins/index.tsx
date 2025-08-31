import RoutinCard from '@components/__routin__/RoutinCard';

import RoutinListEmpty from '../RoutinListEmpty';
import RoutinTabSkeleton from '../RoutinTabSkeleton';
import useGetActiveRoutinData from './__hooks__/useGetActiveRoutinData';

const ActiveRoutins = () => {
  const { data, isLoading } = useGetActiveRoutinData();
  const hasData = data && data.programs.length > 0;

  return (
    <div className=" flex flex-col gap-3 px-4 py-5">
      {isLoading && <RoutinTabSkeleton />}

      {!isLoading && (
        <>
          {!hasData && <RoutinListEmpty />}
          {hasData &&
            data.programs.map((program, index) => {
              return (
                <div className="flex flex-row w-full" key={index}>
                  <RoutinCard data={program} showDescription={true} />
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default ActiveRoutins;

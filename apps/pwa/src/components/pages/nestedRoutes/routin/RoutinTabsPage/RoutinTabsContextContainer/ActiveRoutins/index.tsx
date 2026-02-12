import { RoutinCard } from '@repo/core/components/Routin/RoutinCard';

import RoutinListEmpty from '../RoutinListEmpty';
import RoutinTabSkeleton from '../RoutinTabSkeleton';
import useGetActiveRoutinData from './__hooks__/useGetActiveRoutinData';

const ActiveRoutins = () => {
  const { data, isLoading } = useGetActiveRoutinData();
  const hasData = data && data.programs.length > 0;

  return (
    <div className=" flex flex-col gap-4 px-4 py-5">
      {isLoading && <RoutinTabSkeleton />}

      {!isLoading && (
        <>
          {!hasData && <RoutinListEmpty title="هنوز هیچ برنامه‌ای رو شروع نکردی" />}
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

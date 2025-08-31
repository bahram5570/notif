import RoutinCard from '@components/__routin__/RoutinCard';

import useGetSavedRoutinData from './__hooks__/useGetSavedRoutinData';

const SavedRoutin = () => {
  const { data, isLoading } = useGetSavedRoutinData();
  const hasData = data && data.programs.length > 0;
  return (
    <div className=" flex flex-col gap-3 px-4 py-5">
      {!hasData && <></>}
      {hasData &&
        data.programs.map((program, index) => {
          return (
            <div className="flex flex-row w-full" key={index}>
              <RoutinCard data={program} showDescription={true} />
            </div>
          );
        })}
    </div>
  );
};

export default SavedRoutin;

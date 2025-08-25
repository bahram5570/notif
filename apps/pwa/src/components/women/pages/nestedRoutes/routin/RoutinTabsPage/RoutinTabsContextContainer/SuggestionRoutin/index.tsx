import RoutinCard from '@components/__routin__/RoutinCard';

import { data } from '../../constants';

const SuggestionRoutin = () => {
  return (
    <div className=" flex flex-col gap-3 px-4 py-5">
      {data.map((item, index) => {
        return (
          <div className="flex flex-row w-full" key={index}>
            <RoutinCard data={item} showDescription={true} />
          </div>
        );
      })}
    </div>
  );
};

export default SuggestionRoutin;

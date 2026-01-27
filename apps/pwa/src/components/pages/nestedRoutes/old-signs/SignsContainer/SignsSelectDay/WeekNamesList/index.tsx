import Dark_Typography from '@components/ui/Dark_Typography';

import useUpdateWeekNamesList from './__hooks__/useUpdateWeekNamesList';
import { WeekNamesListProps } from './types';

const WeekNamesList = ({ infoList, slide }: WeekNamesListProps) => {
  const { updatedList } = useUpdateWeekNamesList(infoList);
  const updatedSlide = slide + 1;

  return (
    <div className="w-full grid grid-cols-3">
      {updatedList && (
        <>
          <Dark_Typography
            className={`mr-auto text-center ${updatedSlide >= infoList.length ? 'text-impo_Transparent' : 'text-impo_Surface_Outline'}`}
            fontSize="Body_Medium"
          >
            {updatedList[updatedSlide + 1]}
          </Dark_Typography>

          <Dark_Typography fontSize="Title_Small" className="mx-auto text-center">
            {updatedList[updatedSlide]}
          </Dark_Typography>

          <Dark_Typography fontSize="Body_Medium" className="ml-auto">
            {updatedList[updatedSlide - 1]}
          </Dark_Typography>
        </>
      )}
    </div>
  );
};

export default WeekNamesList;

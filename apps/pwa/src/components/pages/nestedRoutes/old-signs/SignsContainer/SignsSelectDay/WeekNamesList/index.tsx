import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useUpdateWeekNamesList from './__hooks__/useUpdateWeekNamesList';
import { WeekNamesListProps } from './types';

const WeekNamesList = ({ infoList, slide }: WeekNamesListProps) => {
  const { updatedList } = useUpdateWeekNamesList(infoList);
  const updatedSlide = slide + 1;

  return (
    <div className="w-full grid grid-cols-3">
      {updatedList && (
        <>
          <CustomTypography
            className={`mr-auto text-center ${updatedSlide >= infoList.length ? 'text-impo_Transparent' : 'text-impo_Surface_Outline'}`}
            fontSize="Body_Medium"
          >
            {updatedList[updatedSlide + 1]}
          </CustomTypography>

          <CustomTypography fontSize="Title_Small" className="mx-auto text-center">
            {updatedList[updatedSlide]}
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="ml-auto">
            {updatedList[updatedSlide - 1]}
          </CustomTypography>
        </>
      )}
    </div>
  );
};

export default WeekNamesList;

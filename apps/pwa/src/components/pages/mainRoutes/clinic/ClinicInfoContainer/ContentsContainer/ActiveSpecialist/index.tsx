import ChangeArrowsIcon from '@assets/icons/changeArrows.svg';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { SPECIALISTS_LIST_QUERY_NAME } from '../constants';
import { ActiveSpecialistProps } from './types';

const ActiveSpecialist = ({ isMoreThanOne }: ActiveSpecialistProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const openSpecialistsHandler = () => {
    newQueryParamsHandler({ [SPECIALISTS_LIST_QUERY_NAME]: 'true' });
  };

  return (
    <>
      <div className="relative z-0 w-full flex flex-row-reverse items-center justify-between">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          متخصص فعال
        </Dark_Typography>

        {isMoreThanOne && (
          <Dark_Button
            onClick={openSpecialistsHandler}
            navigationLoadingId="ActiveSpecialist"
            className="!w-fit !h-8 !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
          >
            <div className="flex items-center gap-1">
              <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface">
                تغییر متخصص
              </Dark_Typography>
              <ChangeArrowsIcon className="w-4 h-auto fill-impo_Primary_Primary" />
            </div>
          </Dark_Button>
        )}
      </div>
    </>
  );
};

export default ActiveSpecialist;

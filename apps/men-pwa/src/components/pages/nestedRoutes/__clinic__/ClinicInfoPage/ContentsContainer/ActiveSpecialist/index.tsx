import ChangeArrowsIcon from '@assets/shared/icons/changeArrows.svg';
import { SPECIALISTS_LIST_QUERY_NAME } from '@repo/core/components/clinic';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ActiveSpecialistProps } from './types';

const ActiveSpecialist = ({ isMoreThanOne }: ActiveSpecialistProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const openSpecialistsHandler = () => {
    newQueryParamsHandler({ [SPECIALISTS_LIST_QUERY_NAME]: 'true' });
  };

  return (
    <>
      <div className="relative z-0 w-full flex flex-row-reverse items-center justify-between">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          متخصص فعال
        </CustomTypography>

        {isMoreThanOne && (
          <CustomButton
            onClick={openSpecialistsHandler}
            navigationLoadingId="ActiveSpecialist"
            className="!w-fit !h-8 !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
          >
            <div className="flex items-center gap-1">
              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface">
                تغییر متخصص
              </CustomTypography>
              <ChangeArrowsIcon className="w-4 h-auto fill-impo_Blue_900" />
            </div>
          </CustomButton>
        )}
      </div>
    </>
  );
};

export default ActiveSpecialist;

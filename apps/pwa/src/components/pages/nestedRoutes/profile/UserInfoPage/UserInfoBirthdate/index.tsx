import { useMemo } from 'react';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toJalaliData } from '@repo/core/utils/dates';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { UserInfoBirthdateTypes } from './types';

const UserInfoBirthdate = ({ value, valueHandler, name }: UserInfoBirthdateTypes) => {
  const { culture } = useCulture();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const updatedValue = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        return value.replaceAll('-', '/');

      case CalendarTypeEnum.Jalali:
        return toJalaliData(value);

      default:
        return toJalaliData(value);
    }
  }, [culture.calendarType, value]);

  const selectHandler = () => {
    newQueryParamsHandler({ [MODALS.USER_INFO]: name });
    pageNavigationHandler({ showProgressBar: false, id: name });
  };

  const isLoading = pageNavigationLoading === name;

  return (
    <div onClick={selectHandler} className="w-full flex justify-end items-center">
      {isLoading && <CustomSpinner size={24} />}

      {!isLoading && (
        <CustomTypography fontSize="Body_Large" className="text-impo_Surface_OnSurfaceVariant">
          {`${updatedValue}`}
        </CustomTypography>
      )}
    </div>
  );
};

export default UserInfoBirthdate;

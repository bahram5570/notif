import { useMemo } from 'react';

import { toJalaliData } from '@utils/dates';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

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
      {isLoading && <Spinner color="primary" width={24} />}

      {!isLoading && (
        <Typography scale="Body" size="Large" color="Surface_OnSurfaceVariant">
          {`${updatedValue}`}
        </Typography>
      )}
    </div>
  );
};

export default UserInfoBirthdate;
